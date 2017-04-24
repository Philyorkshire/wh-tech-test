@echo off
@%~d0
@cd /d "%~dp0"

echo Installing packages
call npm install
if %errorLevel% == 0 (
    echo Dependencies installed / upgraded successfully.
) else (
    goto error_npm_install_failed
)

echo Setting Chrome to PATH
for %%p in (chromedriver) do set "progpath=%%~$PATH:p"
if not defined progpath (
   set "PATH=%PATH%;%~dp0\node_modules\chromedriver\lib\chromedriver"
)

if %errorLevel% == 0 (
    echo Chrome successfully set on PATH.
) else (
    goto error_chrome_could_not_be_set
)

echo SUCCESS!
pause
goto very_end

:error_chrome_could_not_be_set
echo ERROR! Failed to set Chrome to your system PATH
pause
goto very_end

:error_npm_install_failed
echo ERROR! Dependencies install failed!
pause
goto very_end

:very_end