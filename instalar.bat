@echo off
title Instalando Modulos

echo / ---------------------------------------------- /
echo         Habblet Client Editado por Skull Rain
echo                 14 / 11 / 2021
echo               All rights reserved.
echo / ---------------------------------------------- /
echo Instalando Modulos requiridos...
echo --------------------------------------
cd %~dp0
cmd /c "npm init -y"
cmd /c "npm i ascii-table"
cmd /c "npm i bytebufferjs"
cmd /c "npm i --save collections"
cmd /c "npm i fs"
cmd /c "npm i terminal-kit"
cmd /c "npm i ws"
echo.
echo Done!
echo Criando ficheiro de inicialização...
echo ------------------------------------
echo @echo off > iniciar.bat
echo :: Editado por Skull Rain (https://github.com/SkullRa1n) [ 14 / 11 / 2021 ] >> iniciar.bat
echo :: -*Leia o readme para saber sobre direitos e permissões!*- >> iniciar.bat
echo title Skull Rain Selfbot >> iniciar.bat
echo :START >> iniciar.bat
echo node skull.js >> iniciar.bat
echo goto START >> iniciar.bat
echo "iniciar.bat" iniciar.bat criado.
echo ------------------------------------