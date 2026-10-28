# DevOps CI/CD & Container Security Pipeline

A simple Node.js application demonstrating a practical **CI/CD and DevSecOps workflow** using GitHub Actions, Docker, Docker Hub, automated testing, and Trivy security scanning.

## 🚀 Project Overview

This project demonstrates how application code can be automatically tested, security-scanned, containerized, and published whenever changes are pushed to GitHub.

### CI/CD Workflow

```text
Developer
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
Install Dependencies
    ↓
Automated Tests (Jest)
    ↓
Trivy Security Scan
    ↓
Build Docker Image
    ↓
Push Image to Docker Hub
```

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Application runtime |
| Express.js | Backend framework |
| Jest | Automated testing |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Actions | CI/CD automation |
| Docker | Application containerization |
| Docker Hub | Container image registry |
| Trivy | Container security scanning |
| Linux | CI environment |

## 📁 Project Structure

```text
devops-cicd-project/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── src/
│   └── server.js
│
├── test/
│   └── server.test.js
│
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

## 💻 Run Locally

Clone the repository:

```bash
git clone https://github.com/mdayan0123/devops-cicd-project.git
```

Navigate to the project:

```bash
cd devops-cicd-project
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

The application runs on:

```text
http://localhost:3000
```

## 🧪 Run Automated Tests

The project uses Jest for automated testing.

```bash
npm test
```

The tests verify:

- Application response
- Health-check endpoint

Example:

```text
Test Suites: 1 passed
Tests:        2 passed
```

## 🐳 Docker

Build the Docker image:

```bash
docker build -t devops-cicd-app:1.0 .
```

Run the container:

```bash
docker run -d -p 3000:3000 --name devops-cicd-container devops-cicd-app:1.0
```

Check running containers:

```bash
docker ps
```

View container logs:

```bash
docker logs devops-cicd-container
```

## 🔄 GitHub Actions CI/CD

The project uses GitHub Actions to automate the development workflow.

The pipeline performs:

1. Checkout source code
2. Setup Node.js
3. Install dependencies
4. Run automated tests
5. Login to Docker Hub
6. Build Docker image
7. Run Trivy security scanning
8. Push Docker image to Docker Hub

The workflow is triggered when code is pushed to the `main` branch.

## 🔐 Container Security with Trivy

Trivy is integrated into the CI/CD pipeline to scan the Docker image for known security vulnerabilities.

This helps identify vulnerabilities before the container image is published to Docker Hub.

## 📦 Docker Hub

The Docker image is automatically published to:

**Docker Hub:** `mshams0369/devops-cicd-app`

The image can be pulled using:

```bash
docker pull mshams0369/devops-cicd-app:latest
```

Run it with:

```bash
docker run -d -p 3000:3000 mshams0369/devops-cicd-app:latest
```

## 📊 CI/CD Pipeline Result

GitHub Actions successfully performs:

```text
✓ Checkout
✓ Node.js setup
✓ npm ci
✓ Automated tests
✓ Docker Hub authentication
✓ Docker image build
✓ Trivy security scanning
✓ Docker image push
```

## 🎯 Skills Demonstrated

- CI/CD pipeline implementation
- Git and GitHub
- GitHub Actions
- Docker containerization
- Docker Hub
- Automated testing
- Container security
- Trivy vulnerability scanning
- Linux-based CI environments
- Basic DevSecOps practices

## 👨‍💻 Author

**Mohd Shams Uddin**

GitHub: https://github.com/mdayan0123