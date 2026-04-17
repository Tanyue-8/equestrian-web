@echo off
echo Starting FastAPI server...
echo.
echo Directus URL: http://localhost:8055
echo FastAPI URL: http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo.

REM 激活虚拟环境并启动FastAPI
call .venv\Scripts\activate.bat
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
