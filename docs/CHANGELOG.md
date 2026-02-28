# Changelog

All notable changes to this project will be documented in this file.

## [2.2.0] - 2026-02-27

### Added
- **Firebase Integration**: Established high-fidelity authentication backend using Firebase Auth and Firestore.
- **Role-Based Access Control (RBAC)**: Implemented three distinct user tiers: `free`, `paid`, and `admin` with protected routes and dynamic UI filtering.
- **Enhanced Marketing Presence**: Refined the landing page with scrollable sections, features grid, synthesis matrix gallery, and operational workflow visualization.
- **Identity Portals**: Created dedicated `SignIn` and `SignUp` portals with real-time validation and bespoke teal/ocean styling.
- **Subscription Engine**: Integrated a mock "Upgrade Protocol" with a Stripe-style secure checkout interface for Pro tier synthesis.
- **Initialization Protocol**: Added a global synchronization layer to handle auth state persistence and role fetching on system load.

### Improved
- **Code Sanitization**: Resolved all TypeScript diagnostic warnings and unified duplicate Firebase configurations.
- **Global Navigation**: Enhanced the sidebar to dynamically filter accessible nodes based on user permissions.
- **Landing Page Performance**: Optimized asset delivery and motion choreography for the marketing site.

## [2.1.0] - 2026-02-25

### Rebranding
- **Official Identity**: Rebranded the project from "Project Generator" to **Enum PROJECT SYNTHESIS ENGINE**.
- **Global Synthesis UI**: Updated all UI components, metadata, and documentation to reflect the new synthesis engine identity.
- **New Logo Integration**: Integrated the new Enum Technology logo with existing high-fidelity animations and glow effects.

## [2.0.0-Forge] - 2026-02-24

### Revolutionary UI Redesign (Forge UI)
- **Modern Architecture**: Shifted from a pure PowerShell CLI to a modern React + Vite + Tailwind + Three.js application.
- **Glass-morphism Design**: Implemented a stunning, three-panel glass-morphism interface inspired by spatial computing.
- **3D Visualization**: Added a "Forge Crystal" 3D core using React Three Fiber, representing the generator's heart.
- **Interactive Structure**: Live node graph visualization of the project structure as it's configured.
- **Action Hub**: A centralized command center with pulsing "Generate" energy, cosmic switches for dry runs, and a holographic log viewer.
- **Custom Iconography**: Designed a cohesive, generator-themed icon set using Lucide and custom SVG styling.
- **Telemetry System**: Real-time display of system status and generation progress.

## [1.2.0] - 2026-02-24

### Added
- **Logger Module**: A new module `Logger.ps1` for standardized logging to both the console and `generator.log`.
- **Dry Run Mode**: Added a `-DryRun` switch to the main script. Users can now preview all directory creations, file writes, and GitHub actions before they are executed.
- **Externalized Templates**: Moved hardcoded templates from `TemplateManager.ps1` into the `Templates/` directory as JSON files. This makes it easier to add and manage project templates.
- **Unit Testing Framework**: Set up a `Tests/` directory with a basic Pester unit test for the Logger module.
- **Cross-Platform Compatibility**: Enhanced `Show-FolderBrowser` in `PathManager.ps1` to support macOS and Linux via a manual input fallback when Windows GUI components are unavailable.

### Improved
- **Modular Architecture**: Expanded to 9 specialized modules.
- **Documentation**: Updated `README.md` to reflect new features and architectural improvements.
- **UI Feedback**: Standardized all console output using the new Logger module, providing better visual cues (Success, Error, Warning, DryRun).
