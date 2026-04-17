# 网站部署指南

## 架构概览

```
用户请求
    ↓
智能DNS（腾讯云DNSPod）
    ↓
┌──────────┴──────────┐
↓                     ↓
中国用户              海外用户
↓                     ↓
腾讯云CDN             Cloudflare CDN
↓                     ↓
腾讯云香港服务器（Next.js + FastAPI + Directus）
```

---

## 服务器部署

### 1. 购买腾讯云服务器

**推荐配置**：
- 地区：香港
- 配置：2核4G
- 带宽：5Mbps（按流量计费）
- 系统：Ubuntu 22.04 LTS
- 成本：约¥300/月

### 2. 服务器环境安装

```bash
# 连接服务器
ssh root@your-server-ip

# 更新系统
apt update && apt upgrade -y

# 安装Docker
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker

# 安装Docker Compose
apt install docker-compose -y

# 安装Node.js（用于Next.js）
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 安装PM2（进程管理）
npm install -g pm2
```

### 3. 部署后端（Directus + FastAPI）

```bash
# 创建项目目录
mkdir -p /var/www/equestrian
cd /var/www/equestrian

# 克隆代码
git clone <your-repo-url> .

# 启动Directus（Docker）
cd backend
docker-compose up -d

# 启动FastAPI
cd backend
pip3 install -r requirements.txt
pm2 start "uvicorn main:app --host 0.0.0.0 --port 8000" --name fastapi
pm2 save
pm2 startup
```

### 4. 部署前端（Next.js）

```bash
cd frontend

# 安装依赖
npm install

# 配置环境变量
cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_DIRECTUS_URL=http://localhost:8055
NODE_ENV=production
EOF

# 构建
npm run build

# 启动
pm2 start npm --name "nextjs" -- start
pm2 save
```

### 5. 配置Nginx反向代理

```bash
# 安装Nginx
apt install nginx -y

# 配置文件
cat > /etc/nginx/sites-available/equestrian << 'EOF'
# 上游服务器
upstream nextjs {
    server 127.0.0.1:3000;
    keepalive 64;
}

upstream fastapi {
    server 127.0.0.1:8000;
    keepalive 64;
}

# HTTP重定向到HTTPS
server {
    listen 80;
    server_name www.equestrian-simulators.com equestrian-simulators.com;
    return 301 https://www.equestrian-simulators.com$request_uri;
}

# HTTPS主站
server {
    listen 443 ssl http2;
    server_name www.equestrian-simulators.com;

    # SSL证书（需要申请）
    ssl_certificate /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;

    # SSL配置
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # 静态资源缓存（给CDN抓取）
    location /_next/static/ {
        proxy_pass http://nextjs;
        proxy_cache_valid 200 30d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /images/ {
        proxy_pass http://nextjs;
        proxy_cache_valid 200 7d;
        add_header Cache-Control "public, max-age=604800";
    }

    # API转发
    location /api/ {
        proxy_pass http://fastapi;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Next.js主应用
    location / {
        proxy_pass http://nextjs;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
        
        # HTML缓存策略（短期）
        add_header Cache-Control "public, max-age=3600, s-maxage=3600";
    }

    # Gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_comp_level 6;
}
EOF

# 启用配置
ln -s /etc/nginx/sites-available/equestrian /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## CDN配置

### 方案A：腾讯云CDN（中国用户）

#### 1. 购买腾讯云CDN

- 登录腾讯云控制台
- 进入 CDN 管理
- 添加加速域名：`cdn-cn.equestrian-simulators.com`
- 源站类型：自有源站
- 源站地址：`your-server-ip`

#### 2. 缓存配置

**静态资源缓存**：
```
路径规则                      缓存时间
/_next/static/*              30天
/images/*                    7天
/*.jpg, *.png, *.webp        7天
/*.css, *.js                 7天
/*.woff, *.woff2, *.ttf      30天
```

**HTML缓存**：
```
路径规则                      缓存时间
/                            1小时
/zh, /en, /ja, etc.          1小时
其他HTML页面                  1小时
```

#### 3. 回源配置

- 协议跟随：是
- 回源Host：www.equestrian-simulators.com
- Range回源：开启

#### 4. HTTPS配置

- 上传SSL证书
- 强制HTTPS：开启
- HTTP/2：开启

---

### 方案B：Cloudflare CDN（海外用户）

#### 1. 添加网站到Cloudflare

- 登录Cloudflare
- 添加站点：equestrian-simulators.com
- 选择计划：Free

#### 2. DNS配置

```
类型   名称    内容                      代理状态
A      @       your-server-ip            已代理（橙色云）
A      www     your-server-ip            已代理（橙色云）
CNAME  cdn-cn  <腾讯云CDN域名>           仅DNS（灰色云）
```

#### 3. 缓存规则

**页面规则（Page Rules）**：

```
规则1：静态资源
URL: *equestrian-simulators.com/_next/static/*
设置：
  - 缓存级别：缓存所有内容
  - 边缘缓存TTL：1个月
  - 浏览器缓存TTL：1个月

规则2：图片
URL: *equestrian-simulators.com/images/*
设置：
  - 缓存级别：缓存所有内容
  - 边缘缓存TTL：7天
  - 浏览器缓存TTL：7天

规则3：HTML
URL: *equestrian-simulators.com/*
设置：
  - 缓存级别：标准
  - 边缘缓存TTL：1小时
  - 浏览器缓存TTL：1小时
```

#### 4. 性能优化

- Auto Minify：开启（HTML + CSS + JS）
- Brotli：开启
- HTTP/2：开启
- HTTP/3：开启

---

## 智能DNS配置（DNSPod）

### 1. 购买DNSPod专业版

- 支持分地区解析
- 成本：约¥300/年

### 2. DNS记录配置

```
主机记录   记录类型   线路类型    记录值                    TTL
@          A         默认        your-server-ip            600
@          CNAME     中国        cdn-cn.equestrian...      600
@          A         海外        your-server-ip (CF代理)   600

www        A         默认        your-server-ip            600
www        CNAME     中国        cdn-cn.equestrian...      600
www        A         海外        your-server-ip (CF代理)   600
```

**分流逻辑**：
- 中国IP → 腾讯云CDN
- 海外IP → Cloudflare CDN
- 其他/默认 → 源站

---

## 部署检查清单

### 服务器
- [ ] 服务器购买完成（腾讯云香港）
- [ ] Docker安装完成
- [ ] Node.js安装完成
- [ ] Nginx安装完成

### 后端
- [ ] Directus运行（http://localhost:8055）
- [ ] FastAPI运行（http://localhost:8000）
- [ ] 数据库正常

### 前端
- [ ] Next.js构建成功
- [ ] Next.js运行（http://localhost:3000）
- [ ] 环境变量配置正确

### CDN
- [ ] 腾讯云CDN配置完成
- [ ] Cloudflare CDN配置完成
- [ ] DNS解析配置完成
- [ ] SSL证书配置完成

### 测试
- [ ] 中国访问测试（通过腾讯云CDN）
- [ ] 海外访问测试（通过Cloudflare CDN）
- [ ] 所有页面加载正常
- [ ] 表单提交正常
- [ ] 7种语言都正常

---

## 成本预算

### 一次性成本
- 域名（已有）：¥0
- SSL证书（Let's Encrypt）：¥0

### 月度成本（中国）
- 服务器（2核4G香港）：¥300
- 腾讯云CDN流量（100GB）：¥100
- DNSPod专业版：¥25
- **小计**：¥425/月

### 月度成本（海外）
- Cloudflare CDN：$0（免费）

### 年度总成本
- **¥5,100/年**

---

## 性能目标

### 中国用户
- 首页加载：< 1秒
- 产品详情页：< 1.5秒
- 静态资源：< 200ms

### 海外用户
- 首页加载：< 0.8秒
- 产品详情页：< 1.2秒
- 静态资源：< 100ms

---

## 监控和维护

### 性能监控
- 使用腾讯云监控
- 使用Cloudflare Analytics
- 配置告警（服务器Down、响应慢）

### 日常维护
- 每周检查服务器状态
- 每月查看CDN流量
- 定期更新依赖

### 备份策略
- 数据库每天自动备份
- 代码托管在GitHub
- 配置文件版本控制

---

**部署文档创建完成！文件位置：D:\equestrian-web\DEPLOYMENT.md**
