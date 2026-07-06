$target = Join-Path $PSScriptRoot "..\solutions\shared"
icacls $target /remove:d "Everyone"
Write-Host "成功：已解鎖 shared 資料夾，恢復刪除與編輯權限。" -ForegroundColor Green
Pause