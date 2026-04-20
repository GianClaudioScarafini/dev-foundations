# Hard — Production-ready setup

## Scenario

The project tracker is going to production. The team has raised three concerns:

1. **Image size** — the dev image is 300MB+ because it includes build tools.
   Production should only ship what's needed to run the app.

2. **Performance** — the API has no caching. Every request hits the database.
   The team wants Redis for caching frequent queries.

3. **Security** — the API should not be directly exposed on port 3000.
   An nginx reverse proxy should sit in front, handle SSL termination (in theory),
   and route `/api/*` traffic to the app.

Your job: build a production-grade `docker-compose.yml` with four services,
a multi-stage `Dockerfile`, and a working nginx config.

---

## What you'll learn

- **Multi-stage builds** — build stage vs production stage, why image size drops dramatically
- **Redis** — caching in containers, connecting a second backing service
- **nginx as reverse proxy** — routing, upstream config
- **Environment variable best practice** — `.env` file + `env_file` in compose
- **Docker networking** — internal vs external ports, services that aren't exposed
- **Restart policies** — `restart: unless-stopped`

---

## Architecture

```
Browser / curl
     │
     ▼
  nginx :80          (only port exposed to host)
     │
     ▼  /api/*
  app :3000           (internal only — not exposed to host)
     │         │
     ▼         ▼
  db :5432   redis :6379    (internal only)
```

---

## Files provided

- `server.js` — updated API that uses Redis for caching
- `init.sql` — same as medium
- `package.json` — now includes `redis` package
- `nginx/nginx.conf` — starter nginx config (you complete it)
- `Dockerfile` — you write this as a multi-stage build
- `docker-compose.yml` — you write this
- `.env.example` — copy to `.env` and fill in values

---

## Your tasks

**Task 1 — Read `server.js`**

Find:
- What Redis env vars does it expect?
- What routes use caching and what's the TTL?
- What env vars does it need overall?

**Task 2 — Write the multi-stage `Dockerfile`**

A multi-stage build has two `FROM` instructions:

```dockerfile
# Stage 1: builder — install ALL deps including devDependencies
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install        # installs everything
COPY . .
# any build step (TypeScript compile, etc.) would go here

# Stage 2: production — copy only what you need to run
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.js .
COPY --from=builder /app/package.json .
# nothing else — no source maps, no test files, no devDeps
CMD ["node", "server.js"]
```

Write your own version. Don't copy this exactly — understand it first.

> Why does this make the image smaller?
> What gets left behind in the builder stage?

**Task 3 — Complete `nginx/nginx.conf`**

Requirements:
- Listen on port 80
- Proxy `/api/` requests to `http://app:3000/`
- Strip the `/api` prefix before forwarding (hint: look up `proxy_pass` with trailing slash)
- Set standard proxy headers: `Host`, `X-Real-IP`, `X-Forwarded-For`

**Task 4 — Write `docker-compose.yml`**

Four services: `nginx`, `app`, `db`, `redis`

Requirements:
- Only `nginx` is exposed to the host (port `80:80`)
- `app`, `db`, `redis` are internal — no `ports` mapping
- Use `env_file: .env` for `app` so credentials aren't in compose
- `app` depends on `db` (healthy) and `redis`
- `db` and `redis` use named volumes
- All services: `restart: unless-stopped`

**Task 5 — Create `.env`**

Copy `.env.example` to `.env` and fill in values.
(Never commit `.env`. It's in `.dockerignore`.)

**Task 6 — Start it**

```bash
docker compose up --build
```

Test:
```bash
curl http://localhost/api/projects       # first call — hits database
curl http://localhost/api/projects       # second call — from cache (check logs)
```

**Task 7 — Verify the cache**

```bash
docker compose exec redis redis-cli
> KEYS *
> TTL projects:all
```

**Task 8 — Measure image size**

```bash
docker images | grep project-tracker
```

Compare the production image size to what you'd get without multi-stage.
Why is the production image smaller?

**Task 9 — Challenge: secrets management**

Hardcoded passwords in `.env` are better than in compose, but still not ideal.
Research Docker secrets (`docker secret create`) — when would you use them,
and what's the limitation in compose vs swarm mode?

Write a short answer as a comment at the bottom of your `docker-compose.yml`.

---

## Done?

Check `solution/`. Then answer:
- What are the two stages in your Dockerfile and what does each do?
- Why is `app` not exposed on port 3000 to the host?
- What would happen to your cached data if you ran `docker compose restart redis`?
  What about `docker compose down -v`?
