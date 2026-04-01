# 06 — Express Basics

## What Express adds

Express wraps Node's `http` module and gives you:
- Clean routing syntax
- Automatic body parsing (with middleware)
- `req.params`, `req.query`, `req.body` ready to use
- Middleware chaining
- Error handling conventions

```bash
npm install express
```

## Minimal server

```js
const express = require('express')
const app = express()

app.use(express.json())  // parse JSON bodies — always add this

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(3000, () => console.log('Running on port 3000'))
```

## Sending responses

```js
res.send('text')                    // Content-Type: text/html
res.json({ key: 'value' })          // Content-Type: application/json
res.status(404).json({ error: 'not found' })  // chain status + json
res.sendStatus(204)                 // status with no body (DELETE success)
```

## Reading request data

```js
// Route params — /users/:id
app.get('/users/:id', (req, res) => {
  console.log(req.params.id)   // '42'
})

// Query string — /users?page=2&limit=10
app.get('/users', (req, res) => {
  console.log(req.query.page)   // '2'
  console.log(req.query.limit)  // '10'
})

// Request body — POST/PUT with JSON
app.post('/users', (req, res) => {
  console.log(req.body.name)    // 'Gian'
  console.log(req.body.email)   // 'g@example.com'
})
```

## Router — organising routes

```js
// routes/users.js
const router = require('express').Router()

router.get('/', (req, res) => res.json([]))
router.post('/', (req, res) => res.json({}))
router.get('/:id', (req, res) => res.json({}))

module.exports = router

// app.js
const usersRouter = require('./routes/users')
app.use('/api/users', usersRouter)
// Now: GET /api/users → router's GET /
//      GET /api/users/42 → router's GET /:id
```

## Key questions to answer before coding
- What does `express.json()` do and what happens if you forget it?
- What is the difference between `req.params` and `req.query`?
- What does `res.json()` do differently from `res.send()`?
- Why use an Express Router instead of putting all routes in one file?

---

Go to `simple.js` when ready.
