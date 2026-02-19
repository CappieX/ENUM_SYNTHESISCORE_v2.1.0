# Debug script to test path issues
Write-Host "Path Debugging Script" -ForegroundColor Cyan
Write-Host ("=" * 50) -ForegroundColor Cyan

# Test different ways to get script directory
Write-Host "`nTesting script directory detection:" -ForegroundColor Yellow

$method1 = $PSScriptRoot
Write-Host "Method 1 - `$PSScriptRoot: '$method1'" -ForegroundColor White

$method2 = Split-Path -Parent $MyInvocation.MyCommand.Path
Write-Host "Method 2 - Split-Path: '$method2'" -ForegroundColor White

$method3 = (Get-Location).Path
Write-Host "Method 3 - Get-Location: '$method3'" -ForegroundColor White

# Determine the best method
$scriptDir = if ($PSScriptRoot) { 
    $PSScriptRoot 
} elseif ($method2) { 
    $method2 
} else { 
    $method3 
}

Write-Host "`n✅ Best script directory: '$scriptDir'" -ForegroundColor Green

# Test creating the lastpath file
$lastPathFile = Join-Path $scriptDir ".lastpath.txt"
Write-Host "`nLast path file would be: $lastPathFile" -ForegroundColor Cyan

# Test if we can write to this location
try {
    "test" | Out-File -FilePath $lastPathFile -Encoding UTF8 -Force
    Write-Host "✅ Can write to location" -ForegroundColor Green
    Remove-Item $lastPathFile -Force
} catch {
    Write-Host "❌ Cannot write to location: $_" -ForegroundColor Red
}

Write-Host "`n" + ("=" * 50) -ForegroundColor Cyan
Write-Host "Debug complete" -ForegroundColor Cyan

# Also test running the main script's path detection
Write-Host "`nTesting main script path detection:" -ForegroundColor Yellow
& {
    $scriptDir = $PSScriptRoot
    if ([string]::IsNullOrEmpty($scriptDir)) {
        $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
    }
    if ([string]::IsNullOrEmpty($scriptDir)) {
        $scriptDir = (Get-Location).Path
    }
    Write-Host "Main script would use: '$scriptDir'" -ForegroundColor Green
}