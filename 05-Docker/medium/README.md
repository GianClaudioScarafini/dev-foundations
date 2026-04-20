# Medium — Multi-container app with docker-compose

## Scenario

The project tracker needs a real database. The team has decided on PostgreSQL.
You need to wire up two containers — the Node.js API and a Postgres database —
so they can talk to each other, and so the database data persists between restarts.

Running two `docker run` commands and linking them manually is fragile.
**docker-compose** lets you define the whole setup in one file.

---

## What you'll learn

- `docker-compose.yml` structure: `services`, `environment`, `ports`, `volumes`, `depends_on`
- How containers in the same compose file reach each other by service name
- Environment variables in containers (and why you never hardcode credentials)
- Named volumes for database persistence
- Health checks — waiting for postgres to be ready before starting the app
- `docker compose up`, `down`, `logs`, `exec`

---

## The app

`server.js` is a Node.js/Express API that reads projects from a Postgres database.
`init.sql` creates the table and seeds it with data — Postgres runs this automatically
on first start.

You do NOT need to modify `server.js` or `init.sql`.

Your job:
1. Write the `Dockerfile` for the app (same pattern as simple, you've done this)
2. Write `docker-compose.yml` to orchestrate both services

---

## Your tasks

**Task 1** — Understand the app's environment variables.

Open `server.js` and find what env vars it expects to connect to Postgres.
You'll need to pass these in your compose file.

**Task 2** — Write the `Dockerfile` for the app.

Same as simple. Base: `node:18-alpine`. Don't forget `.dockerignore`.

**Task 3** — Write `docker-compose.yml`.

Requirements:
- Service `app`: build from current directory, port `3000:3000`
- Service `db`: use image `postgres:15-alpine`
- Pass Postgres credentials as environment variables to both services
- The `db` service needs: `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`
- The `app` service needs the same values to build its connection string
- Mount `init.sql` into the db so it runs on first start
  (Postgres auto-runs scripts placed in `/docker-entrypoint-initdb.d/`)
- Use a **named volume** so database data persists across `docker compose down`
- `app` should declare `depends_on: db` so compose starts db first

> Key question before you write: how does `app` reach `db`?
> Not `localhost`. What hostname should the connection string use?

**Task 4** — Start it.

```bash
docker compose up
```

Test it:
```bash
curl http://localhost:3000/projects
```

**Task 5** — Verify persistence.

```bash
docker compose down        # stops and removes containers
docker compose up          # restart
curl http://localhost:3000/projects   # data should still be there
```

Why does the data persist even though the container was removed?

**Task 6** — Shell into the database.

```bash
docker compose exec db psql -U <your_user> -d <your_db>
```

Then run: `SELECT * FROM projects;`

**Task 7 — Challenge**

The app sometimes crashes on startup because Postgres isn't ready yet,
even with `depends_on`. `depends_on` only waits for the container to start,
not for Postgres to be accepting connections.

Add a `healthcheck` to the `db` service using `pg_isready`, and change
`depends_on` in `app` to wait for `db` to be `healthy`.

Look up: `healthcheck` and `depends_on: condition: service_healthy`

---

## Done?

Check `solution/docker-compose.yml`. Then answer out loud:
- What's the hostname the app uses to reach the database, and why?
- What would happen if you ran `docker compose down -v`?
