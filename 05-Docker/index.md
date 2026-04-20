# Docker — Core Concepts

## What problem does Docker solve?

"It works on my machine" → Docker makes your app run the same everywhere.
You ship a **container** — your code + its runtime + its dependencies, all bundled.

---

## The mental model

```
Your code
  + a base OS layer
  + your runtime (Node, Python, etc.)
  + your dependencies (npm packages, etc.)
= an IMAGE (a blueprint, read-only)

Run that image → a CONTAINER (a live, isolated process)
```

Think of it like:
- **Image** = a class definition
- **Container** = an instance of that class

---

## Core vocabulary

| Term | What it is |
|---|---|
| **Image** | Read-only blueprint (built from a Dockerfile) |
| **Container** | A running instance of an image |
| **Dockerfile** | Instructions to build an image |
| **docker-compose.yml** | Defines multi-container apps |
| **Volume** | Persistent storage that survives container restarts |
| **Port mapping** | Connects container port → host port (`-p 3000:3000`) |
| **Registry** | Where images are stored (Docker Hub = public registry) |

---

## Dockerfile instructions — the ones you'll use 80% of the time

```dockerfile
FROM node:18-alpine        # start from a base image
WORKDIR /app               # set working directory inside container
COPY package*.json ./      # copy specific files first (cache optimization)
RUN npm install            # run a command during BUILD time
COPY . .                   # copy the rest of your code
EXPOSE 3000                # document which port the app uses
CMD ["node", "server.js"]  # command to run when container STARTS
```

**Key distinction:**
- `RUN` → executes during `docker build` (bakes into the image)
- `CMD` → executes during `docker run` (starts your app)

---

## Essential commands

```bash
# Build
docker build -t my-app .          # build image, tag it "my-app"
docker build -t my-app:v2 .       # tag with version

# Run
docker run my-app                  # run (detached = keeps terminal)
docker run -d -p 3000:3000 my-app  # detached, map port
docker run --rm my-app             # remove container after it stops
docker run -e PORT=4000 my-app     # pass env variable

# Inspect
docker ps                          # running containers
docker ps -a                       # all containers (including stopped)
docker images                      # all local images
docker logs <container-id>         # view stdout from container
docker exec -it <id> sh            # open a shell inside a running container

# Cleanup
docker stop <container-id>
docker rm <container-id>
docker rmi <image-id>
docker system prune                # remove all stopped containers + dangling images
```

---

## docker-compose commands

```bash
docker compose up          # start all services defined in docker-compose.yml
docker compose up -d       # detached
docker compose down        # stop and remove containers
docker compose down -v     # also remove volumes
docker compose logs        # view logs from all services
docker compose logs app    # logs from a specific service
docker compose exec app sh # shell into running service
docker compose build       # rebuild images
```

---

## Layers and caching — why order matters

Every Dockerfile instruction creates a **layer**. Docker caches layers.
If a layer hasn't changed, Docker reuses it → much faster builds.

```dockerfile
# SLOW — npm install re-runs every time ANY file changes
COPY . .
RUN npm install

# FAST — npm install only re-runs when package.json changes
COPY package*.json ./
RUN npm install
COPY . .
```

Rule: put things that change less often EARLIER in the Dockerfile.

---

## .dockerignore — what to exclude

Just like `.gitignore`. Always create one.

```
node_modules
.env
.git
*.log
```

Without this, `COPY . .` copies your entire `node_modules` into the build context
— slow and pointless since you `RUN npm install` inside anyway.

---

## Networking in docker-compose

Services in the same `docker-compose.yml` can reach each other by **service name**.

```yaml
services:
  app:
    # this service can reach "db" at hostname "db"
  db:
    image: postgres
```

Inside `app`, connect to `postgresql://db:5432/mydb` — not `localhost`.

---

## Volumes — persisting data

```yaml
volumes:
  - ./data:/var/lib/postgresql/data   # bind mount (host path : container path)
  - postgres_data:/var/lib/postgresql/data  # named volume (Docker manages it)
```

Use **named volumes** for databases in dev. Use **bind mounts** to sync your source
code into a container for hot-reloading.

---

## Learning path for these exercises

1. Read this index
2. Work through `simple/` — one container, one app
3. Work through `medium/` — multiple containers, compose, environment vars
4. Work through `hard/` — production patterns: multi-stage builds, health checks, reverse proxy

Each folder has:
- `README.md` — scenario + tasks (attempt before looking at anything else)
- Starter files with `# TODO` comments
- A `solution/` folder (only open after you've tried)
