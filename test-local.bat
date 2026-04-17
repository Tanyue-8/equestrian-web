@echo off
echo ==========================================
echo   本地环境测试
echo ==========================================
echo.

echo [1/4] 检查Directus...
curl -s http://localhost:8055/server/ping > nul
if %errorlevel% equ 0 (
    echo [OK] Directus运行正常
) else (
    echo [ERROR] Directus未运行，请启动: docker-compose up
    pause
    exit /b 1
)

echo.
echo [2/4] 检查FastAPI...
curl -s http://localhost:8000/ > nul
if %errorlevel% equ 0 (
    echo [OK] FastAPI运行正常
) else (
    echo [ERROR] FastAPI未运行，请启动: start-fastapi.bat
    pause
    exit /b 1
)

echo.
echo [3/4] 检查Next.js...
curl -s http://localhost:3000/ > nul
if %errorlevel% equ 0 (
    echo [OK] Next.js运行正常
) else (
    echo [ERROR] Next.js未运行，请启动: npm run dev
    pause
    exit /b 1
)

echo.
echo [4/4] 测试产品API...
curl -s "http://localhost:8000/api/products?locale=zh" > test-output.json
if %errorlevel% equ 0 (
    echo [OK] 产品API返回正常
    type test-output.json
    del test-output.json
) else (
    echo [ERROR] 产品API失败
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   所有服务运行正常！
echo ==========================================
echo.
echo 访问地址:
echo   中文: http://localhost:3000/zh
echo   英文: http://localhost:3000/en
echo   API:  http://localhost:8000/docs
echo.
pause
