// 07 — REST API Design — Medium
// Goal: build a complete CRUD REST API with nested resources
// Run with: node medium.js

const express = require('express')
const app = express()
app.use(express.json())

// ─────────────────────────────────────────────
// Context: a simple blog API with users and their posts.
//
// Data:
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' },
]
let posts = [
  { id: 1, title: 'Getting started with Node', body: 'Node is great...', authorId: 1, published: true, createdAt: '2024-01-10T10:00:00Z' },
  { id: 2, title: 'REST API tips', body: 'Use nouns, not verbs...', authorId: 1, published: true, createdAt: '2024-01-12T10:00:00Z' },
  { id: 3, title: 'Draft post', body: 'Work in progress...', authorId: 2, published: false, createdAt: '2024-01-15T10:00:00Z' },
]
let nextUserId = 3
let nextPostId = 4

// ─────────────────────────────────────────────
// Users resource: /api/users

// GET /api/users
// Supports: ?role=admin|user
// Response: array of users (omit email from list view for privacy)
// Each user should include a postCount (how many posts they've published)

// GET /api/users/:id
// Response: full user object including their published posts
// { id, name, email, role, posts: [...] }

// POST /api/users
// Body: { name, email, role }
// Validate: name required, email required + must look like an email, role optional default 'user'
// 409 if email already exists

// PUT /api/users/:id
// Replace the full user (all fields required in body)
// Return 404 if not found

// PATCH /api/users/:id
// Update only the provided fields (name, email, role)
// Return 404 if not found
// 409 if updating email to one that already exists

// DELETE /api/users/:id
// Also delete all their posts (cascade delete)
// Return 204

// your code here


// ─────────────────────────────────────────────
// Posts resource: /api/posts AND /api/users/:id/posts

// GET /api/posts
// Returns only published posts
// Supports: ?authorId=1

// GET /api/posts/:id
// Returns the post including author info (embed author object, not just id)

// POST /api/posts
// Body: { title, body, authorId, published }
// Validate: title required, body required, authorId must match an existing user
// Return 201

// PATCH /api/posts/:id
// Update title, body, or published status
// Return 404 if not found

// DELETE /api/posts/:id
// Return 204

// GET /api/users/:id/posts
// Returns all posts by this user (including unpublished)
// Return 404 if user doesn't exist

// POST /api/users/:id/posts
// Create a post for this user — no need for authorId in body, use the URL param
// Return 404 if user doesn't exist

// your code here


app.listen(3000, () => {
  console.log('Blog API running on :3000')
  console.log('\nEndpoints to test:')
  console.log('  GET    /api/users')
  console.log('  GET    /api/users/1')
  console.log('  POST   /api/users')
  console.log('  GET    /api/posts')
  console.log('  GET    /api/users/1/posts')
  console.log('  POST   /api/users/1/posts')
})
