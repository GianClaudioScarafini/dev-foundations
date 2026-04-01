// 08 — Middleware — Medium
// Goal: build a middleware stack used in real production apps
// Run with: node medium.js

const express = require('express')
const app = express()
app.use(express.json())


// ─────────────────────────────────────────────
// 1. Rate limiter middleware
//    Build a rateLimit({ windowMs, max }) middleware factory.
//    It returns a middleware function that:
//    - Tracks requests per IP address (use req.ip or req.socket.remoteAddress)
//    - Uses an in-memory Map: { ip → { count, resetAt } }
//    - If a client exceeds `max` requests within `windowMs` milliseconds:
//        return 429 with:
//        { error: 'Too many requests', retryAfter: <seconds until reset> }
//    - Otherwise increment the count and call next()
//    - Entries expire after windowMs — reset the count when resetAt passes
//
//    Apply it globally: 10 requests per 30 seconds for testing.
//    Apply it strictly on /auth: 3 requests per 60 seconds.

function rateLimit({ windowMs, max }) {
  // your code here — return a middleware function
}

app.use(rateLimit({ windowMs: 30_000, max: 10 }))


// ─────────────────────────────────────────────
// 2. Request validation middleware factory
//    Build a validate(schema) function that returns middleware.
//    schema is an object where each key is a body field:
//    {
//      name:  { required: true, type: 'string', minLength: 2 },
//      email: { required: true, type: 'string', pattern: /\S+@\S+\.\S+/ },
//      age:   { required: false, type: 'number', min: 0, max: 120 }
//    }
//
//    The middleware should:
//    - Check req.body against the schema
//    - Collect ALL validation errors (not just first)
//    - If errors: respond 400 with { error: 'Validation failed', details: [...] }
//    - If valid: attach req.validatedBody (only the fields in the schema) and call next()

function validate(schema) {
  // your code here — return a middleware function
}


// ─────────────────────────────────────────────
// 3. Async wrapper — the "avoid try/catch everywhere" pattern
//    In Express, async route handlers don't automatically forward errors to next().
//    This breaks your error handler:
//
//    app.get('/users', async (req, res) => {
//      const users = await fetchUsers()  // if this throws, Express won't catch it
//    })
//
//    Write an asyncHandler(fn) wrapper that wraps an async function and
//    catches any thrown errors, forwarding them to next(err):
//
//    app.get('/users', asyncHandler(async (req, res) => {
//      const users = await fetchUsers()  // now errors are handled
//    }))

function asyncHandler(fn) {
  // your code here
}


// ─────────────────────────────────────────────
// 4. Test routes using your middleware

// POST /auth/login — rate limited to 3/min
// Body: { email, password } — validate both as required strings
// For now: if email is 'admin@test.com' and password is 'password123' return 200 + { token: 'fake-jwt' }
// Otherwise return 401

const userSchema = {
  name:  { required: true, type: 'string', minLength: 2 },
  email: { required: true, type: 'string', pattern: /\S+@\S+\.\S+/ },
}

const loginSchema = {
  email:    { required: true, type: 'string' },
  password: { required: true, type: 'string', minLength: 8 },
}

app.post('/auth/login',
  rateLimit({ windowMs: 60_000, max: 3 }),
  validate(loginSchema),
  asyncHandler(async (req, res) => {
    // your code here
  })
)

// POST /users — validate user creation
app.post('/users', validate(userSchema), asyncHandler(async (req, res) => {
  // Simulate an async operation that sometimes fails
  if (Math.random() < 0.3) throw new Error('Database connection lost')
  res.status(201).json({ id: 1, ...req.validatedBody })
}))

// GET /always-fails — test asyncHandler catches async errors
app.get('/always-fails', asyncHandler(async (req, res) => {
  await Promise.reject(new Error('I always fail'))
}))


// ─────────────────────────────────────────────
// 5. Global error handler
//    Must handle:
//    - Validation errors (already responded — shouldn't reach here)
//    - Generic errors → 500
//    - Errors with a .status property → use that status
//    Log: "[ERROR] requestId status message"

app.use((err, req, res, next) => {
  // your code here
})


app.listen(3000, () => {
  console.log('Middleware demo running on :3000')
  console.log('\nTest rate limiter: run this 4x quickly:')
  console.log('  curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d \'{"email":"x@x.com","password":"password123"}\'')
})
