# 🚀 Project Generator Tool

A powerful, modular PowerShell script that creates a complete project structure for a project generator tool and optionally sets up a GitHub repository automatically.

## ✨ Features

- 📁 **Automated Structure Creation** - Creates 11 directories and 19 files with proper content
- 🎨 **Modular Architecture** - Clean separation of concerns with 5 specialized modules
- 🔧 **Customizable** - Change project name, destination, and settings
- 🌐 **GitHub Integration** - Create public or private repositories automatically
- 💾 **Path Memory** - Remembers your last used folder
- 🖥️ **Interactive Menu** - User-friendly console interface
- 🔄 **Backup Protection** - Automatically backs up existing folders
- 📝 **Smart File Generation** - Creates package.json, README, .gitignore, LICENSE and more

## 📋 Prerequisites

- **PowerShell 5.1+** (Windows) or PowerShell 7+ (Cross-platform)
- **Git** (for GitHub integration)
- **GitHub CLI** (gh) - [Download here](https://cli.github.com/)

## 🚀 Quick Start

1. **Clone or download this repository**
2. **Open PowerShell** in the project folder
3. **Run the script:**
   ```powershell
   .\Create-ProjectGenerator.ps1