# Juice Shop Master

> **Disclaimer:** The content of this documentation is purely for educational purposes.

This project documents my solutions to hacking challenges in the OWASP Juice Shop, a deliberately insecure web application used for security training. All challenges were solved as part of the Developer Akademie DevSecOps program.

## Table of Contents

- [Quickstart](#quickstart)
- [Challenges](#challenges)

## Quickstart

1. Install OWASP Juice Shop:
```bash
docker run -d -p 3000:3000 bkimminich/juice-shop
```

2. Open browser: `http://localhost:3000`

## Challenges

| Challenge | Category | Difficulty | Video | Danger |
|-----------|----------|------------|-------|--------|
| [Product Tampering](./challenges/product-tampering/README.md) | Broken Access Control | ⭐⭐⭐ | [Video](https://www.loom.com/share/ec339e68b20d4a0984769afbed3f9714) | Attackers can modify product data without authentication, leading to misinformation or financial damage |
| [Database Schema](./challenges/database-schema/README.md) | Injection | ⭐⭐⭐ | [Video](https://www.loom.com/share/ec339e68b20d4a0984769afbed3f9714) | Attackers can map the entire database structure and plan further attacks like data exfiltration |
| [Payback Time](./challenges/payback-time/README.md) | Improper Input Validation | ⭐⭐⭐ | [Video](https://www.loom.com/share/ec339e68b20d4a0984769afbed3f9714) | Attackers can place orders with negative totals causing serious financial damage to the shop |
