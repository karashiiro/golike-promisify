@echo off
if exist build rmdir lib /s /q
mkdir lib
npx babel golike-promisify.js --out-file lib/golike-promisify.js