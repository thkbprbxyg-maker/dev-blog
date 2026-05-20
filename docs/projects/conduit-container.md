# Conduit Container

## Description

Containerized version of the RealWorld "Conduit" application using Docker and Docker Compose. The project consists of a Django backend, a React frontend, and a PostgreSQL database.

## Repository

[conduit-container](https://github.com/thkbprbxyg-maker/conduit-container/tree/feature-deployment)

## Table of Contents

- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Configuration](#configuration)
- [Usage](#usage)
- [Logs](#logs)

## Architecture

Three services orchestrated with Docker Compose:

| Service | Technology |
|---------|------------|
| `frontend` | React + Node.js, served via nginx |
| `backend` | Django + Gunicorn (WSGI) |
| `db` | PostgreSQL with persistent volume |

## Prerequisites

- Docker
- Docker Compose

No local installation of Node.js, Python, or PostgreSQL is required.

## Quickstart

1. Create environment file:
```bash
cp .env.example .env
```

2. Start all services:
```bash
docker compose up --build
```

3. Open in browser: `http://localhost:8282`

## Configuration

Configuration is done via environment variables. Sensitive data is not stored in the repository — a `.env` file is used and excluded via `.gitignore`.

Example variables:
POSTGRES_USER=conduit
POSTGRES_PASSWORD=conduit_password
POSTGRES_DB=conduit
SECRET_KEY=change_me
PORT=8000

## Usage

- Frontend is accessible via browser at `http://localhost:8282`
- Backend is exposed internally and consumed by the frontend
- Containers automatically restart on failure

## Logs

```bash
docker compose logs backend
docker compose logs frontend
docker compose logs db
```

Persist logs to a file:
```bash
docker compose logs backend > backend-logs.txt
```
