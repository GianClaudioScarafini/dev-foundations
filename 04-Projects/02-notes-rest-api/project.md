# Project 02 — Notes REST API

**Difficulty:** Beginner-Mid  
**Stack:** Express + TypeScript + SQLite (`better-sqlite3`)  
**Time estimate:** 2–3 sessions  

---

## What you're building

A REST API for personal notes — something like a backend for a Notes app. You could wire a React frontend to this. This is where your Node.js and TypeScript knowledge connects for the first time.

---

## What it does

```
GET    /api/notes              → list all notes (supports ?pinned=true, ?search=keyword)
GET    /api/notes/:id          → get one note
POST   /api/notes              → create a note
PATCH  /api/notes/:id          → update title/body/pinned
DELETE /api/notes/:id          → delete note (soft delete — sets deleted_at)
PATCH  /api/notes/:id/pin      → toggle pinned
GET    /api/notes/stats        → { total, pinned, withTags, mostUsedTags: [] }

GET    /api/tags               → all distinct tags used across notes
GET    /api/notes?tag=work     → notes with a specific tag

GET    /health                 → { status: 'ok', uptime, db: 'connected' }
```

---

## Data model

```ts
interface Note {
  id: number
  title: string
  body: string
  pinned: boolean
  tags: string[]         // stored as JSON in SQLite
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}
```

---

## File structure

```
02-notes-rest-api/
├── src/
│   ├── index.ts            ← entry point
│   ├── app.ts              ← express setup (no listen)
│   ├── config.ts           ← typed config from env
│   ├── db/
│   │   ├── index.ts        ← connection + migrations
│   │   └── seed.ts         ← seed data for dev
│   ├── models/
│   │   └── note.ts         ← typed CRUD functions
│   ├── routes/
│   │   └── notes.ts        ← express router
│   ├── middleware/
│   │   ├── requestId.ts
│   │   ├── logger.ts
│   │   └── errorHandler.ts
│   └── types/
│       └── index.ts        ← shared interfaces + express augmentation
├── .env
├── .env.example
├── tsconfig.json
├── package.json
└── README.md
```

---

## Requirements

- [ ] TypeScript strict mode
- [ ] All request handlers fully typed: `Request<P, ResBody, ReqBody, Query>`
- [ ] Custom `AppError` class hierarchy used throughout
- [ ] Request ID middleware — every response has `X-Request-Id` header
- [ ] Tags stored as JSON string in SQLite, parsed to `string[]` in the model layer
- [ ] Soft delete — `GET /notes` never returns deleted notes
- [ ] `GET /notes?search=keyword` does case-insensitive search on title + body
- [ ] At least 10 seed notes across different tags

---

## Stretch goals

- [ ] Pagination: `?page=1&limit=10` with meta in response
- [ ] Markdown body — store as-is, add a `?format=html` param that converts on the fly (`marked` package)
- [ ] Full-text search using SQLite FTS5 (look it up — it's powerful)
- [ ] Rate limiting middleware (build it yourself, don't install a package)
- [ ] Write a simple test file using Node's built-in `assert` module

---

## Skills used

- Express + TypeScript together
- SQLite with typed model layer
- Soft delete pattern
- Error hierarchy
- Environment config validation
- Module structure

---

## What to say in an interview

> "I built a REST API for a notes app using Express and TypeScript. I used SQLite for persistence, implemented soft deletes, full-text search, and a typed error hierarchy. The TypeScript strict mode caught several bugs before they ever ran — for example, I accidentally accessed a property that could have been null on a deleted note."
