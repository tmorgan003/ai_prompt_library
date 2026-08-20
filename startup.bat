@echo off
setlocal

cd /d "%~dp0"

set CONTAINER_NAME=ai-prompt-library-db

docker inspect %CONTAINER_NAME% >nul 2>&1
if errorlevel 1 (
    echo Creating Postgres container %CONTAINER_NAME%...
    docker run -d --name %CONTAINER_NAME% -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=ai_prompt_library -p 5432:5432 postgres:16-alpine
) else (
    echo Starting Postgres container %CONTAINER_NAME%...
    docker start %CONTAINER_NAME% >nul
)

echo Starting dev server...
npm run dev

endlocal
