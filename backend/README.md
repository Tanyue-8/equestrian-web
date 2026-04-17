# FastAPI Backend

FastAPI中间层，对接Directus后台，为Next.js前端提供API。

## 功能

- 产品数据API（/api/products）
- 多语言支持（7种语言）
- Directus后台对接
- 联系表单处理（待开发）
- 询盘管理（待开发）

## 安装

```bash
# 安装依赖
pip install -r requirements.txt
```

## 配置

编辑 `.env` 文件：

```env
DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=（可选，如果Directus开启了Public访问可以不填）
```

## 启动

### 方式1：使用启动脚本（Windows）
```bash
start.bat
```

### 方式2：直接运行
```bash
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## API文档

启动后访问：
- API文档：http://localhost:8000/docs
- 交互式文档：http://localhost:8000/redoc

## API端点

### GET /api/products
获取所有产品

**参数**：
- `locale`（可选）：语言代码（zh/en/ja/ko/es/de/ar），默认zh

**示例**：
```bash
curl "http://localhost:8000/api/products?locale=zh"
```

### GET /api/products/{slug}
根据slug获取单个产品

**参数**：
- `slug`（必须）：产品slug
- `locale`（可选）：语言代码

**示例**：
```bash
curl "http://localhost:8000/api/products/horse-ms30p?locale=zh"
```

## 开发

启动开发服务器（自动重载）：
```bash
python -m uvicorn main:app --reload
```

## 部署

生产环境启动：
```bash
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

## 技术栈

- FastAPI 0.104+
- Uvicorn（ASGI服务器）
- httpx（HTTP客户端）
- Pydantic（数据验证）
