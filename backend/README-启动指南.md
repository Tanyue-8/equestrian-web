# FastAPI 启动指南

## 🚀 标准启动流程

### 1. 打开PowerShell
- 按 `Win + X`，选择"Windows PowerShell"

### 2. 切换到backend目录
```powershell
cd D:\equestrian-web\backend
```

### 3. 启动FastAPI
```powershell
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 4. 确认启动成功
看到以下输出说明成功：
```
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started server process [xxxxx]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

---

## ⚠️ 常见问题

### 问题1：`ModuleNotFoundError: No module named 'aiosmtplib'`

**解决方案：**
```powershell
python -m pip install aiosmtplib
```

### 问题2：`.\start.bat` 报错

**原因：** PowerShell不能直接运行.bat文件

**解决方案：**
```powershell
cmd /c start.bat
```

或者直接用python命令（推荐）

### 问题3：端口8000被占用

**解决方案：**
```powershell
# 查找占用进程
netstat -ano | findstr :8000

# 结束进程（替换xxxxx为进程ID）
taskkill /F /PID xxxxx
```

---

## 📧 邮件配置

- **SMTP服务器：** smtp.gmail.com:587
- **邮箱：** info@equestrian-simulators.com
- **应用密码：** xxce rbdf gksz kacg（已配置）

---

## ✅ 测试邮件功能

1. 启动FastAPI（按上述步骤）
2. 打开浏览器：http://localhost:3000/zh/contact
3. 填写表单提交
4. 查看PowerShell窗口，应该显示请求日志
5. 检查邮箱 info@equestrian-simulators.com

---

## 📝 注意事项

- **不需要虚拟环境**：`.venv`文件夹不存在，直接用全局Python
- **保持PowerShell窗口打开**：关闭窗口FastAPI会停止
- **热重载已启用**：修改代码后自动重启

---

最后更新：2026-04-17
