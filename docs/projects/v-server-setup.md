# V-Server Setup

## Description

This project documents the complete setup of a secure Linux V-Server environment including SSH configuration, security hardening, web server installation, and Git setup.

## Repository

[v-server-setup](https://github.com/thkbprbxyg-maker/v-server-setup/tree/future)

## Table of Contents

- [Project Goal](#project-goal)
- [Server Environment](#server-environment)
- [SSH Key Configuration](#ssh-key-configuration)
- [Disable Password Authentication](#disable-password-authentication)
- [Web Server Installation](#web-server-installation)
- [Git Configuration](#git-configuration)

## Project Goal

Configure a secure V-Server for deploying web applications. The server is hardened by disabling password authentication and enabling SSH key-based login only.

## Server Environment

- **Operating System:** Ubuntu (Debian-based Linux)
- **Access Method:** SSH
- **Authentication:** Public Key Authentication

## SSH Key Configuration

1. Generate an SSH key locally:
```bash
ssh-keygen -t ed25519
```

2. Copy the public key to the server:
```bash
ssh-copy-id <user>@<server-ip>
```

3. Verify the login:
```bash
ssh <user>@<server-ip>
```

## Disable Password Authentication

1. Edit the SSH configuration:
```bash
sudo nano /etc/ssh/sshd_config
```

2. Set the following values:
PasswordAuthentication no
PubkeyAuthentication yes

3. Restart SSH:
```bash
sudo systemctl restart ssh
```

## Web Server Installation

```bash
sudo apt update
sudo apt install nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

## Git Configuration

```bash
sudo apt install git
git config --global user.name "<Your Name>"
git config --global user.email "<your@email.com>"
```
