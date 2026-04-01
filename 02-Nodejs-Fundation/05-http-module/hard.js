// 05 — HTTP Module — Hard
// Goal: build a router class that mirrors how Express works internally
// Run with: node hard.js

// ─────────────────────────────────────────────
// Challenge: Build a micro-framework
//
// No starter code. You design the solution.
//
// Express is just a layer on top of http.createServer. Build a simplified version.
//
// Requirements:
//
// 1. Build a Router class with these methods:
//    router.get(path, handler)
//    router.post(path, handler)
//    router.put(path, handler)
//    router.delete(path, handler)
//
//    Each handler receives (req, res) — just like Express.
//
// 2. Support path parameters:
//    router.get('/users/:id', (req, res) => {
//      console.log(req.params.id)  // "42" from GET /users/42
//    })
//
//    req.params must be populated by your router before calling the handler.
//    You'll need to match dynamic segments like :id, :name, :slug.
//
// 3. Support query strings:
//    req.query must be an object parsed from the URL.
//    GET /users?page=2&limit=10  → req.query = { page: '2', limit: '10' }
//    Use the built-in 'url' module or URL constructor.
//
// 4. Support JSON body parsing:
//    Middleware: if Content-Type is application/json, parse the body and
//    attach it to req.body before the route handler runs.
//
// 5. Build a createServer(router) function that returns an http.Server.
//    Wire the router's dispatch method into http.createServer.
//
// 6. Test your mini-framework with these routes:
//    GET  /                          → { message: "Welcome" }
//    GET  /users                     → list of users (in-memory array)
//    GET  /users/:id                 → single user or 404
//    POST /users                     → create user from req.body
//    PUT  /users/:id                 → update user name/email
//    DELETE /users/:id               → delete user
//    GET  /users?role=admin          → filter users by role
//
// When you're done, ask yourself:
// - How does Express's middleware chain work compared to what you built?
// - What would you need to add to support nested routers?
// - Why does Express separate routing logic from http.createServer?
// - What is a 405 Method Not Allowed vs a 404 Not Found? When do you use each?

const http = require('http')
const { URL } = require('url')

// your code here
