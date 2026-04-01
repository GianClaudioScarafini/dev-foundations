# 08 — Middleware

## What is middleware?

Middleware is a function that runs between the request arriving and your route handler running. Every piece of `app.use()` in Express is middleware.

```js
// A middleware function always has this signature:
function myMiddleware(req, res, next) {
  // do something with req or res
  next()   // must call next() to pass to the next middleware/route
           // if you don't call next(), the request hangs forever
}
```

## The middleware chain

```
Request → middleware1 → middleware2 → route handler → Response
                                ↑
                        if error: skip to error handler
```

```js
app.use(loggerMiddleware)    // runs on every request
app.use(authMiddleware)      // runs on every request after logger
app.get('/users', handler)   // only runs on GET /users
```

## Common middleware patterns

```js
// 1. Global — runs on every request
app.use(express.json())
app.use(cors())

// 2. Route-specific — runs on one route
app.get('/admin', requireAdmin, handleAdmin)

// 3. Router-level — runs on all routes under a prefix
router.use(authenticate)
router.get('/', handler)

// 4. Error-handling — 4 parameters, must be defined LAST
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message })
})
```

## Writing your own middleware

```js
// Request logger
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`)
  next()
}

// Attach request ID
function requestId(req, res, next) {
  req.id = Math.random().toString(36).slice(2)
  next()
}

// Simple auth check
function requireAuth(req, res, next) {
  const token = req.headers['x-api-key']
  if (token === process.env.API_KEY) {
    next()
  } else {
    res.status(401).json({ error: 'Unauthorized' })
    // no next() — we're ending the request here
  }
}
```

## Error middleware

```js
// In route handlers, pass errors to next():
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await db.findUser(req.params.id)
    res.json(user)
  } catch (err) {
    next(err)  // skips all normal middleware and goes to error handler
  }
})

// Error handler — must be the LAST middleware registered
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Something went wrong'
  })
})
```

## Key questions to answer before coding
- What happens if you forget to call `next()` in a middleware?
- What is the difference between `app.use()` and `app.get()`?
- Why must error-handling middleware have exactly four parameters?
- What does passing an argument to `next(err)` do?

---

Go to `simple.js` when ready.
