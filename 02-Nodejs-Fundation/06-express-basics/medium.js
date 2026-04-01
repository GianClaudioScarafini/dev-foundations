// 06 — Express Basics — Medium
// Goal: split a real Express app into proper file structure
// Run with: node medium.js

// ─────────────────────────────────────────────
// Context: refactor a mess into a clean Express app with proper routing.
//
// Create this structure alongside this file:
//
//   medium.js          ← entry point (this file)
//   app.js             ← express app setup (no listen call here)
//   routes/
//     users.js         ← user routes
//     posts.js         ← post routes
//   data/
//     users.js         ← in-memory users data + helper functions
//     posts.js         ← in-memory posts data + helper functions

// ─────────────────────────────────────────────
// 1. data/users.js
//    Export:
//    - users array (5 users with id, name, email, role: 'admin'|'user', createdAt)
//    - findAll()          → all users
//    - findById(id)       → user or null
//    - findByRole(role)   → filtered array
//    - create(data)       → new user with auto-id and createdAt, push and return it
//    - update(id, data)   → update name/email, return updated user or null
//    - remove(id)         → remove user, return true or false

// ─────────────────────────────────────────────
// 2. data/posts.js
//    Export:
//    - posts array (5 posts with id, title, body, authorId, published, createdAt)
//    - findAll()              → all posts
//    - findByAuthor(authorId) → posts for a specific user
//    - findPublished()        → only published posts
//    - create(data)           → new post with auto-id
//    - publish(id)            → set published: true, return post or null

// ─────────────────────────────────────────────
// 3. routes/users.js
//    Use express.Router()
//    Implement:
//    GET    /           → all users (support ?role= filter)
//    GET    /:id        → user by id or 404
//    POST   /           → create user (validate name + email)
//    PUT    /:id        → update user (validate at least one field)
//    DELETE /:id        → delete user, 204 on success

// ─────────────────────────────────────────────
// 4. routes/posts.js
//    Use express.Router()
//    Implement:
//    GET    /              → all published posts (unless ?all=true, then all)
//    GET    /:id           → post by id or 404
//    GET    /author/:id    → posts by author id
//    POST   /              → create post (validate title + body + authorId)
//    PUT    /:id/publish   → publish a post

// ─────────────────────────────────────────────
// 5. app.js
//    Create the Express app.
//    Add express.json() middleware.
//    Mount routes:
//      /api/users  → users router
//      /api/posts  → posts router
//    Add a catch-all 404 handler.
//    Export the app (do NOT call app.listen here).

// ─────────────────────────────────────────────
// 6. medium.js (this file)
//    Require app.js and call app.listen(3000).
//    Log startup info.

const app = require('./app')

const PORT = 3000

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`)
  console.log('Endpoints:')
  console.log('  GET  /api/users')
  console.log('  POST /api/users')
  console.log('  GET  /api/users/:id')
  console.log('  GET  /api/posts')
  console.log('  POST /api/posts')
})
