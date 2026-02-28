#  Enum PROJECT SYNTHESIS ENGINE

A powerful, high-fidelity project generation platform that synthesizes complete project structures and automates cloud/repository orchestration.

## Project Structure

The project is organized into modular directories to separate concerns and enable scalability:

```text
enum-project-synthesis-engine/
├── frontend/               # React + Vite Synthesis UI
├── backend/                # PowerShell Synthesis Core
│   ├── modules/            # Reusable PS modules
│   ├── scripts/            # Entry point scripts
│   ├── Templates/          # Project blueprint JSONs
│   ├── tests/              # Pester unit tests
│   └── logs/               # Operational telemetry
├── deployment/             # Infrastructure & CI/CD
│   ├── docker/             # Containerization
│   ├── nginx/              # Web server config
│   └── scripts/            # Deploy/Verify automation
├── docs/                   # Centralized documentation
├── future-modules/         # Roadmap placeholders
└── archive/                # Legacy/Backup artifacts
```

## Key Features


Automated Structure Synthesis - Creates complex project structures with proper content
Modular Architecture - Clean separation of concerns with specialized modules
Advanced Customization - Full control over project parameters and settings
GitHub Integration - Create public or private repositories automatically
Path Memory - Remembers your last used synthesis matrix
Synthesis UI - A revolutionary, modern web-based interface with glass-morphism and 3D visualization
Backup Protection - Automatically backs up existing folders with timestamps
Smart File Generation - Creates package.json, README, .gitignore, LICENSE and more
Dry Run Mode - Preview changes before they are applied with the -DryRun switch
Detailed Logging - All operations are logged to generator.log for troubleshooting
External Templates - Easily add new templates by dropping JSON files into the Templates/ folder
Unit Testing - Robust testing framework using Pester


- **Automated Synthesis** - Creates complex project structures from blueprints.
- **Modular Core** - Clean separation of concerns with specialized backend modules.
- **Synthesis UI** - Modern glass-morphism interface with 3D visualization.
- **GitHub Integration** - Automated repository and CI/CD orchestration.
- **Dry Run Mode** - Preview structural changes before execution.

## Synthesis UI

The UI transforms project configuration into a creative experience.

### Run the UI:
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install & Start:
   ```bash
   npm install && npm run dev
   ```

## Prerequisites

- **PowerShell 7+** (Recommended) or 5.1+
- **Node.js 20+** (For UI development)
- **Git & GitHub CLI** (For cloud automation)

## Quick Start

1. **Clone the engine**
2. **Open PowerShell** in the root folder.
3. **Execute synthesis:**
   ```powershell
   .\backend\scripts\Create-ProjectGenerator.ps1
   ```

##  License

MIT License - see [LICENSE](LICENSE) for details.
