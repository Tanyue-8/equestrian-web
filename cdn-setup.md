# CDN配置助手

## 快速配置清单

### ✅ 腾讯云CDN（中国用户）

#### 第1步：购买并添加CDN域名
1. 登录腾讯云控制台：https://console.cloud.tencent.com/cdn
2. 点击"添加域名"
3. 填写信息：
   - 加速域名：`cdn-cn.equestrian-simulators.com`
   - 所属项目：默认项目
   - 源站类型：自有源站
   - 源站地址：`your-server-ip`
   - 加速区域：中国境内

#### 第2步：配置缓存规则
进入域名管理 → 缓存配置 → 节点缓存配置：

```
优先级1：
路径：/_next/static/*
缓存时间：30天（2592000秒）

优先级2：
路径：/images/*
缓存时间：7天（604800秒）

优先级3：
文件类型：.jpg;.jpeg;.png;.gif;.webp;.ico;.svg
缓存时间：7天（604800秒）

优先级4：
文件类型：.css;.js
缓存时间：7天（604800秒）

优先级5：
文件类型：.woff;.woff2;.ttf;.eot
缓存时间：30天（2592000秒）

优先级6：
路径：/
缓存时间：1小时（3600秒）
```

#### 第3步：配置HTTPS
1. 进入域名管理 → HTTPS配置
2. 上传SSL证书（或使用免费证书）
3. 开启"强制HTTPS跳转"
4. 开启"HTTP/2"

#### 第4步：配置回源
1. 进入域名管理 → 回源配置
2. 回源协议：协议跟随
3. 回源Host：`www.equestrian-simulators.com`
4. 开启"Range回源"

#### 第5步：获取CNAME
1. 返回CDN域名列表
2. 复制`cdn-cn.equestrian-simulators.com`的CNAME值
3. 示例：`cdn-cn.equestrian-simulators.com.cdn.dnsv1.com`

---

### ✅ Cloudflare CDN（海外用户）

#### 第1步：添加网站
1. 登录Cloudflare：https://dash.cloudflare.com
2. 点击"添加站点"
3. 输入：`equestrian-simulators.com`
4. 选择计划：Free（免费）

#### 第2步：配置DNS
添加以下DNS记录：

```
类型   名称    内容                      代理状态      TTL
A      @       <your-server-ip>          已代理 🟠    自动
A      www     <your-server-ip>          已代理 🟠    自动
CNAME  cdn-cn  <腾讯云CNAME>             仅DNS  ⚫   自动
```

**重要**：
- `@` 和 `www` 必须开启代理（橙色云图标）
- `cdn-cn` 必须关闭代理（灰色云图标）

#### 第3步：配置缓存规则
进入"规则" → "页面规则"（Page Rules）：

**规则1 - 静态资源**：
```
URL模式：*equestrian-simulators.com/_next/static/*
设置：
  缓存级别 = 缓存所有内容
  边缘缓存TTL = 1个月
  浏览器缓存TTL = 1个月
```

**规则2 - 图片**：
```
URL模式：*equestrian-simulators.com/images/*
设置：
  缓存级别 = 缓存所有内容
  边缘缓存TTL = 7天
  浏览器缓存TTL = 7天
```

**规则3 - HTML**：
```
URL模式：*equestrian-simulators.com/*
设置：
  缓存级别 = 标准
  边缘缓存TTL = 1小时
  浏览器缓存TTL = 1小时
```

#### 第4步：配置速度优化
进入"速度" → "优化"：
- ✅ Auto Minify（HTML + CSS + JavaScript）
- ✅ Brotli
- ✅ 早期提示
- ✅ HTTP/2
- ✅ HTTP/3（QUIC）

#### 第5步：获取Nameservers
1. 在DNS页面底部查看
2. 示例：
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`

---

### ✅ 智能DNS配置（腾讯云DNSPod）

#### 第1步：添加域名
1. 登录DNSPod：https://console.dnspod.cn
2. 添加域名：`equestrian-simulators.com`
3. 升级到专业版（¥300/年，支持分地区解析）

#### 第2步：配置分地区解析

**主域名（@）**：
```
记录类型   主机记录   线路类型   记录值                    TTL
CNAME      @         默认      <Cloudflare代理>          600
CNAME      @         中国      cdn-cn.equestrian...     600
```

**WWW子域名**：
```
记录类型   主机记录   线路类型   记录值                    TTL
CNAME      www       默认      <Cloudflare代理>          600
CNAME      www       中国      cdn-cn.equestrian...     600
```

**CNname记录（腾讯云CDN）**：
```
记录类型   主机记录   线路类型   记录值                    TTL
CNAME      cdn-cn    默认      <腾讯云CNAME>            600
```

#### 第3步：修改域名NS服务器
在域名注册商（如阿里云、腾讯云）修改NS记录：
- `ns1.dnspod.net`
- `ns2.dnspod.net`

---

## 测试验证

### 1. DNS解析测试

**中国IP测试**：
```bash
# 使用中国DNS
nslookup www.equestrian-simulators.com 114.114.114.114

# 应该返回腾讯云CDN的CNAME
```

**海外IP测试**：
```bash
# 使用Google DNS
nslookup www.equestrian-simulators.com 8.8.8.8

# 应该返回Cloudflare的IP
```

### 2. CDN缓存测试

**测试静态资源**：
```bash
curl -I https://www.equestrian-simulators.com/_next/static/xxx

# 查看响应头：
# X-Cache-Status: HIT（缓存命中）
# Age: 3600（缓存时间）
```

**测试HTML**：
```bash
curl -I https://www.equestrian-simulators.com/zh

# 查看响应头：
# Cache-Control: public, max-age=3600
```

### 3. 性能测试

**中国测试**：
- 访问：https://www.17ce.com/
- 输入：`https://www.equestrian-simulators.com`
- 选择：中国各地区节点

**海外测试**：
- 访问：https://www.webpagetest.org/
- 输入：`https://www.equestrian-simulators.com`
- 选择：全球各地区节点

---

## 故障排查

### 问题1：中国用户访问慢
**检查**：
- DNS是否正确解析到腾讯云CDN
- 腾讯云CDN是否配置正确
- 源站是否响应正常

**解决**：
```bash
# 检查DNS解析
dig www.equestrian-simulators.com @114.114.114.114

# 检查CDN缓存
curl -I https://cdn-cn.equestrian-simulators.com/
```

### 问题2：海外用户访问慢
**检查**：
- DNS是否正确解析到Cloudflare
- Cloudflare代理是否开启
- 页面规则是否生效

**解决**：
```bash
# 检查DNS解析
dig www.equestrian-simulators.com @8.8.8.8

# 检查Cloudflare缓存
curl -I https://www.equestrian-simulators.com/ | grep cf-cache-status
```

### 问题3：静态资源404
**检查**：
- Next.js构建是否成功
- assetPrefix配置是否正确
- CDN源站配置是否正确

**解决**：
```bash
# 重新构建
npm run build

# 检查静态文件
ls .next/static/

# 检查Nginx配置
nginx -t
```

---

## 成本优化建议

### 1. 腾讯云CDN
- 购买流量包（100GB/月，¥50，比按量付费便宜50%）
- 开启智能压缩（减少40%流量）
- 配置WebP自动转换（减少60%图片流量）

### 2. Cloudflare
- 使用免费计划（100GB流量/月免费）
- 超过100GB后考虑Pro计划（$20/月，无限流量）

### 3. 服务器
- 使用按量付费带宽（比固定带宽便宜30%）
- 静态资源全部走CDN（减少服务器带宽消耗）

---

**配置文档创建完成！文件位置：D:\equestrian-web\cdn-setup.md**
