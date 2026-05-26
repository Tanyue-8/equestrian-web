#!/bin/bash
# Directus数据库自动备份脚本
# 
# 功能：
#   1. 备份PostgreSQL数据库
#   2. 压缩备份文件
#   3. 保留最近7天的备份
#   4. 上传到腾讯云COS（可选）
#
# 使用方法：
#   1. 赋予执行权限：chmod +x backup-database.sh
#   2. 手动执行：./backup-database.sh
#   3. 定时备份：crontab -e
#      添加：0 2 * * * /var/www/equestrian-web/backend/backup-database.sh
#      （每天凌晨2点执行）

# ========================================
# 配置区域
# ========================================

# 备份目录
BACKUP_DIR="/var/backups/equestrian-directus"
mkdir -p "$BACKUP_DIR"

# 数据库配置（从.env读取或手动填写）
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="directus"
DB_USER="directus"
DB_PASSWORD="${POSTGRES_PASSWORD:-your_password_here}"

# 备份文件命名
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="directus_backup_${DATE}.sql"
BACKUP_FILE_GZ="${BACKUP_FILE}.gz"

# 保留天数（超过此天数的备份将被删除）
RETENTION_DAYS=7

# 腾讯云COS配置（可选）
ENABLE_COS_UPLOAD=false
COS_BUCKET="your-bucket-name"
COS_REGION="ap-guangzhou"

# 日志文件
LOG_FILE="/var/log/directus-backup.log"

# ========================================
# 日志函数
# ========================================
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# ========================================
# 主备份流程
# ========================================
log "========== 开始备份 =========="

# 1. 备份数据库
log "正在备份数据库..."
PGPASSWORD="$DB_PASSWORD" pg_dump \
    -h "$DB_HOST" \
    -p "$DB_PORT" \
    -U "$DB_USER" \
    -d "$DB_NAME" \
    -F plain \
    > "$BACKUP_DIR/$BACKUP_FILE"

if [ $? -eq 0 ]; then
    log "✅ 数据库备份成功: $BACKUP_FILE"
else
    log "❌ 数据库备份失败"
    exit 1
fi

# 2. 压缩备份文件
log "正在压缩备份文件..."
gzip "$BACKUP_DIR/$BACKUP_FILE"

if [ $? -eq 0 ]; then
    log "✅ 压缩成功: $BACKUP_FILE_GZ"
    BACKUP_SIZE=$(du -h "$BACKUP_DIR/$BACKUP_FILE_GZ" | cut -f1)
    log "📦 备份大小: $BACKUP_SIZE"
else
    log "❌ 压缩失败"
    exit 1
fi

# 3. 清理旧备份
log "正在清理${RETENTION_DAYS}天前的旧备份..."
find "$BACKUP_DIR" -name "directus_backup_*.sql.gz" -mtime +$RETENTION_DAYS -delete
OLD_COUNT=$(find "$BACKUP_DIR" -name "directus_backup_*.sql.gz" -mtime +$RETENTION_DAYS | wc -l)
if [ $OLD_COUNT -gt 0 ]; then
    log "🗑️  已删除 $OLD_COUNT 个旧备份"
else
    log "✅ 无需清理旧备份"
fi

# 4. 上传到腾讯云COS（可选）
if [ "$ENABLE_COS_UPLOAD" = true ]; then
    log "正在上传到腾讯云COS..."
    
    # 检查coscmd是否安装
    if ! command -v coscmd &> /dev/null; then
        log "⚠️  coscmd未安装，跳过COS上传"
        log "安装方法：pip install coscmd"
    else
        coscmd upload "$BACKUP_DIR/$BACKUP_FILE_GZ" \
            "backups/directus/$BACKUP_FILE_GZ" \
            -r "$COS_REGION" \
            -b "$COS_BUCKET"
        
        if [ $? -eq 0 ]; then
            log "✅ 上传到COS成功"
        else
            log "❌ 上传到COS失败"
        fi
    fi
fi

# 5. 显示当前备份列表
log "当前备份列表："
ls -lh "$BACKUP_DIR" | grep "directus_backup_" | tee -a "$LOG_FILE"

log "========== 备份完成 =========="

# ========================================
# 备份恢复方法
# ========================================
# 1. 解压备份文件：
#    gunzip /var/backups/equestrian-directus/directus_backup_YYYYMMDD_HHMMSS.sql.gz
#
# 2. 停止Directus服务：
#    sudo systemctl stop equestrian-directus
#    或：docker-compose stop directus
#
# 3. 删除现有数据库（谨慎！）：
#    PGPASSWORD="$DB_PASSWORD" psql -h localhost -U directus -c "DROP DATABASE directus;"
#    PGPASSWORD="$DB_PASSWORD" psql -h localhost -U directus -c "CREATE DATABASE directus;"
#
# 4. 恢复数据库：
#    PGPASSWORD="$DB_PASSWORD" psql -h localhost -U directus -d directus < directus_backup_YYYYMMDD_HHMMSS.sql
#
# 5. 重启Directus服务：
#    sudo systemctl start equestrian-directus
#    或：docker-compose start directus
#
# 6. 验证恢复：
#    访问 http://localhost:8055 确认数据完整
