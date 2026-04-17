# 安全配置文档

## 🔒 已实施的安全措施

### 1. XSS跨站脚本防护 ✅
**问题：** 用户输入直接插入HTML邮件，存在XSS注入风险

**修复：**
- 所有用户输入使用`html.escape()`转义
- 邮件HTML模板已防护：name/contact/country/industry/product/message

**影响文件：**
- `backend/main.py` - `send_inquiry_email()`函数

---

### 2. SQL注入防护 ✅
**风险评估：** 低

**原因：**
- 不直接操作数据库，通过Directus API
- 所有参数通过Pydantic BaseModel验证
- httpx自动URL编码参数

---

### 3. 输入验证 ✅
**Pydantic字段限制：**
- name字段：最大100字符
- message字段：最大2000字符
- 所有字段：最大1000字符（全局限制）

**防护目标：**
- 防止超长输入导致内存溢出
- 防止恶意payload注入

---

### 4. 环境变量隔离 ✅
**敏感信息：**
- Directus Token
- Gmail SMTP密码
- CORS允许源

**配置文件：**
- `.env` - 本地开发配置（不提交Git）
- `.env.example` - 示例文件（可提交）
- `.gitignore` - 防止.env被提交

**Gmail应用密码：**
- 名称：Equestrian Website SMTP
- 生成日期：2026-04-17
- 存储位置：`backend/.env`（SMTP_PASSWORD）

---

### 5. 速率限制（生产环境）⏳
**开发环境：** 无限制

**生产环境：** 
- Nginx限流：10次/分钟（联系表单）
- Cloudflare：DDoS防护

---

### 6. CORS配置 ✅
**开发环境：**
```
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
```

**生产环境：**
```
ALLOWED_ORIGINS=https://www.equestrian-simulators.com,https://equestrian-simulators.com
```

---

## ⚠️ 待上线前配置

### 1. 更新生产环境变量
**腾讯云服务器 `.env` 文件：**
```bash
DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=生产环境token
ALLOWED_ORIGINS=https://www.equestrian-simulators.com,https://equestrian-simulators.com
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=info@equestrian-simulators.com
SMTP_PASSWORD=ilzl djao egbt hosv
ADMIN_EMAIL=info@equestrian-simulators.com
```

### 2. Nginx配置限流
```nginx
# 限制联系表单提交频率
location /api/inquiry {
    limit_req zone=inquiry burst=5 nodelay;
    proxy_pass http://localhost:8000;
}

# 限制下载请求频率
location /api/download {
    limit_req zone=download burst=3 nodelay;
    proxy_pass http://localhost:8000;
}
```

### 3. SSL/TLS证书
- Cloudflare自动管理
- 强制HTTPS跳转

---

## 🔍 安全审计记录

| 日期 | 检查项 | 状态 | 备注 |
|------|--------|------|------|
| 2026-04-17 | XSS防护 | ✅ 通过 | 邮件HTML转义 |
| 2026-04-17 | SQL注入 | ✅ 通过 | 通过API无直接SQL |
| 2026-04-17 | 环境变量 | ✅ 通过 | .env已隔离 |
| 2026-04-17 | Gmail密码 | ✅ 已更新 | 旧密码失效 |
| 2026-04-17 | 输入验证 | ✅ 通过 | 字段长度限制 |

---

## 📞 安全问题联系

如发现安全漏洞，请联系：
- **技术负责人：** 青
- **邮箱：** jiangqingsui0328@gmail.com

**请勿公开披露未修复的漏洞！**
