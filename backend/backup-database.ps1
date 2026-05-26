# Directus数据库备份脚本（Windows PowerShell版）
#
# 功能：
#   1. 备份PostgreSQL数据库
#   2. 压缩备份文件
#   3. 保留最近7天的备份
#
# 使用方法：
#   手动执行：powershell -ExecutionPolicy Bypass -File backup-database.ps1
#   定时任务：任务计划程序 → 创建任务 → 每天凌晨2点执行

# ========================================
# 配置区域
# ========================================

# 备份目录
$BACKUP_DIR = "D:\backups\equestrian-directus"
if (!(Test-Path $BACKUP_DIR)) {
    New-Item -ItemType Directory -Path $BACKUP_DIR | Out-Null
}

# 数据库配置
$DB_HOST = "localhost"
$DB_PORT = "5432"
$DB_NAME = "directus"
$DB_USER = "directus"
$DB_PASSWORD = $env:POSTGRES_PASSWORD  # 从环境变量读取

# Docker容器名称（如果使用Docker部署）
$DOCKER_CONTAINER = "equestrian-postgres"

# 备份文件命名
$DATE = Get-Date -Format "yyyyMMdd_HHmmss"
$BACKUP_FILE = "directus_backup_$DATE.sql"
$BACKUP_FILE_ZIP = "$BACKUP_FILE.zip"

# 保留天数
$RETENTION_DAYS = 7

# 日志文件
$LOG_FILE = "D:\logs\directus-backup.log"
if (!(Test-Path (Split-Path $LOG_FILE))) {
    New-Item -ItemType Directory -Path (Split-Path $LOG_FILE) | Out-Null
}

# ========================================
# 日志函数
# ========================================
function Write-Log {
    param([string]$Message)
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMessage = "[$timestamp] $Message"
    Write-Host $logMessage
    Add-Content -Path $LOG_FILE -Value $logMessage
}

# ========================================
# 主备份流程
# ========================================
Write-Log "========== 开始备份 =========="

# 1. 检查Docker是否运行
$dockerRunning = docker ps --filter "name=$DOCKER_CONTAINER" --filter "status=running" --format "{{.Names}}" 2>$null

if ($dockerRunning) {
    Write-Log "检测到Docker容器: $DOCKER_CONTAINER"
    
    # 从Docker容器备份
    Write-Log "正在从Docker容器备份数据库..."
    docker exec $DOCKER_CONTAINER pg_dump -U $DB_USER $DB_NAME > "$BACKUP_DIR\$BACKUP_FILE"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Log "✅ 数据库备份成功: $BACKUP_FILE"
    } else {
        Write-Log "❌ 数据库备份失败"
        exit 1
    }
} else {
    Write-Log "未检测到Docker容器，使用本地PostgreSQL"
    
    # 从本地PostgreSQL备份
    if (!(Test-Path "C:\Program Files\PostgreSQL\15\bin\pg_dump.exe")) {
        Write-Log "❌ 未找到pg_dump.exe，请安装PostgreSQL或检查路径"
        exit 1
    }
    
    $env:PGPASSWORD = $DB_PASSWORD
    & "C:\Program Files\PostgreSQL\15\bin\pg_dump.exe" -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -F plain > "$BACKUP_DIR\$BACKUP_FILE"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Log "✅ 数据库备份成功: $BACKUP_FILE"
    } else {
        Write-Log "❌ 数据库备份失败"
        exit 1
    }
}

# 2. 压缩备份文件
Write-Log "正在压缩备份文件..."
Compress-Archive -Path "$BACKUP_DIR\$BACKUP_FILE" -DestinationPath "$BACKUP_DIR\$BACKUP_FILE_ZIP" -Force

if ($?) {
    Write-Log "✅ 压缩成功: $BACKUP_FILE_ZIP"
    $backupSize = (Get-Item "$BACKUP_DIR\$BACKUP_FILE_ZIP").Length / 1MB
    Write-Log "📦 备份大小: $([math]::Round($backupSize, 2)) MB"
    
    # 删除未压缩的文件
    Remove-Item "$BACKUP_DIR\$BACKUP_FILE" -Force
} else {
    Write-Log "❌ 压缩失败"
    exit 1
}

# 3. 清理旧备份
Write-Log "正在清理${RETENTION_DAYS}天前的旧备份..."
$cutoffDate = (Get-Date).AddDays(-$RETENTION_DAYS)
$oldBackups = Get-ChildItem -Path $BACKUP_DIR -Filter "directus_backup_*.zip" | Where-Object { $_.LastWriteTime -lt $cutoffDate }

if ($oldBackups) {
    $oldBackups | Remove-Item -Force
    Write-Log "🗑️  已删除 $($oldBackups.Count) 个旧备份"
} else {
    Write-Log "✅ 无需清理旧备份"
}

# 4. 显示当前备份列表
Write-Log "当前备份列表："
Get-ChildItem -Path $BACKUP_DIR -Filter "directus_backup_*.zip" | 
    Select-Object Name, @{Name="Size(MB)";Expression={[math]::Round($_.Length/1MB, 2)}}, LastWriteTime |
    Format-Table -AutoSize |
    Out-String |
    ForEach-Object { Write-Log $_ }

Write-Log "========== 备份完成 =========="

# ========================================
# 恢复方法（PowerShell）
# ========================================
# 1. 解压备份文件：
#    Expand-Archive -Path "D:\backups\equestrian-directus\directus_backup_YYYYMMDD_HHMMSS.zip" -DestinationPath "D:\temp"
#
# 2. 停止Directus服务：
#    docker-compose stop directus
#
# 3. 删除现有数据库（谨慎！）：
#    docker exec equestrian-postgres psql -U directus -c "DROP DATABASE directus;"
#    docker exec equestrian-postgres psql -U directus -c "CREATE DATABASE directus;"
#
# 4. 恢复数据库：
#    Get-Content "D:\temp\directus_backup_YYYYMMDD_HHMMSS.sql" | docker exec -i equestrian-postgres psql -U directus -d directus
#
# 5. 重启Directus服务：
#    docker-compose start directus
#
# 6. 验证恢复：
#    访问 http://localhost:8055 确认数据完整
