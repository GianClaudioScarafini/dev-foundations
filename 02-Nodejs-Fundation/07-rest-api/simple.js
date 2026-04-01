// 07 — REST API Design — Simple
// Goal: design correct URLs and return correct status codes
// Run with: node simple.js
// This is partly a design exercise — answer the questions in comments.

const express = require('express')
const app = express()
app.use(express.json())

// ─────────────────────────────────────────────
// 1. URL design quiz — write the correct REST URL for each action.
//    Write your answers as comments.
//
//    a) Get a list of all products
//       → GET
//
//    b) Get a specific product with id 5
//       → GET
//
//    c) Create a new product
//       → POST
//
//    d) Update the name and price of product 5
//       → PATCH
//
//    e) Delete product 5
//       → DELETE
//
//    f) Get all reviews for product 5
//       → GET
//
//    g) Add a review to product 5
//       → POST
//
//    h) Get all orders for user 12
//       → GET


// ─────────────────────────────────────────────
// 2. Status code quiz — what status code should each response use?
//    Write your answer and a one-line reason.
//
//    a) GET /users/99 — user doesn't exist
//       → status
//
//    b) POST /users — body is missing required 'email' field
//       → status
//
//    c) POST /users — email already exists in the database
//       → status
//
//    d) DELETE /users/5 — successfully deleted
//       → status
//
//    e) PUT /users/5 — successfully updated
//       → status
//
//    f) POST /users — user created successfully
//       → status
//
//    g) GET /users — fetched list successfully
//       → status
//
//    h) DELETE /users/5 — user is not logged in
//       → status
//
//    i) DELETE /users/5 — user is logged in but is not an admin
//       → status


// ─────────────────────────────────────────────
// 3. Build a products API with correct status codes
//
//    Data:
const products = [
  { id: 1, name: 'Laptop', price: 999, stock: 5, category: 'electronics' },
  { id: 2, name: 'Desk Chair', price: 299, stock: 12, category: 'furniture' },
  { id: 3, name: 'Notebook', price: 4, stock: 100, category: 'stationery' },
]
let nextId = 4

//    Implement:
//    GET    /products           → 200, all products (support ?category= filter)
//    GET    /products/:id       → 200 with product OR 404 with error object
//    POST   /products           → 201 with new product OR 400 with validation errors
//                                 Required: name (string), price (positive number), stock (integer >= 0)
//    PATCH  /products/:id       → 200 with updated product OR 404 OR 400
//                                 Only update fields that are present in the body
//    DELETE /products/:id       → 204 with no body OR 404

// your code here


// ─────────────────────────────────────────────
// 4. Consistent error format
//    All error responses in this API must use this exact format:
//    { "error": "message", "details": [...] }
//    For validation errors, details is an array of { field, message } objects.
//    For 404, details is an empty array.
//
//    Write a helper: sendError(res, status, message, details = [])
//    Then use it in all your error responses above.

// your helper here


app.listen(3000, () => console.log('Products API running on :3000'))
