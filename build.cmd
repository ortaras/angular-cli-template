@echo off

if not exist build\NUL mkdir build
cd build

echo Deleting build files...
rem do not delete web.config if exists
attrib +r +s web.config
del *.* /S /Q  1>nul
echo Deleted.
attrib -r -s web.config

if not exist web.config copy "..\web.config" "web.config"

REM Deletes ALL subdirectories 
for /f %%F in ('dir /b /a-d ^| findstr /vile ".config"') do del "%%F"
cd ..
call gulp build
pause
