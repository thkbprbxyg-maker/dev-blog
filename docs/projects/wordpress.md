# WordPress + MariaDB (Docker Compose)

## Description

A minimal Docker Compose setup to run WordPress with a MariaDB database. Designed to be simple, reproducible, and secure — no passwords or tokens are stored in the repository.

## Repository

[wordpress-compose-review](https://github.com/thkbprbxyg-maker/wordpress-compose-review/tree/pr/fullproject)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Security Notes](#security-notes)

## Prerequisites

- Docker Engine + Docker Compose plugin
- A machine reachable via HTTP on port `8080`

## Quickstart

1. Clone the repository:
```bash
git clone https://github.com/thkbprbxyg-maker/wordpress-compose-review.git
cd wordpress-compose-review
```

2. Copy the example env file:
```bash
cp .env.example .env
```

3. Start the containers:
```bash
docker compose up -d
```

4. Open WordPress in your browser: `http://<your_ip>:8080`

5. Stop the containers:
```bash
docker compose down
```

## Usage

### Configuration

Adjust the values in `.env` (ports, credentials, blog name). The `.env` file is not committed to the repository.

### Start / Stop

```bash
docker compose up -d    # Start
docker compose ps       # Check status
docker compose down     # Stop
```

### Logs

```bash
docker compose logs
docker compose logs -f wordpress
docker compose logs -f db
```

### Reset Everything

> **Warning:** This will remove ALL data (database & uploads)

```bash
docker compose down -v
```

## Security Notes

- No secrets are stored in the repository
- Credentials are defined only in `.env`
- `.env` is excluded via `.gitignore`
- For production: use strong passwords and add a reverse proxy with HTTPS
