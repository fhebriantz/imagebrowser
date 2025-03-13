@echo off
cd /d "%~dp0"
echo Menjalankan server...
start "" /b node server.js
timeout /t 2 >nul
start http://localhost:3000
exit
