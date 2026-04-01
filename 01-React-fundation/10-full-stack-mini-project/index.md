# 10 — Full Stack Mini Project

## What you are building
A Job Board app with a React frontend and a Node/Express backend.
This is the kind of project you show in an interview.

---

## Stack
- **Frontend**: React + React Router + Context API
- **Backend**: Node.js + Express
- **Database**: JSON file (no DB setup needed — you'll do real DB in the Node track)
- **Communication**: REST API with fetch

---

## Project structure

```
10-full-stack-mini-project/
├── client/          ← React app (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── context/
├── server/          ← Express API
│   ├── server.js
│   ├── routes/
│   └── data/
│       └── jobs.json
└── README.md
```

---

## Build order

### Phase 1 — Backend (Node/Express)
1. Set up Express server on port 3001
2. Enable CORS for localhost:5173 (Vite dev server)
3. Implement these endpoints:

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/jobs | Return all jobs |
| GET | /api/jobs/:id | Return one job |
| POST | /api/jobs | Create a job |
| DELETE | /api/jobs/:id | Delete a job |
| POST | /api/applications | Submit an application |
| GET | /api/applications | Return all applications |

4. Persist data to `data/jobs.json` (read/write file with `fs`)

### Phase 2 — Frontend (React)
Use everything from exercises 01–09.

Pages:
- `/` — Job list with search and filter
- `/jobs/:id` — Job detail with Apply button
- `/apply/:id` — Application form (protected)
- `/login` — Fake auth
- `/dashboard` — Admin view: list all jobs, delete jobs, view applications

### Phase 3 — Connect them
Replace all hardcoded data with real fetch calls to your Express API.
Use your `useFetch` hook from exercise 07.

---

## Stretch goals (do these if you want a standout portfolio piece)
- Add real authentication with JWT (Node track)
- Deploy the backend to Railway or Render
- Deploy the frontend to Vercel
- Replace the JSON file with a real PostgreSQL database

---

## What to show in an interview
- Walk through the component tree and explain your state decisions
- Explain why you used Context for auth but not for job data
- Explain the protected route pattern
- Show the API and explain REST conventions
- Talk about what you'd improve with more time

---

Go to `server/server.js` to start the backend.
