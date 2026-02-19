<#
.SYNOPSIS
    Creates the folder structure for a project generator tool and automatically creates a GitHub repository.
.DESCRIPTION
    This script generates the directory tree and automatically creates a new GitHub repository.
.EXAMPLE
    .\Create-ProjectGenerator.ps1
#>

param(
    [string]$Destination,
    [string]$RepoName = "project-generator",
    [switch]$ResetPath,
    [switch]$PrivateRepo,
    [switch]$Force
)

# Get script directory
$scriptDir = $PSScriptRoot
if ([string]::IsNullOrEmpty($scriptDir)) {
    $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
}
if ([string]::IsNullOrEmpty($scriptDir)) {
    $scriptDir = (Get-Location).Path
}

Write-Host "📂 Script Directory: $scriptDir" -ForegroundColor Cyan
Write-Host "Loading modules..." -ForegroundColor Cyan

# Import modules
$modules = @(
    "PathManager.ps1",
    "FileSystem.ps1",
    "GitHubManager.ps1",
    "UIManager.ps1",
    "ProjectConfig.ps1",
    "TemplateManager.ps1"
)

foreach ($module in $modules) {
    $modulePath = Join-Path $scriptDir "Modules" $module
    if (Test-Path $modulePath) {
        . $modulePath
        Write-Host "  ✅ Loaded: $module" -ForegroundColor Green
    } else {
        Write-Host "  ⚠ Not found: $module" -ForegroundColor Yellow
    }
}

Write-Host ""

# Initialize configuration
$config = Initialize-ProjectConfig -RepoName $RepoName -Destination $Destination -Force:$Force

# Main menu loop
do {
    $config = Show-MainMenu -Config $config
    
    switch ($config.CurrentChoice) {
        "1" { 
            $config = Update-ProjectConfig $config -AskForName
            $config = Initialize-ProjectCreation -Config $config -CreateRepo $false
        }
        
        "2" { 
            $config = Update-ProjectConfig $config -AskForName
            $config = Initialize-ProjectCreation -Config $config -CreateRepo $true -PrivateRepo $false
        }
        
        "3" { 
            $config = Update-ProjectConfig $config -AskForName
            $config = Initialize-ProjectCreation -Config $config -CreateRepo $true -PrivateRepo $true
        }
        
        "4" { 
            $config = Update-ProjectConfig $config -ForceNamePrompt
            Pause-Menu
        }
        
        "5" { 
            Show-FeatureComingSoon -Feature "Install Dependencies"
        }
        
        "6" { 
            Show-FeatureComingSoon -Feature "Configure Settings"
        }
        
        "7" { 
            # Template Management
            Show-TemplateManagementMenu
        }
        
        "8" { 
            Write-Host "`n👋 Goodbye!" -ForegroundColor Cyan
            exit
        }
        
        default {
            Write-Host "`n❌ Invalid option. Please select 1-8." -ForegroundColor Red
            Pause-Menu
        }
    }
} while ($config.CurrentChoice -ne "8")