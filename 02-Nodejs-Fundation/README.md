# Node.js Fundamentals — Exercise Track

Goal: go from "I know JS in the browser" to "I can build and ship a REST API with Node and Express".

---

## How to navigate

Each folder = one concept.
Each folder has:
- `index.md` — what to learn before you code (short, no fluff)
- `simple.js` — warm-up: syntax and basic usage
- `medium.js` — apply the concept in a realistic scenario
- `hard.js` — combine concepts, handle edge cases, think like a dev

Work in order. Do not skip ahead.

---

## Track overview

| # | Topic | Why it matters |
|---|-------|----------------|
| 01 | Node vs Browser | The mental model shift — no DOM, no window |
| 02 | Modules (CJS & ESM) | How Node organises code — every file is a module |
| 03 | File System | Read, write, and watch files — this is what makes Node useful on a server |
| 04 | Environment Variables | Secrets and config — you will use this in every real project |
| 05 | HTTP Module | How a server works under the hood before Express hides it |
| 06 | Express Basics | The framework that runs half the web's backends |
| 07 | REST API Design | CRUD endpoints, status codes, JSON responses |
| 08 | Middleware | The backbone of Express — logging, auth, error handling |
| 09 | Database (SQLite) | Persist data — because in-memory arrays don't survive a restart |
| 10 | Full-Stack API | Wire everything together into a deployable API |

---

## Session rules (same as other tracks)
1. You attempt first, always
2. 15 min stuck → check docs → ask Claude
3. Commit to GitHub at end of every session
4. Copilot OFF during exercises

---

## Setup

```bash
mkdir node-exercises && cd node-exercises
npm init -y
npm install express dotenv better-sqlite3
```

Run any exercise file with:
```bash
node simple.js
node medium.js
```

For Express exercises, the server stays running — use `Ctrl+C` to stop it.
Use a tool like [httpie](https://httpie.io/) or `curl` to test endpoints:
```bash
curl http://localhost:3000/api/users
```

---

## What job-ready looks like

By the end of this track you will be able to:
- Explain how Node's event loop works in an interview
- Split code into modules and import them correctly
- Read/write files and handle async errors properly
- Store secrets in `.env` files and never commit them
- Build a full REST API with Express (GET, POST, PUT, DELETE)
- Write middleware for logging and error handling
- Connect to a database and run queries
- Explain the difference between `req.params`, `req.query`, and `req.body`
