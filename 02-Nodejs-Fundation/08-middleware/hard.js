// 08 — Middleware — Hard
// Goal: build a middleware pipeline that mirrors real production architecture

// ─────────────────────────────────────────────
// Challenge: Production middleware stack
//
// No starter code. You design the solution.
//
// Build a complete middleware system for a real API. Every piece here
// exists in production Node APIs.
//
// Requirements:
//
// 1. cors middleware
//    Write your own CORS middleware (don't install the cors package).
//    Read an ALLOWED_ORIGINS env var (comma-separated string).
//    For each request:
//    - If Origin header matches an allowed origin, set:
//        Access-Control-Allow-Origin: <that origin>
//        Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE
//        Access-Control-Allow-Headers: Content-Type,Authorization
//    - If Origin is not in the list: still call next() but don't set headers
//    - Handle preflight OPTIONS requests: respond 204 immediately with headers
//
// 2. JWT auth middleware
//    Write requireAuth(req, res, next):
//    - Reads Authorization header: "Bearer <token>"
//    - Validates the token by base64-decoding the payload (no real JWT lib needed)
//      The token format is: base64(JSON.stringify({ userId, role, exp }))
//      exp is a Unix timestamp. If expired, return 401.
//    - Attaches req.user = { userId, role } and calls next()
//    - If missing or invalid: 401 with { error: 'Authentication required' }
//
//    Write requireRole(role) — a middleware factory:
//    requireRole('admin') returns middleware that checks req.user.role
//    If role doesn't match: 403 with { error: 'Insufficient permissions' }
//
//    Helper to generate test tokens for your testing:
//    function makeToken(userId, role, expiresInSeconds) {
//      const payload = { userId, role, exp: Math.floor(Date.now() / 1000) + expiresInSeconds }
//      return Buffer.from(JSON.stringify(payload)).toString('base64')
//    }
//
// 3. Request context middleware
//    Attach a context object to every request:
//    req.ctx = {
//      requestId: uuid,
//      startTime: Date.now(),
//      user: null,  // filled in by auth middleware
//      log: (msg) => console.log(`[${requestId}] ${msg}`)
//    }
//    Routes and other middleware should use req.ctx.log() for logging.
//
// 4. Response time header
//    After response is sent, add header:
//    X-Response-Time: 14ms
//    Tip: use res.on('finish', ...) — same as logger exercise
//
// 5. Circuit breaker middleware
//    This one is hard — it's a real production pattern.
//    Write circuitBreaker({ threshold, timeout }) middleware factory:
//    - threshold: number of consecutive errors before opening the circuit
//    - timeout: ms to wait before trying again (half-open state)
//
//    States:
//    - closed: normal, requests pass through
//    - open: immediately respond 503 { error: 'Service unavailable' }
//    - half-open: let ONE request through to test if things are better
//
//    Track errors by calling next() and listening for response status >= 500.
//    If errors reach threshold: open the circuit, start timeout.
//    After timeout: try half-open.
//
// 6. Wire it all up:
//    Protected routes under /api/v1 require auth.
//    Admin routes under /api/v1/admin require role 'admin'.
//    Build 3-4 test routes to demo each middleware working.
//    Generate test tokens with makeToken() and include them in your test commands.
//
// When you're done, ask yourself:
// - In the JWT middleware, what attack does checking `exp` prevent?
// - Why does the circuit breaker need a half-open state?
// - What is the difference between authentication and authorisation?
// - How would you unit test individual middleware functions in isolation?

require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

// your code here

app.listen(PORT, () => console.log(`API running on :${PORT}`))
