# Test script for dependency manager
param(
    [string]$ProjectPath = "C:\Users\bemnet\Downloads\templet\test-deps"
)

Write-Host "Testing Dependency Manager" -ForegroundColor Cyan
Write-Host ("=" * 50) -ForegroundColor Cyan

# Load the module
. .\Modules\DependencyManager.ps1

# Test initialization
Write-Host "`n1. Testing Initialization:" -ForegroundColor Yellow
$available = Initialize-DependencyManager
Write-Host "Available package managers: $($available.Count)" -ForegroundColor Green

# Test detection in current folder
Write-Host "`n2. Testing Detection in current folder:" -ForegroundColor Yellow
$detected = Detect-PackageManagers -ProjectPath (Get-Location).Path
Write-Host "Detected: $($detected.Count)" -ForegroundColor Green

# Test in specified project
Write-Host "`n3. Testing installation in test project:" -ForegroundColor Yellow
Write-Host "Project path: $ProjectPath" -ForegroundColor Cyan

if (Test-Path $ProjectPath) {
    $info = Get-DependencyInfo -ProjectPath $ProjectPath
    Write-Host "Package managers: $($info.PackageManagers.Keys -join ', ')" -ForegroundColor Cyan
    Write-Host "Total dependencies: $($info.TotalCount)" -ForegroundColor White
    
    # Show what was found
    if ($info.PackageManagers.Count -gt 0) {
        Write-Host "`nFound package.json files:" -ForegroundColor Green
        Get-ChildItem -Path $ProjectPath -Recurse -Filter "package.json" | ForEach-Object {
            Write-Host "  - $($_.FullName)" -ForegroundColor Gray
        }
    }
    
    $install = Read-Host "`nInstall dependencies in test project? [Y/N]"
    if ($install -match "^[Yy]$") {
        Install-Dependencies -ProjectPath $ProjectPath
    }
} else {
    Write-Host "❌ Project path not found: $ProjectPath" -ForegroundColor Red
    Write-Host "Available projects in Downloads\templet:" -ForegroundColor Yellow
    Get-ChildItem "C:\Users\bemnet\Downloads\templet" -Directory | ForEach-Object {
        Write-Host "  - $($_.Name)" -ForegroundColor Gray
    }
}

Write-Host ("=" * 50) -ForegroundColor Cyan