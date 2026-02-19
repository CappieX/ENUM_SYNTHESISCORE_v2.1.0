<#
.SYNOPSIS
    Manages project configuration
#>

function Initialize-ProjectConfig {
    param(
        [string]$RepoName,
        [string]$Destination = $null,
        [switch]$Force
    )
    
    $scriptDir = $PSScriptRoot
    if ([string]::IsNullOrEmpty($scriptDir)) {
        $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
    }
    if ([string]::IsNullOrEmpty($scriptDir)) {
        $scriptDir = (Get-Location).Path
    }
    
    $config = [PSObject]@{
        RepoName = $RepoName
        Destination = $Destination
        RootPath = $null
        CreateRepo = $false
        PrivateRepo = $false
        CurrentChoice = $null
        ScriptDir = $scriptDir
        Force = $Force.IsPresent
    }
    
    return $config
}

function Update-ProjectConfig {
    param(
        [PSObject]$Config,
        [switch]$AskForName,
        [switch]$ForceNamePrompt
    )
    
    if ($ForceNamePrompt -or ($AskForName -and $Config.RepoName -eq "project-generator")) {
        Write-Host "`n📝 Current name: $($Config.RepoName)" -ForegroundColor Cyan
        $newName = Read-Host "Enter new name (Enter to keep)"
        if ($newName) {
            $Config.RepoName = $newName
            Write-Host "✅ Name changed" -ForegroundColor Green
        }
    }
    
    return $Config
}

function Initialize-ProjectCreation {
    param(
        [PSObject]$Config,
        [bool]$CreateRepo,
        [bool]$PrivateRepo = $false
    )
    
    $Config.CreateRepo = $CreateRepo
    $Config.PrivateRepo = $PrivateRepo
    
    # Show template selection first
    $selectedTemplate = Show-TemplateMenu
    if (-not $selectedTemplate) {
        Write-Host "`n⚠ Template selection cancelled." -ForegroundColor Yellow
        Pause-Menu
        return $Config
    }
    
    Show-ProjectCreationBanner -ProjectName $Config.RepoName -CreateRepo $CreateRepo -PrivateRepo $PrivateRepo
    
    $Config.Destination = Resolve-DestinationPath `
        -Destination $Config.Destination `
        -ScriptDir $Config.ScriptDir `
        -ResetPath:$false `
        -ProjectName $Config.RepoName
    
    $Config.RootPath = Get-ProjectRootPath -Destination $Config.Destination -ProjectName $Config.RepoName
    
    if (Test-Path $Config.RootPath) {
        $continue = Backup-ExistingFolder -FolderPath $Config.RootPath
        if (-not $continue) {
            Pause-Menu
            return $Config
        }
    }
    
    # Create root folder
    New-Item -ItemType Directory -Path $Config.RootPath -Force | Out-Null
    
    # Apply the selected template using the TemplateManager function
    Write-Host "`n📋 Applying template: $($selectedTemplate.Name)..." -ForegroundColor Cyan
    
    # Use the Apply-Template function from TemplateManager which handles both built-in and custom
    $result = Apply-Template -Template $selectedTemplate -DestinationPath $Config.RootPath -ProjectName $Config.RepoName
    
    if (-not $result) {
        Write-Host "❌ Failed to apply template" -ForegroundColor Red
    }
    
    Show-InitialSuccessMessage -RootPath $Config.RootPath
    
    if ($CreateRepo) {
        if ($Config.Force -or (Show-GitHubConfirmationPrompt -RepoName $Config.RepoName -RepoPath $Config.RootPath -PrivateRepo $PrivateRepo)) {
            Show-GitHubCreationBanner -RepoName $Config.RepoName -PrivateRepo $PrivateRepo
            $repoCreated = New-GitHubRepo -RepoPath $Config.RootPath -Name $Config.RepoName -Private:$PrivateRepo
            Show-CreationResult -Config $Config -RepoCreated $repoCreated
        } else {
            Show-CreationResult -Config $Config -RepoCreated $false
        }
    } else {
        Show-CreationResult -Config $Config -RepoCreated $false
    }
    
    return $Config
}

function Initialize-TemplateBasedCreation {
    param(
        [PSObject]$Config,
        [bool]$CreateRepo,
        [bool]$PrivateRepo = $false
    )
    
    # Show template selection first
    $selectedTemplate = Show-TemplateMenu
    if (-not $selectedTemplate) {
        return $Config
    }
    
    $Config.CreateRepo = $CreateRepo
    $Config.PrivateRepo = $PrivateRepo
    
    Show-ProjectCreationBanner -ProjectName $Config.RepoName -CreateRepo $CreateRepo -PrivateRepo $PrivateRepo
    
    $Config.Destination = Resolve-DestinationPath `
        -Destination $Config.Destination `
        -ScriptDir $Config.ScriptDir `
        -ResetPath:$false `
        -ProjectName $Config.RepoName
    
    $Config.RootPath = Get-ProjectRootPath -Destination $Config.Destination -ProjectName $Config.RepoName
    
    if (Test-Path $Config.RootPath) {
        $continue = Backup-ExistingFolder -FolderPath $Config.RootPath
        if (-not $continue) {
            Pause-Menu
            return $Config
        }
    }
    
    # Create root folder
    New-Item -ItemType Directory -Path $Config.RootPath -Force | Out-Null
    
    # Apply template using the wrapper function
    Apply-Template -Template $selectedTemplate -DestinationPath $Config.RootPath -ProjectName $Config.RepoName
    
    Show-InitialSuccessMessage -RootPath $Config.RootPath
    
    if ($CreateRepo) {
        if ($Config.Force -or (Show-GitHubConfirmationPrompt -RepoName $Config.RepoName -RepoPath $Config.RootPath -PrivateRepo $PrivateRepo)) {
            Show-GitHubCreationBanner -RepoName $Config.RepoName -PrivateRepo $PrivateRepo
            $repoCreated = New-GitHubRepo -RepoPath $Config.RootPath -Name $Config.RepoName -Private:$PrivateRepo
            Show-CreationResult -Config $Config -RepoCreated $repoCreated
        } else {
            Show-CreationResult -Config $Config -RepoCreated $false
        }
    } else {
        Show-CreationResult -Config $Config -RepoCreated $false
    }
    
    return $Config
}