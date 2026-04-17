@echo off
echo ========================================
echo   FastAPI Server Startup
echo ========================================
echo.
echo Directus URL: http://localhost:8055
echo FastAPI URL:  http://localhost:8000
echo API Docs:     http://localhost:8000/docs
echo.
echo Starting server...
echo.

C:\Users\18922\AppData\Local\easyclaw\ai\tool_cache\resources\tools\win\python-3.11.9\python.exe -m uvicorn main:app --reload --host 0.0.0.0 --port 8000

pause
