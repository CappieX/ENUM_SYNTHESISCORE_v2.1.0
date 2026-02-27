# Debug script for your specific project
$projectPath = "C:\Users\bemnet\Downloads\templet\test-deps"

Write-Host "🔍 Debugging Dependency Detection for: $projectPath" -ForegroundColor Cyan
Write-Host ("=" * 60) -ForegroundColor Cyan

# Load module
. .\Modules\DependencyManager.ps1

# Check if path exists
if (-not (Test-Path $projectPath)) {
    Write-Host "❌ Project path does not exist!" -ForegroundColor Red
    exit
}

# List all package.json files
Write-Host "`n📄 Package.json files found:" -ForegroundColor Yellow
$pkgFiles = Get-ChildItem -Path $projectPath -Recurse -Filter "package.json"
$pkgFiles | ForEach-Object {
    Write-Host "  ✅ $($_.FullName)" -ForegroundColor Green
    
    # Show content preview
    $content = Get-Content $_.FullName -Raw
    Write-Host "     Content: $($content -replace "`n", " ")" -ForegroundColor Gray
}

# Manually test detection
Write-Host "`n🔎 Running detection algorithm..." -ForegroundColor Yellow

# Method 1: Direct detection
$detected1 = @{}
foreach ($pm in $script:packageManagers.Keys) {
    $pmConfig = $script:packageManagers[$pm]
    foreach ($file in $pmConfig.DetectionFiles) {
        $found = Get-ChildItem -Path $projectPath -Recurse -Filter $file -ErrorAction SilentlyContinue
        if ($found) {
            $detected1[$pm] = $found.Count
            Write-Host "  ✅ Found $pm : $($found.Count) $file files" -ForegroundColor Green
            break
        }
    }
}

# Method 2: Using Detect-PackageManagers function
Write-Host "`n🔄 Using Detect-PackageManagers function:" -ForegroundColor Yellow
$detected2 = Detect-PackageManagers -ProjectPath $projectPath

if ($detected2.Count -gt 0) {
    Write-Host "  ✅ Detected: $($detected2.Keys -join ', ')" -ForegroundColor Green
} else {
    Write-Host "  ❌ No package managers detected!" -ForegroundColor Red
    
    # Check if the function is looking in the right place
    Write-Host "`n📁 Files in project root:" -ForegroundColor Yellow
    Get-ChildItem -Path $projectPath | ForEach-Object {
        Write-Host "  - $($_.Name)" -ForegroundColor Gray
    }
}

Write-Host ("=" * 60) -ForegroundColor Cyan