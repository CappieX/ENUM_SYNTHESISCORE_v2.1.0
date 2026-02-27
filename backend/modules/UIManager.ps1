<#
.SYNOPSIS
    Manages user interface and menu operations
#>

function Show-MainMenu {
    param([PSObject]$Config)
    
    Clear-Host
    Write-Host ("=" * 60) -ForegroundColor Cyan
    Write-Host "PROJECT GENERATOR TOOL v1.2.0" -ForegroundColor White -BackgroundColor Blue
    Write-Host ("=" * 60) -ForegroundColor Cyan
    Write-Host "Project Name: $($Config.RepoName)" -ForegroundColor Green
    if ($Config.RootPath -and (Test-Path $Config.RootPath)) {
        Write-Host "Current Project: $($Config.RootPath)" -ForegroundColor Cyan
    } else {
        Write-Host "Current Project: (none selected)" -ForegroundColor Gray
    }
    Write-Host ("=" * 60) -ForegroundColor Cyan
    Write-Host "1. Create structure only" -ForegroundColor Yellow
    Write-Host "2. Create with PUBLIC GitHub repo" -ForegroundColor Yellow
    Write-Host "3. Create with PRIVATE GitHub repo" -ForegroundColor Yellow
    Write-Host "4. Change project name" -ForegroundColor Yellow
    Write-Host "5. Select existing project" -ForegroundColor Cyan
    Write-Host "6. 📊 Project Dashboard" -ForegroundColor Magenta
    Write-Host "7. 🚀 Tool Dashboard" -ForegroundColor Green
    Write-Host "8. Install dependencies" -ForegroundColor Green
    Write-Host "9. Template Management" -ForegroundColor Magenta
    Write-Host "0. Exit" -ForegroundColor Red
    Write-Host ("=" * 60) -ForegroundColor Cyan
    
    $choice = Read-Host "Select option"
    
    $updatedConfig = [PSObject]@{
        RepoName = $Config.RepoName
        Destination = $Config.Destination
        RootPath = $Config.RootPath
        CreateRepo = $Config.CreateRepo
        PrivateRepo = $Config.PrivateRepo
        CurrentChoice = $choice
        ScriptDir = $Config.ScriptDir
        Force = $Config.Force
    }
    
    return $updatedConfig
}

function Show-FeatureComingSoon {
    param([string]$Feature)
    
    Write-Host "`n📦 $Feature - Coming Soon!" -ForegroundColor Yellow
    Write-Host "This feature will be available in the next update." -ForegroundColor Yellow
    Pause-Menu
}

function Pause-Menu {
    Write-Host "`nPress any key to return to menu..." -ForegroundColor Magenta
    $null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}

function Show-ProjectCreationBanner {
    param(
        [string]$ProjectName,
        [bool]$CreateRepo,
        [bool]$PrivateRepo
    )
    
    if ($CreateRepo) {
        $privacyText = if ($PrivateRepo) { "PRIVATE" } else { "PUBLIC" }
        Write-Host "`n🌐 Creating project '$ProjectName' with $privacyText GitHub repository..." -ForegroundColor Cyan
    } else {
        Write-Host "`n📁 Creating project '$ProjectName' structure only..." -ForegroundColor Cyan
    }
}

function Show-InitialSuccessMessage {
    param([string]$RootPath)
    
    Write-Host "`n✅ Project structure created successfully!" -ForegroundColor Green
    Write-Host "📁 Location: $RootPath" -ForegroundColor Cyan
}

function Show-CreationResult {
    param(
        [PSObject]$Config,
        [bool]$RepoCreated
    )
    
    Write-Host "`n" + ("=" * 60) -ForegroundColor Cyan
    
    if ($Config.CreateRepo) {
        if ($RepoCreated) {
            Write-Host "🎉 SUCCESS! Project structure and GitHub repository setup complete!" -ForegroundColor Green
            Write-Host "📁 Local path: $($Config.RootPath)" -ForegroundColor Cyan
            Write-Host "🌐 GitHub: Repository '$($Config.RepoName)' created and code pushed automatically" -ForegroundColor Cyan
        } else {
            Write-Host "⚠ Project structure created but GitHub repository setup had issues." -ForegroundColor Yellow
            Write-Host "📁 Local path: $($Config.RootPath)" -ForegroundColor Cyan
            Write-Host "You can try manually with:" -ForegroundColor Yellow
            $privacyFlag = if ($Config.PrivateRepo) { "--private" } else { "--public" }
            Write-Host "  cd `"$($Config.RootPath)`"" -ForegroundColor White
            Write-Host "  gh repo create $($Config.RepoName) $privacyFlag --source=. --remote=origin --push" -ForegroundColor White
        }
    } else {
        Write-Host "📁 Local folder created at: $($Config.RootPath)" -ForegroundColor Cyan
    }
    
    Pause-Menu
}

function Show-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

function Show-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

function Show-Warning {
    param([string]$Message)
    Write-Host "⚠ $Message" -ForegroundColor Yellow
}

function Show-Info {
    param([string]$Message)
    Write-Host "ℹ $Message" -ForegroundColor Cyan
}