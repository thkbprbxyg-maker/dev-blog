# Docusaurus Blog

## Description

This project is a personal developer blog and portfolio built with Docusaurus. It was created as part of the Developer Akademie DevSecOps program.

## Configuration Steps

### 1. Forked the Template

Forked the [dev-blog-template](https://github.com/Developer-Akademie-DevSecOpsKurs/dev-blog-template) repository from the Developer Akademie organization and renamed it to `dev-blog`.

### 2. Created Feature Branch

```bash
git checkout -b setup-blog
```

### 3. Installed Dependencies

```bash
npm install
```

### 4. Configured docusaurus.config.ts

- Updated `title` to reflect personal blog
- Updated `tagline` with personal description
- Updated `url` with GitHub Pages URL
- Added `GIT_REPOSITORY_URL` environment variable
- Updated `editUrl` to use environment variable
- Updated navbar `title` and GitHub link
- Removed Community section from footer
- Added Template link to More section in footer
- Updated copyright message

### 5. Configured example.env

Added the following environment variables:
- `DEPLOYMENT_URL`
- `DEPLOYMENT_BRANCH`
- `BASE_URL`
- `GITHUB_ORG`
- `GITHUB_PROJECT`
- `GIT_REPOSITORY_URL`

### 6. Updated README.md

- Updated title and description
- Updated deployment section
- Removed contributing section

