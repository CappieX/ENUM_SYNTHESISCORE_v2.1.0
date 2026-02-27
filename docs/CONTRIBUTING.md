#  Contributing to Enum Synthesis Engine

Welcome to the Synthesis Engine! We follow a modular development approach to ensure scalability and reliability.

## Architecture Principles

1. **Concern Separation**: Keep UI logic in `frontend/`, synthesis logic in `backend/modules/`, and deployment logic in `deployment/`.
2. **Module-Based Development**: New backend features should be implemented as separate modules in `backend/modules/` and exported to the main scripts.
3. **Test-Driven**: Add Pester tests in `backend/tests/` for any new module functionality.
4. **Environment First**: Use the `.env.example` to define new configuration needs.

##  Security & Performance Standards

1. **Input Validation**: Always validate user inputs (names, paths, slugs) using the built-in `Test-ValidProjectName` and `Test-ValidPath` functions in PowerShell or Zod/equivalent in React.
2. **Path Management**: Never use string concatenation for paths. Always use `Join-Path` (PowerShell) or `path.join` (Node).
3. **Lazy Loading**: New frontend pages or heavy 3D components should be lazily loaded using `React.lazy()` to maintain performance.
4. **Secret Management**: Never hardcode tokens or keys. Use environment variables and add placeholders to `.env.example`.
5. **Linting**: Ensure all code passes `PSScriptAnalyzer` and `ESLint` before submitting a PR.

##  Development Workflow

### 1. Backend Development
- Edit modules in `backend/modules/`.
- Verify with `backend/scripts/Test-ProjectGenerator.ps1`.
- Add new templates to `backend/Templates/`.

### 2. Frontend Development
- Navigate to `frontend/`.
- Use `npm run dev` for hot-reloading.
- Add reusable components to `frontend/src/components/`.

### 3. Deployment
- Test changes using `deployment/docker/docker-compose.yml`.
- Verify production builds with `deployment/scripts/verify.sh`.

## Directory Map
Refer to the main [README.md](../README.md) for the detailed file tree.
