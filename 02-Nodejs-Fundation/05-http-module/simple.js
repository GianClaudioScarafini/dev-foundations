// 05 — HTTP Module — Simple
// Goal: create a basic HTTP server and handle routes
// Run with: node simple.js
// Test with: curl http://localhost:3000/
//            curl http://localhost:3000/about
//            curl http://localhost:3000/missing

const http = require('http')

const PORT = 3000

// ─────────────────────────────────────────────
// 1. Create a server that handles these routes:
//    GET /         → 200, "Welcome to my server"
//    GET /about    → 200, "About page — Node.js HTTP server"
//    GET /health   → 200, JSON: { status: "ok", uptime: process.uptime() }
//    anything else → 404, "404 — Page not found"
//
//    Set the correct Content-Type header for each response.
//    For JSON responses use: 'application/json'
//    For text responses use: 'text/plain'

const server = http.createServer((req, res) => {
  // your code here
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log('Test with:')
  console.log(`  curl http://localhost:${PORT}/`)
  console.log(`  curl http://localhost:${PORT}/about`)
  console.log(`  curl http://localhost:${PORT}/health`)
  console.log(`  curl http://localhost:${PORT}/missing`)
})


// ─────────────────────────────────────────────
// 2. After your server is working, add a helper function:
//
//    sendJSON(res, statusCode, data)
//      - sets Content-Type to application/json
//      - sets the status code
//      - sends JSON.stringify(data) as the body
//
//    sendText(res, statusCode, text)
//      - sets Content-Type to text/plain
//      - sets the status code
//      - sends the text
//
//    Refactor your routes to use these helpers.
//    This is exactly the pattern Express builds on.

// your helper functions here


// ─────────────────────────────────────────────
// 3. Log every request
//    Before routing, log this line for every incoming request:
//    "[2024-01-15T10:30:00.000Z] GET /about"
//    Use req.method, req.url, and new Date().toISOString()

// your code here (add it inside the server callback)
