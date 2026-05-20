# Baby Tools Shop

## Description

Baby Tools Shop is a simple e-commerce demo application built with Django. The project includes user authentication, product and category management, and an admin interface. It is containerized with Docker for easy and reproducible setup.

## Repository

[baby-tools-shop](https://github.com/thkbprbxyg-maker/baby-tools-shop/tree/future)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Usage](#usage)

## Prerequisites

- Docker (latest stable version)
- Git
- Python 3.9 (required by the Docker image)

No local Django installation is required as the application runs inside a Docker container.

## Quickstart

1. Clone the repository:
```bash
git clone https://github.com/thkbprbxyg-maker/baby-tools-shop.git
cd baby-tools-shop
```

2. Create environment file:
```bash
cp example.env .env
```

3. Build Docker image:
```bash
docker build -t baby-tools-shop .
```

4. Run the container:
```bash
docker run -p 8000:8000 baby-tools-shop
```

5. Open in browser: `http://localhost:8000`

## Usage

### Build the Docker image
```bash
docker build -t baby-tools-shop .
```

### Run the application
```bash
docker run --rm -p 8000:8000 baby-tools-shop
```

- App: `http://localhost:8000`
- Admin: `http://localhost:8000/admin`

### Run in background
```bash
docker run -d --name baby-tools-shop --rm -p 8000:8000 baby-tools-shop
```

Stop it with:
```bash
docker stop baby-tools-shop
```

### Use a different port
```bash
docker run --rm -p 8025:8000 baby-tools-shop
```

### Create a Django superuser
```bash
docker exec -it <container_id> python manage.py createsuperuser
```
