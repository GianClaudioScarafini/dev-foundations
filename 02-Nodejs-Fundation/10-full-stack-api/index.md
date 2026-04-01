# 10 — Full-Stack API

## What you're building

A deployable REST API that combines everything from this track:
- Node.js + Express
- Environment variables (dotenv)
- Proper middleware stack (logger, auth, error handling)
- SQLite database
- Organised file structure

This is the kind of project you'd put on GitHub and reference in an interview.

## Architecture overview

```
10-full-stack-api/
├── server.js           ← entry point — starts the server
├── app.js              ← Express app — no listen() call
├── .env                ← secrets (not committed)
├── .env.example        ← committed, shows required vars
├── config.js           ← validated config from env vars
├── db/
│   ├── index.js        ← connection + migrations
│   └── seed.js         ← test data
├── middleware/
│   ├── logger.js
│   ├── auth.js
│   └── errorHandler.js
├── routes/
│   ├── auth.js         ← login, register
│   └── projects.js     ← CRUD for projects
└── models/
    ├── user.js
    └── project.js
```

## How this connects to your goal

After this exercise, you can show an interviewer:
- "Here's a Node/Express API I built from scratch"
- "It has environment config, auth middleware, SQL database"
- "The React frontend (from 01-React-fundation) calls this API"

That's a portfolio-ready story.

## Key principles to keep in mind
- `app.js` creates and configures Express but does NOT listen. Tests can import it without starting a server.
- `config.js` validates all env vars at startup. If something's missing, the server fails loudly before accepting traffic.
- Every route handler is wrapped in asyncHandler — no unhandled promise rejections.
- The error handler is the last middleware registered and handles all errors consistently.

---

Go to `simple.js` when ready.
