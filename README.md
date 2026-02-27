# 🚀 Enum PROJECT SYNTHESIS ENGINE

A powerful, high-fidelity project generation platform that synthesizes complete project structures and automates cloud/repository orchestration.

## 📂 Project Structure

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

## ✨ Key Features

- **Automated Synthesis** - Creates complex project structures from blueprints.
- **Modular Core** - Clean separation of concerns with specialized backend modules.
- **Synthesis UI** - Modern glass-morphism interface with 3D visualization.
- **GitHub Integration** - Automated repository and CI/CD orchestration.
- **Dry Run Mode** - Preview structural changes before execution.

## 🖥️ Synthesis UI

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

## 📋 Prerequisites

- **PowerShell 7+** (Recommended) or 5.1+
- **Node.js 20+** (For UI development)
- **Git & GitHub CLI** (For cloud automation)

## 🚀 Quick Start

1. **Clone the engine**
2. **Open PowerShell** in the root folder.
3. **Execute synthesis:**
   ```powershell
   .\backend\scripts\Create-ProjectGenerator.ps1
   ```

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
