$target = Join-Path $PSScriptRoot "..\solutions\shared"
icacls $target /deny "Everyone:(DE,DC)"
Write-Host "成功：已鎖定 shared 資料夾，防止檔案被意外刪除。" -ForegroundColor Green
Pause