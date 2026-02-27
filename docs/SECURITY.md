# Security Policy

## Reporting a Vulnerability

We take the security of the **Enum PROJECT SYNTHESIS ENGINE** seriously. If you believe you have found a security vulnerability, please report it to us responsibly.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please send an email to `security@enum-synthesis.io` (placeholder) with a detailed description of the issue, steps to reproduce, and potential impact.

## Our Commitment

- We will acknowledge receipt of your report within 48 hours.
- We will provide an estimated timeline for a fix.
- We will notify you once the vulnerability has been resolved.

## Security Hardening Measures

This project implements the following security measures:
- **Input Validation**: Strict whitelisting for project names and paths in PowerShell and React.
- **Secure Headers**: CSP, HSTS, and X-Frame-Options configured in Vite and Nginx.
- **Non-Root Containers**: Docker images run as a dedicated `synthesis` user.
- **Automated Scanning**: CI/CD workflows run PSScriptAnalyzer and ESLint on every push.
