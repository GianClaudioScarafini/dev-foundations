# Simple — Containerise a Node.js API

## Scenario

You've just built a small Express API for a construction project tracker.
It runs fine on your machine with `node server.js`, but your colleague
can't run it — they're on a different OS and don't have Node installed.

Your job: package it into a Docker container so anyone can run it with
one command, no Node required on their machine.

---

## What you'll learn

- `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `CMD`
- Port mapping (`-p`)
- The difference between `RUN` (build time) and `CMD` (run time)
- Why `.dockerignore` matters
- Layer caching — why copy `package.json` before your source code

---

## The app

A dead-simple Express server is provided in `server.js`.
Don't modify it. Your only job is to write the `Dockerfile`.

---

## Your tasks

Work through these in order. Attempt each before reading the next.

**Task 1** — Create a `.dockerignore` file.
What should you exclude? Think before you look at the hint.

> Hint: what folder should never be copied into the build context?

**Task 2** — Write the `Dockerfile`.

Requirements:
- Base image: `node:18-alpine` (alpine = smaller image)
- Working directory inside container: `/app`
- Copy dependencies manifest first, install, then copy source code — why this order?
- Expose port `3000`
- Start the app with `node server.js`

**Task 3** — Build the image.

```bash
docker build -t project-tracker .
```

Check it was created:
```bash
docker images
```

**Task 4** — Run it.

```bash
docker run -p 3000:3000 project-tracker
```

Open http://localhost:3000 — you should see a JSON response.

**Task 5** — Run it detached (in the background).

```bash
docker run -d -p 3000:3000 project-tracker
```

Then check it's running, view its logs, and stop it.

**Task 6 — Challenge question** (answer in a comment at the bottom of your Dockerfile)

If you change `server.js` and rebuild, which layers get rebuilt?
If you change `package.json` and rebuild, which layers get rebuilt?
Why does the order of COPY/RUN matter for build speed?

---

## Done?

Check your solution against `solution/Dockerfile`.
Then run the scoring check: explain out loud what each line of your
Dockerfile does and why you put it in that order.
