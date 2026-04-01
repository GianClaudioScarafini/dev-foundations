// 08 — TypeScript with Node/Express — Simple
// Run with: npx ts-node simple.ts
// Requires: npm install express && npm install -D @types/express @types/node

import express, { Request, Response, NextFunction } from 'express'

const app = express()
app.use(express.json())

// ─────────────────────────────────────────────
// 1. Type every route handler below.
//    Currently they use implicit 'any' from untyped params.
//    Add proper Request/Response types. Fix any TypeScript errors.

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert Martin', year: 2008 },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', year: 1999 },
]

// Fix this — req and res are implicitly any
app.get('/books', (req, res) => {
  const { author } = req.query
  if (author && typeof author === 'string') {
    res.json(books.filter(b => b.author.toLowerCase().includes(author.toLowerCase())))
  } else {
    res.json(books)
  }
})

// Fix this — add types for params
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id, 10))
  if (!book) return res.status(404).json({ error: 'Not found' })
  res.json(book)
})

// Fix this — type the request body
app.post('/books', (req, res) => {
  const { title, author, year } = req.body
  if (!title || !author) return res.status(400).json({ error: 'title and author required' })
  const book = { id: books.length + 1, title, author, year: year ?? new Date().getFullYear() }
  books.push(book)
  res.status(201).json(book)
})


// ─────────────────────────────────────────────
// 2. Type custom middleware
//    Add requestId to every request.
//    Then use it in a route.
//
//    Step 1: Extend the Express Request type using module augmentation:
//    declare global {
//      namespace Express {
//        interface Request {
//          requestId: string
//        }
//      }
//    }
//
//    Step 2: Write the middleware
//    Step 3: Use req.requestId in a route — TypeScript should autocomplete it

// your code here


// ─────────────────────────────────────────────
// 3. Typed error handler
//    Define a custom error class:
//    class AppError extends Error {
//      constructor(public message: string, public status: number) { super(message) }
//    }
//
//    Write a typed error handler middleware (4 params).
//    If err is an AppError, use err.status.
//    Otherwise use 500.
//    Always return { error: string, requestId: string }

class AppError extends Error {
  constructor(public override message: string, public status: number) {
    super(message)
    this.name = 'AppError'
  }
}

app.get('/crash', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError('Intentional error', 400))
})

// your error handler here


app.listen(3000, () => console.log('Running on :3000'))
