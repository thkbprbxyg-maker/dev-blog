# Truck Signs API

## Description

Truck Signs API is a Django REST API for managing truck sign designs. It uses a PostgreSQL database running in a separate container and is accessible on port 8020.

## Repository

[truck_signs_api](https://github.com/thkbprbxyg-maker/truck_signs_api/tree/feature/docker-final)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Configuration](#configuration)

## Prerequisites

- Docker installed on your machine

## Quickstart

1. Clone the repository:
```bash
git clone https://github.com/thkbprbxyg-maker/truck_signs_api.git
cd truck_signs_api
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Build the image:
```bash
docker build -t truck_signs_api .
```

4. Create the network:
```bash
docker network create truck_signs_network
```

5. Start the database:
```bash
docker run -d \
  --name db \
  --network truck_signs_network \
  --restart always \
  --env-file .env \
  -v truck_signs_data:/var/lib/postgresql/data \
  postgres:15
```

6. Start the API:
```bash
docker run -d \
  --name truck_signs_api \
  --network truck_signs_network \
  --restart always \
  -p 8020:8020 \
  --env-file .env \
  truck_signs_api
```

7. Access the API: `http://<your-ip>:8020`

## Usage

### Available Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /truck-signs/products/` | List all products |
| `GET /truck-signs/categories/` | List all categories |
| `GET /truck-signs/product-color/` | List all product colors |
| `GET /admin/` | Django admin panel |

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `DOCKER_SECRET_KEY` | Django secret key | - |
| `DOCKER_DB_NAME` | Database name | `truck_signs` |
| `DOCKER_DB_USER` | Database user | `postgres` |
| `DOCKER_DB_PASSWORD` | Database password | - |
| `DOCKER_DB_HOST` | Database host | `db` |
| `DOCKER_DB_PORT` | Database port | `5432` |
| `ALLOWED_HOSTS` | Allowed hosts | `localhost` |

Containers use `--restart always` and will automatically restart on crash or Docker daemon restart.
