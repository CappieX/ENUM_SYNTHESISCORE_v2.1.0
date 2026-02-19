<#
.SYNOPSIS
    Manages GitHub repository operations
#>

function Test-GitInstalled {
    $gitInstalled = Get-Command git -ErrorAction SilentlyContinue
    if (-not $gitInstalled) {
        Write-Host "❌ Git is not installed or not available in PATH." -ForegroundColor Red
        Write-Host "Download from: https://git-scm.com/downloads" -ForegroundColor Yellow
        return $false
    }
    Write-Host "✅ Git is installed" -ForegroundColor Green
    return $true
}

function Test-GitHubCLIInstalled {
    $ghInstalled = Get-Command gh -ErrorAction SilentlyContinue
    if (-not $ghInstalled) {
        Write-Host "❌ GitHub CLI (gh) is not installed." -ForegroundColor Red
        Write-Host "Please install it from: https://cli.github.com/" -ForegroundColor Yellow
        return $false
    }
    Write-Host "✅ GitHub CLI is installed" -ForegroundColor Green
    return $true
}

function Initialize-GitRepository {
    param([string]$RepoPath)
    
    Push-Location $RepoPath
    
    if (-not (Test-Path ".git")) {
        Write-Host "Initializing Git repository..." -ForegroundColor Yellow
        git init
        git branch -M main
        Write-Host "✅ Git repository initialized" -ForegroundColor Green
    }
    
    # Check if there are any commits yet
    $commitCount = git rev-list --count HEAD 2>$null
    if (-not $commitCount -or $commitCount -eq 0) {
        Write-Host "Creating initial commit..." -ForegroundColor Yellow
        git add .
        git commit -m "Initial commit: $(Split-Path $RepoPath -Leaf) structure"
        Write-Host "✅ Initial commit created" -ForegroundColor Green
    } else {
        Write-Host "Git repository already has commits. Adding any new files..." -ForegroundColor Yellow
        git add .
        $status = git status --porcelain
        if ($status) {
            git commit -m "Update: $(Split-Path $RepoPath -Leaf) structure"
            Write-Host "✅ Changes committed" -ForegroundColor Green
        } else {
            Write-Host "No changes to commit" -ForegroundColor Yellow
        }
    }
    
    Pop-Location
}

function Ensure-GitHubAuth {
    $authStatus = gh auth status 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "🔐 Please login to GitHub first..." -ForegroundColor Yellow
        gh auth login
    } else {
        Write-Host "✅ GitHub authentication verified" -ForegroundColor Green
    }
}

function Remove-GitRemote {
    param([string]$RepoPath)
    
    Push-Location $RepoPath
    
    $remoteExists = git remote get-url origin 2>$null
    if ($remoteExists) {
        Write-Host "⚠ Remote 'origin' already exists: $remoteExists" -ForegroundColor Yellow
        $response = Read-Host "Do you want to update it? [Y/N]"
        if ($response -match "^[Yy]$") {
            git remote remove origin
            Write-Host "✅ Remote removed" -ForegroundColor Green
            Pop-Location
            return $true
        } else {
            Write-Host "Skipping repository creation." -ForegroundColor Yellow
            Pop-Location
            return $false
        }
    }
    
    Pop-Location
    return $true
}

function New-GitHubRepo {
    param(
        [string]$RepoPath,
        [string]$Name,
        [string]$Description = "Project Generator Tool",
        [switch]$Private
    )
    
    Write-Host "`n📦 Setting up GitHub repository: $Name..." -ForegroundColor Cyan
    
    # Prerequisite checks
    if (-not (Test-GitInstalled)) { return $false }
    if (-not (Test-GitHubCLIInstalled)) { return $false }
    
    Push-Location $RepoPath
    
    # Initialize git if needed
    Initialize-GitRepository -RepoPath $RepoPath
    
    # Check authentication
    Ensure-GitHubAuth
    
    # Handle existing remote
    $canContinue = Remove-GitRemote -RepoPath $RepoPath
    if (-not $canContinue) {
        Pop-Location
        return $false
    }
    
    # Create repository on GitHub
    Write-Host "Creating repository: $Name on GitHub..." -ForegroundColor Cyan
    $privacyFlag = if ($Private) { "--private" } else { "--public" }
    
    Write-Host "Running: gh repo create $Name $privacyFlag --description \"$Description\" --source=. --remote=origin --push" -ForegroundColor Gray
    $result = gh repo create $Name $privacyFlag --description "$Description" --source=. --remote=origin --push 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Repository created and code pushed successfully!" -ForegroundColor Green
        
        $username = gh api user --jq .login 2>$null
        if ($username) {
            Write-Host "🔗 Repository URL: https://github.com/$username/$Name" -ForegroundColor Cyan
        }
        
        Pop-Location
        return $true
    } else {
        Write-Host "❌ Failed to create repository: $result" -ForegroundColor Red
        Pop-Location
        return $false
    }
}

function Show-GitHubConfirmationPrompt {
    param(
        [string]$RepoName,
        [string]$RepoPath,
        [bool]$PrivateRepo
    )
    
    $privacyText = if ($PrivateRepo) { "PRIVATE" } else { "PUBLIC" }
    
    Write-Host "`n" + ("=" * 60) -ForegroundColor Cyan
    Write-Host "🔍 GITHUB REPOSITORY CONFIRMATION" -ForegroundColor Yellow
    Write-Host "=" * 60 -ForegroundColor Cyan
    Write-Host "Repository Name: $RepoName" -ForegroundColor White
    Write-Host "Privacy: $privacyText" -ForegroundColor White
    Write-Host "Local Path: $RepoPath" -ForegroundColor White
    Write-Host "=" * 60 -ForegroundColor Cyan
    
    $confirm = Read-Host "`n⚠ Create $privacyText GitHub repository '$RepoName' and push to GitHub? [Y/N]"
    return ($confirm -match "^[Yy]$")
}

function Show-GitHubCreationBanner {
    param(
        [string]$RepoName,
        [bool]$PrivateRepo
    )
    
    Write-Host "`n" + ("=" * 60) -ForegroundColor Cyan
    Write-Host "🚀 AUTOMATIC GITHUB REPOSITORY CREATION" -ForegroundColor Green
    Write-Host "=" * 60 -ForegroundColor Cyan
    Write-Host "Creating repository: $RepoName" -ForegroundColor White
    Write-Host "Privacy: $(if($PrivateRepo){'PRIVATE'}else{'PUBLIC'})" -ForegroundColor White
    Write-Host "=" * 60 -ForegroundColor Cyan
}