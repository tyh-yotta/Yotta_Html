$dataPath = Join-Path $PSScriptRoot "..\js\data.js"
$content = Get-Content -Path $dataPath -Raw
Write-Host "--- 開始檢查 Yotta 網站連結 ---" -ForegroundColor Cyan
$matches = [regex]::Matches($content, 'link:\s*"([^"]+)"')
$hasError = $false
foreach ($match in $matches) {
    $link = $match.Groups[1].Value
    if ($link -ne "#" -and $link -ne "") {
        $fullPath = Join-Path $PSScriptRoot "..\..\$link"
        if (-Not (Test-Path $fullPath)) {
            Write-Host "[錯誤] 找不到網頁檔案: $link" -ForegroundColor Red
            $hasError = $true
        } else {
            Write-Host "[正常] $link" -ForegroundColor Green
        }
    }
}
$matchesImg = [regex]::Matches($content, '(image|wiringImage):\s*"([^"]+)"')
foreach ($match in $matchesImg) {
    $link = $match.Groups[2].Value
    $fullPath = Join-Path $PSScriptRoot "..\..\$link"
    if (-Not (Test-Path $fullPath)) {
        Write-Host "[錯誤] 找不到圖片檔案: $link" -ForegroundColor Red
        $hasError = $true
    }
}
if (-Not $hasError) {
    Write-Host "
太棒了！所有網頁與圖片連結皆正常無遺失。" -ForegroundColor Cyan
} else {
    Write-Host "
請檢查上述遺失的檔案是否被誤刪或移動位置。" -ForegroundColor Yellow
}
Pause