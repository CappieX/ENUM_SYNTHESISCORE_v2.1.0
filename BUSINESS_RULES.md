# 📋 Enum PROJECT SYNTHESIS ENGINE - Business Rules

This document serves as the single source of truth for architectural decisions, coding standards, security constraints, and operational guidelines for the Enum PROJECT SYNTHESIS ENGINE.

---

## 1. Project Overview
- **Description**: A high-fidelity, modular platform for automated project scaffolding and orchestration.
- **Mission**: "Synthesize production-ready projects in seconds."
- **Target Audience**: Individual developers, agile teams, and enterprise engineering departments.
- **Value Proposition**: Combines a modern, high-fidelity UI with a robust PowerShell-driven core to automate the "zero-to-one" phase of software development, including cloud/repository integration.

## 2. Architecture & Design Principles
- **Modular Layout**: 
    - `frontend/`: React + Vite UI application.
    - `backend/`: PowerShell-based synthesis core and logic modules.
    - `deployment/`: Infrastructure-as-code and containerization (Docker/Nginx).
    - `docs/`: Centralized project documentation.
- **Tech Stack**:
    - **Frontend**: React 19, Vite, Tailwind CSS, Framer Motion, Three.js (React Three Fiber).
    - **Backend**: PowerShell 7 (cross-platform), Pester (testing).
    - **Infrastructure**: Docker, Nginx, GitHub Actions.
- **Design System**: High-fidelity "Teal/Ocean" palette, glass-morphism panels, 3D animated core, and pulsing telemetry icons.
- **Data Flow**: User Input (UI) → Configuration Store (Zustand) → API/Bridge (Future) → PowerShell Logic → File System / GitHub API.

## 3. Coding Standards
### General
- Indentation: 2 spaces for web, 4 spaces for PowerShell.
- Naming: `camelCase` for JS/TS variables/functions, `PascalCase` for PowerShell functions and public members.

### Frontend (React + Vite)
- **Component Pattern**: Functional components with hooks.
- **State Management**: Zustand for global engine state (`useSynthesisStore`).
- **Styling**: Tailwind CSS with custom theme variables for consistency.
- **Performance**: Always use `React.lazy()` and `Suspense` for heavy components (3D Canvas) or sub-pages.

### Backend (PowerShell)
- **Module Design**: Export granular, reusable functions using `Export-ModuleMember`. Each module should encapsulate a single responsibility (e.g., `GitHubManager`, `TemplateManager`).
- **Validation**: Use strict parameter validation (`[Parameter(Mandatory=$true)]`) and helper validation functions (`Test-ValidProjectName`).
- **Error Handling**: Standardized `try/catch` blocks with logs dispatched via `Write-Log` in `Logger.ps1`.
- **Logging**: Mandatory logging for `INFO`, `WARNING`, `ERROR`, `SUCCESS`, and `DRYRUN` levels.
- **Documentation**: Every function must include PowerShell Comment-Based Help (`.SYNOPSIS`, `.DESCRIPTION`, `.PARAMETER`).

### Documentation Standards
- **JS/TS**: All components and utility functions must have JSDoc comments.
- **PowerShell**: All functions must have `.SYNOPSIS` and `.DESCRIPTION` at minimum.
- **Markdown**: All user-facing documentation must follow the project's high-fidelity tone.

## 4. Security Rules
- **Input Validation**: 
    - Project names: Only alphanumeric, hyphen, underscore (1-64 chars).
    - Paths: Use `Join-Path` and `Resolve-Path` safely; prevent directory traversal (e.g., block `..` in paths).
    - GitHub Repos: Validate against GitHub's repository naming rules.
- **Secrets Management**: 
    - **Zero Hardcoded Secrets**: All tokens, client IDs, and secrets must come from environment variables.
    - **Log Sanitization**: Sensitive tokens (GitHub PATs) must never appear in log files.
- **Authentication & Authorization**:
    - GitHub OAuth flow must use **PKCE** (Proof Key for Code Exchange).
    - Tokens must be stored securely (HttpOnly cookies or encrypted storage).
    - Session management: Use secure, HttpOnly cookies with short expiration.
- **Infrastructure**:
    - Docker images must run as the non-root `synthesis` user.
    - Nginx must include security headers: **CSP**, **HSTS**, **X-Frame-Options**, **X-Content-Type-Options**.
    - All production communications must occur over **HTTPS**.

## 5. Performance Guidelines
- **Frontend**:
    - Lazy load routes and heavy components (e.g., 3D canvas, template preview).
    - Optimize images: Use **WebP** format, responsive sizes, and lazy load below-the-fold assets.
    - Monitor bundle size using `vite-bundle-visualizer`.
- **Backend**:
    - **Dry-Run Mode**: Must perform **no** actual I/O or network calls (simulated only).
    - **Caching**: Template metadata should be cached in memory after the initial scan.
    - Parallel processing: Use `ForEach-Object -Parallel` for file generation where thread-safe.
- **Deployment**:
    - Enable **Gzip/Brotli** compression in Nginx.
    - Set long-term cache headers for hashed static assets.
    - Utilize a **CDN** for global asset distribution.

## 6. Testing Requirements
- **PowerShell**: 
    - Mandatory Pester tests in `backend/tests/`.
    - Coverage Goal: **70% minimum** for critical modules (`PathManager`, `TemplateManager`, `GitHubManager`).
- **Frontend**: 
    - Utility functions must have unit tests (Vitest).
    - Critical user flows must be covered by E2E tests (Playwright/Cypress).
- **Integration**: 
    - E2E tests must verify a full project generation flow (Dry-run → Actual → GitHub repo creation).

## 7. Contribution Workflow
- **Branching**: `main` (prod), `develop` (integration), and `feature/*` or `fix/*` for active work.
- **PR Requirements**:
    - Passing CI (Linting + Tests).
    - Updated documentation for new features.
    - **Code Review**: At least one other contributor must approve the PR.
    - Professional signature (e.g., "Signed-off-by: [Title] : [Name]").
- **Versioning**: Follow Semantic Versioning (SemVer) and update `CHANGELOG.md` for every release.

## 8. Deployment Rules
- **Environments**: Separate `dev`, `staging`, and `production`.
- **CI/CD**: Automation handled via GitHub Actions (`.github/workflows/ci.yml`).
- **Production Prerequisites**:
    - SSL certificates must be valid and configured for auto-renewal.
    - Load testing must be performed for major core changes.
    - Security headers must be verified post-deployment.
- **Rollback**: Maintain previous stable Docker image tags and database backups.

## 9. AI Assistant Guidelines
- **Follow the Rules**: Adhere strictly to the architectural and security standards defined here.
- **Readability Over Cleverness**: Generate code that is easy to maintain and understand.
- **Justify Decisions**: Add comments explaining **why** a specific decision was made.
- **Minimal Dependencies**: Never introduce new libraries or dependencies without clear justification.
- **User Informed**: Keep the user updated on any security or performance implications of proposed changes.

## 10. Future Roadmap Alignment
- **Vision**: All contributions must align with the goal of an AI-assisted, team-centric synthesis ecosystem.
- **Key Targets**: AI assistant integration, team workspaces, project marketplace, and enterprise compliance modules.
- **Incubation**: New modules should reside in `future-modules/` until they meet production standards.
