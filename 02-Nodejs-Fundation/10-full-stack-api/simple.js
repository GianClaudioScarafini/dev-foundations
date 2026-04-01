// 10 — Full-Stack API — Simple
// Goal: connect all the pieces you've built into one working API
// Run with: node simple.js
//
// This is a guided assembly exercise.
// You already know all the pieces — now wire them together.

// ─────────────────────────────────────────────
// Setup: install everything you need
//   npm install express dotenv better-sqlite3

// ─────────────────────────────────────────────
// Task: Build a Notes API
//
// A simple REST API for personal notes.
// No auth required — keep it simple.
//
// Data model:
//   notes: id, title, body, pinned (0|1 default 0), created_at, updated_at
//
// Endpoints:
//   GET    /api/notes              → all notes, pinned ones first, then by updated_at DESC
//   GET    /api/notes/:id          → single note or 404
//   POST   /api/notes              → create note (title required, body optional, pinned optional)
//   PATCH  /api/notes/:id          → update title/body/pinned (any combination)
//   DELETE /api/notes/:id          → delete note, 204
//   PATCH  /api/notes/:id/pin      → toggle pinned status, return updated note
//
// Requirements:
//   1. Use dotenv — load PORT from .env (default 3000)
//   2. Use SQLite via better-sqlite3 — store in notes.db
//   3. Use asyncHandler to wrap route handlers
//   4. Add a request logger (method + url + status + ms)
//   5. Add a global error handler as the last middleware
//   6. Validate POST body — title must be a non-empty string
//   7. updated_at should be updated on every PATCH
//
// Structure this file however you want — all in one file is fine for simple.
// The key is that it should run and all endpoints should work.

require('dotenv').config()
const express = require('express')
const Database = require('better-sqlite3')

const app = express()
app.use(express.json())

const PORT = parseInt(process.env.PORT, 10) || 3000
const db = new Database('./notes.db')

// ─────────────────────────────────────────────
// Database setup

// your schema here


// ─────────────────────────────────────────────
// Middleware

// your logger here
// your asyncHandler here


// ─────────────────────────────────────────────
// Routes

// your routes here


// ─────────────────────────────────────────────
// Error handler (last)

app.use((err, req, res, next) => {
  // your code here
})


// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Notes API running at http://localhost:${PORT}`)
  console.log('\nEndpoints:')
  console.log('  GET    /api/notes')
  console.log('  POST   /api/notes')
  console.log('  GET    /api/notes/:id')
  console.log('  PATCH  /api/notes/:id')
  console.log('  DELETE /api/notes/:id')
  console.log('  PATCH  /api/notes/:id/pin')
})
