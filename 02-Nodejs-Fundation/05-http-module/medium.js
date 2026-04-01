// 05 — HTTP Module — Medium
// Goal: build a mini REST API with raw http (no Express)
// Run with: node medium.js
// Test with curl:
//   curl http://localhost:3000/api/users
//   curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"Gian","email":"g@test.com"}'
//   curl http://localhost:3000/api/users/1
//   curl -X DELETE http://localhost:3000/api/users/1

const http = require('http')

const PORT = 3000

// In-memory data store — pretend this is a database
let users = []
let nextId = 1

// ─────────────────────────────────────────────
// Helpers — implement these first

// parseBody(req) — reads the request body stream and returns a parsed JSON object
// Returns a Promise that resolves to the parsed body.
// If body is empty or invalid JSON, resolve with null (don't throw).
function parseBody(req) {
  // your code here
}

// sendJSON(res, statusCode, data) — sends a JSON response
function sendJSON(res, statusCode, data) {
  // your code here
}

// getIdFromUrl(url) — extracts the id from '/api/users/42'
// Returns the number 42, or null if there's no id segment.
function getIdFromUrl(url) {
  // your code here
}


// ─────────────────────────────────────────────
// Route handlers — implement each one

// GET /api/users → return all users
function handleGetUsers(req, res) {
  // your code here
}

// GET /api/users/:id → return one user or 404
function handleGetUser(req, res, id) {
  // your code here
}

// POST /api/users → create a new user
// Body: { name, email }
// Validate: name and email must be non-empty strings
// Returns 201 with the created user, or 400 with an error message
async function handleCreateUser(req, res) {
  // your code here
}

// DELETE /api/users/:id → remove a user
// Returns 204 if deleted, 404 if not found
function handleDeleteUser(req, res, id) {
  // your code here
}


// ─────────────────────────────────────────────
// Router — wire the routes together

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  console.log(`[${new Date().toISOString()}] ${method} ${url}`)

  // Route: /api/users (collection)
  if (url === '/api/users') {
    if (method === 'GET') return handleGetUsers(req, res)
    if (method === 'POST') return handleCreateUser(req, res)
    return sendJSON(res, 405, { error: 'Method not allowed' })
  }

  // Route: /api/users/:id (single resource)
  if (url.startsWith('/api/users/')) {
    const id = getIdFromUrl(url)
    if (!id) return sendJSON(res, 400, { error: 'Invalid id' })

    if (method === 'GET') return handleGetUser(req, res, id)
    if (method === 'DELETE') return handleDeleteUser(req, res, id)
    return sendJSON(res, 405, { error: 'Method not allowed' })
  }

  // Fallthrough
  sendJSON(res, 404, { error: 'Not found' })
})

server.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`)
})
