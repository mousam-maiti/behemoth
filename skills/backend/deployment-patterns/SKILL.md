---
name: deployment-patterns
description: CI/CD pipelines, Docker containerization, health checks, rollback strategies.
triggers:
  - "deploy"
  - "docker"
  - "CI/CD"
  - "pipeline"
  - "container"
  - "production"
  - "rollback"
---

# Deployment Patterns Skill

## Docker

### Dockerfile (Node.js)
```dockerfile
FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --only=production

FROM base AS build
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
RUN addgroup -g 1001 -S app && adduser -S app -u 1001
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
USER app
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://localhost:3000/health || exit 1
CMD ["node", "dist/index.js"]
```

### Dockerfile (Python)
```dockerfile
FROM python:3.12-slim AS base
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1

FROM base AS deps
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM deps AS runner
COPY . .
RUN adduser --disabled-password --no-create-home app
USER app
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:8000/health || exit 1
CMD ["gunicorn", "app:create_app()", "--bind", "0.0.0.0:8000", "--workers", "4"]
```

### Docker Compose
```yaml
services:
  app:
    build: .
    ports: ["3000:3000"]
    env_file: .env
    depends_on:
      db: { condition: service_healthy }
      redis: { condition: service_healthy }
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes: ["pgdata:/var/lib/postgresql/data"]
    healthcheck:
      test: pg_isready -U app
      interval: 10s
      timeout: 5s
      retries: 3

  redis:
    image: redis:7-alpine
    healthcheck:
      test: redis-cli ping
      interval: 10s
      timeout: 5s

volumes:
  pgdata:
```

### .dockerignore
```
node_modules
.git
.env
.env.*
*.md
tests/
coverage/
.behemoth/
```

## CI/CD Pipeline (GitHub Actions)
```yaml
name: CI/CD
on:
  push: { branches: [main] }
  pull_request: { branches: [main] }

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test -- --coverage
      - run: npm audit --production

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t app:${{ github.sha }} .
      # Push to registry, deploy to platform
```

## Rollback Strategies
```
1. Blue-Green: Run new version alongside old. Switch traffic atomically.
   Rollback: Switch traffic back to old version.

2. Canary: Route 5% traffic to new version. Monitor errors.
   Rollback: Route 100% back to old version.

3. Database: Forward-only migrations. To "rollback", write a new migration.

4. Feature Flags: Deploy code disabled. Enable incrementally.
   Rollback: Disable the flag.

Always:
- Keep previous version running for 15-30 minutes after deploy
- Monitor error rates, latency, and key business metrics
- Automate rollback trigger: if error rate > 1%, auto-rollback
```

## Health Checks
```
GET /health       → { "status": "ok" }  (basic liveness)
GET /health/ready → checks DB, cache, required services
GET /health/live  → process is running (even if deps are down)

Use /ready for load balancer health checks
Use /live for container orchestrator restart decisions
```

## Environment Management
```
.env.example     → Committed, placeholder values
.env             → Not committed, local overrides
.env.test        → Test environment config
.env.production  → Never in repo — set in deployment platform

Required env vars should fail fast on startup:
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL required');
```
