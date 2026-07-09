---
sidebar_custom_props:
  image: /img/projects-docs/minecraft.png
---

# Minecraft Server

## Description

Minecraft Java Edition server running in Docker using a custom Dockerfile and docker-compose setup with persistent world data. This repository does NOT use a prebuilt Minecraft Docker image — the official server JAR is downloaded during image build.

## Repository

[minecraft-server](https://github.com/thkbprbxyg-maker/minecraft-server/tree/future)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Configuration](#configuration)
- [Persistence](#persistence)
- [Security Notes](#security-notes)

## Prerequisites

- Docker
- Docker Compose

## Quickstart

1. Clone the repository:
```bash
git clone https://github.com/thkbprbxyg-maker/minecraft-server.git
cd minecraft-server
```

2. Create `.env` file:
```bash
cp example.env .env
```

3. Start the server:
```bash
docker compose up --build
```

4. Connect with Minecraft Java Edition:
- Local: `localhost:25565`
- Remote: `<YOUR_SERVER_IP>:25565`

## Usage

### Start / Stop

```bash
docker compose up --build    # Start and build
docker compose down          # Stop
docker compose logs -f       # View logs
```

### Rebuild after changes

```bash
docker compose up --build
```

## Configuration

Environment variables (set in `.env` or `docker-compose.yaml`):

| Variable | Default |
|----------|---------|
| `MC_MEMORY` | `2G` |
| `MC_PORT` | `25565` |
| `MC_JAR_URL` | Mojang server JAR URL |

## Persistence

All server data (world, configs) is stored in the Docker volume `mc-data`, mounted to `/minecraft`. Data is not lost after container restarts.

## Security Notes

- No secrets, tokens, passwords, SSH keys, or IP addresses are committed to the repository
- Use environment variables or `.env` (ignored by git) for sensitive values
