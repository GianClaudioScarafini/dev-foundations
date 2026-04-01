// 08 — Middleware — Simple
// Goal: write and chain custom middleware functions
// Run with: node simple.js

const express = require('express')
const app = express()
app.use(express.json())


// ─────────────────────────────────────────────
// 1. Request logger middleware
//    Write a logger(req, res, next) middleware that logs:
//    "[2024-01-15T10:30:00.000Z] GET /api/users 200 14ms"
//    (method, path, status code, response time in ms)
//
//    Tip: you don't know the status code at request time.
//    Hook into the response using res.on('finish', ...) which fires after the
//    response is sent — by then res.statusCode is set.
//
//    Register it globally with app.use(logger)

function logger(req, res, next) {
  // your code here
}

app.use(logger)


// ─────────────────────────────────────────────
// 2. Request ID middleware
//    Write a requestId(req, res, next) middleware that:
//    - Generates a random ID string (use Math.random().toString(36).slice(2, 10))
//    - Attaches it to req.id
//    - Adds it as a response header: 'X-Request-Id'
//    - Calls next()
//
//    Register it globally. Then update your logger to include it:
//    "[2024-01-15T10:30:00.000Z] [abc123] GET /api/users 200 14ms"

function requestId(req, res, next) {
  // your code here
}

app.use(requestId)


// ─────────────────────────────────────────────
// 3. API key auth middleware
//    Write a requireApiKey(req, res, next) middleware:
//    - Reads header 'x-api-key'
//    - If it equals 'secret-dev-key', call next()
//    - Otherwise return 401: { error: 'Invalid or missing API key' }
//
//    Apply it only to routes that start with /secure

function requireApiKey(req, res, next) {
  // your code here
}


// ─────────────────────────────────────────────
// 4. Test routes
//    GET /public   → { message: "anyone can see this" } — no auth
//    GET /secure/data → { message: "secret data", requestId: req.id } — requires API key
//    GET /secure/admin → { message: "admin panel" } — requires API key
//
//    Test:
//    curl http://localhost:3000/public
//    curl http://localhost:3000/secure/data
//    curl http://localhost:3000/secure/data -H "x-api-key: secret-dev-key"

app.get('/public', (req, res) => {
  // your code here
})

app.use('/secure', requireApiKey)

app.get('/secure/data', (req, res) => {
  // your code here
})

app.get('/secure/admin', (req, res) => {
  // your code here
})


// ─────────────────────────────────────────────
// 5. Error handling middleware
//    Write a global error handler that:
//    - Logs the error to console
//    - Returns: { error: err.message, requestId: req.id }
//    - Uses err.status for the status code, defaults to 500
//
//    Add a test route that intentionally throws:
//    GET /crash → throw new Error('Something exploded')
//    GET /not-found-error → throw an error with status 404

app.get('/crash', (req, res, next) => {
  // your code here — throw an error
})

app.get('/not-found-error', (req, res, next) => {
  // your code here — throw an error with status 404
})

// error handler goes LAST
app.use((err, req, res, next) => {
  // your code here
})


app.listen(3000, () => console.log('Middleware demo running on :3000'))
