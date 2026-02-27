# Multi-stage Dockerfile for Enum PROJECT SYNTHESIS ENGINE

# --- Stage 1: Build Frontend ---
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# --- Stage 2: Final Image ---
FROM node:20-alpine
WORKDIR /app

# Install PowerShell
RUN apk add --no-cache \
    ca-certificates \
    less \
    ncurses-terminfo-base \
    krb5-libs \
    libgcc \
    libintl \
    libssl3 \
    libstdc++ \
    tzdata \
    userspace-rcu \
    zlib \
    icu-libs \
    curl

# Download and install PowerShell for Alpine
RUN curl -L https://github.com/PowerShell/PowerShell/releases/download/v7.4.1/powershell-7.4.1-linux-musl-x64.tar.gz -o /tmp/powershell.tar.gz \
    && mkdir -p /opt/microsoft/powershell/7 \
    && tar zxf /tmp/powershell.tar.gz -C /opt/microsoft/powershell/7 \
    && chmod +x /opt/microsoft/powershell/7/pwsh \
    && ln -s /opt/microsoft/powershell/7/pwsh /usr/bin/pwsh \
    && rm /tmp/powershell.tar.gz

# Copy Backend Modules & Scripts
COPY backend/modules/ ./backend/modules/
COPY backend/Templates/ ./backend/Templates/
COPY backend/scripts/Create-ProjectGenerator.ps1 ./backend/scripts/

# Copy Built Frontend
COPY --from=frontend-build /app/frontend/dist ./public

# Create non-root user
RUN addgroup -S synthesis && adduser -S synthesis -G synthesis \
    && mkdir -p /app/projects && chown -R synthesis:synthesis /app

# Install a simple static file server for the UI
RUN npm install -g serve

USER synthesis

# Environment Variables
ENV PORT=5173
ENV PROJECTS_ROOT=/app/projects

EXPOSE 5173

# Start the synthesis engine UI
CMD ["serve", "-s", "public", "-l", "5173"]
