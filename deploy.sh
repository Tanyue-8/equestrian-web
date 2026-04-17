#!/bin/bash
# 网站部署脚本

set -e  # 遇到错误立即退出

echo "=========================================="
echo "  马术模拟器网站部署脚本"
echo "=========================================="
echo ""

# 配置变量
SERVER_IP=${SERVER_IP:-"your-server-ip"}
SERVER_USER=${SERVER_USER:-"root"}
PROJECT_DIR="/var/www/equestrian"
BACKUP_DIR="/var/backups/equestrian"

# 颜色输出
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 检查环境变量
if [ "$SERVER_IP" = "your-server-ip" ]; then
    echo -e "${RED}错误: 请设置 SERVER_IP 环境变量${NC}"
    echo "例如: export SERVER_IP=123.45.67.89"
    exit 1
fi

echo -e "${YELLOW}部署目标:${NC} $SERVER_USER@$SERVER_IP:$PROJECT_DIR"
echo ""

# 步骤1：本地构建测试
echo -e "${GREEN}[1/6] 本地构建测试...${NC}"
cd frontend
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}构建失败，终止部署${NC}"
    exit 1
fi
echo -e "${GREEN}✓ 构建成功${NC}"
echo ""

# 步骤2：备份远程数据
echo -e "${GREEN}[2/6] 备份远程数据...${NC}"
ssh $SERVER_USER@$SERVER_IP << 'EOF'
    mkdir -p /var/backups/equestrian
    BACKUP_FILE="/var/backups/equestrian/backup-$(date +%Y%m%d-%H%M%S).tar.gz"
    cd /var/www/equestrian
    tar -czf $BACKUP_FILE backend/.env frontend/.env.local
    echo "备份文件: $BACKUP_FILE"
EOF
echo -e "${GREEN}✓ 备份完成${NC}"
echo ""

# 步骤3：上传代码
echo -e "${GREEN}[3/6] 上传代码到服务器...${NC}"
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '.git' \
    --exclude '*.log' \
    ../equestrian-web/ $SERVER_USER@$SERVER_IP:$PROJECT_DIR/
echo -e "${GREEN}✓ 上传完成${NC}"
echo ""

# 步骤4：部署后端
echo -e "${GREEN}[4/6] 部署后端服务...${NC}"
ssh $SERVER_USER@$SERVER_IP << 'EOF'
    cd /var/www/equestrian/backend
    
    # 重启Directus
    docker-compose restart
    
    # 重启FastAPI
    pm2 restart fastapi || pm2 start "uvicorn main:app --host 0.0.0.0 --port 8000" --name fastapi
    
    echo "后端服务已重启"
EOF
echo -e "${GREEN}✓ 后端部署完成${NC}"
echo ""

# 步骤5：部署前端
echo -e "${GREEN}[5/6] 部署前端服务...${NC}"
ssh $SERVER_USER@$SERVER_IP << 'EOF'
    cd /var/www/equestrian/frontend
    
    # 安装依赖
    npm install --production
    
    # 构建
    npm run build
    
    # 重启Next.js
    pm2 restart nextjs || pm2 start npm --name "nextjs" -- start
    
    echo "前端服务已重启"
EOF
echo -e "${GREEN}✓ 前端部署完成${NC}"
echo ""

# 步骤6：验证部署
echo -e "${GREEN}[6/6] 验证部署...${NC}"
sleep 5  # 等待服务启动

# 检查服务状态
ssh $SERVER_USER@$SERVER_IP << 'EOF'
    echo "服务状态:"
    pm2 status
    echo ""
    echo "Directus状态:"
    docker-compose -f /var/www/equestrian/backend/docker-compose.yml ps
EOF

# 检查网站可访问性
echo ""
echo "检查网站访问:"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://$SERVER_IP:3000/)
if [ "$HTTP_CODE" = "200" ] || [ "$HTTP_CODE" = "301" ] || [ "$HTTP_CODE" = "302" ]; then
    echo -e "${GREEN}✓ 网站可访问 (HTTP $HTTP_CODE)${NC}"
else
    echo -e "${RED}✗ 网站无法访问 (HTTP $HTTP_CODE)${NC}"
fi

echo ""
echo -e "${GREEN}=========================================="
echo "  部署完成！"
echo "==========================================${NC}"
echo ""
echo "下一步:"
echo "1. 访问 http://$SERVER_IP:3000 测试网站"
echo "2. 配置域名DNS指向 $SERVER_IP"
echo "3. 配置SSL证书"
echo "4. 配置CDN"
echo ""
