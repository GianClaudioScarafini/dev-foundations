// 06 — Express Basics — Simple
// Goal: get comfortable with Express routing and req/res
// Run with: node simple.js
// Test with curl or your browser

const express = require('express')
const app = express()

app.use(express.json())

const PORT = 3000

// Sample data — treat this as your "database"
const books = [
  { id: 1, title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', year: 1999 },
  { id: 2, title: 'Clean Code', author: 'Robert Martin', year: 2008 },
  { id: 3, title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: 2015 },
]


// ─────────────────────────────────────────────
// 1. Basic routes
//    GET /          → { message: "Book API v1" }
//    GET /health    → { status: "ok", timestamp: <ISO string> }
//
//    Test: curl http://localhost:3000/
//          curl http://localhost:3000/health

// your code here


// ─────────────────────────────────────────────
// 2. Collection route
//    GET /books → return all books as JSON
//    GET /books?author=Kyle+Simpson → return only books where author matches
//    (case-insensitive partial match)
//
//    Test: curl "http://localhost:3000/books"
//          curl "http://localhost:3000/books?author=robert"

// your code here


// ─────────────────────────────────────────────
// 3. Single resource route
//    GET /books/:id → return the book with matching id, or 404
//    The id in req.params.id is a STRING — remember to convert it.
//
//    Test: curl http://localhost:3000/books/1
//          curl http://localhost:3000/books/99

// your code here


// ─────────────────────────────────────────────
// 4. Create a resource
//    POST /books
//    Body: { title, author, year }
//    Validate: title and author must be non-empty strings
//    If invalid: 400 with { error: "title and author are required" }
//    If valid: assign a new id (max existing id + 1), push to books, return 201 + new book
//
//    Test: curl -X POST http://localhost:3000/books \
//           -H "Content-Type: application/json" \
//           -d '{"title":"Node.js Design Patterns","author":"Casciaro","year":2020}'

// your code here


// ─────────────────────────────────────────────
// 5. Catch-all 404
//    Any route not matched above should return:
//    404, { error: "Route not found", path: req.path, method: req.method }

// your code here


app.listen(PORT, () => {
  console.log(`Book API running at http://localhost:${PORT}`)
})
