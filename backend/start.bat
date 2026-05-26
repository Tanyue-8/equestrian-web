@echo off
echo Starting FastAPI server...
echo.
echo Directus URL: http://localhost:8055
echo FastAPI URL: http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo Health Check: http://localhost:8000/health
echo.

REM 直接启动FastAPI（不使用虚拟环境）
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
