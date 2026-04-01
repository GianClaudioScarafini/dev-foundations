// 09 — Database — Simple
// Goal: create tables, insert, read, update, delete with SQLite
// Run with: node simple.js
// This will create a file called simple.db

const Database = require('better-sqlite3')

const db = new Database('./simple.db')

// ─────────────────────────────────────────────
// 1. Create the users table
//    Columns: id (PK autoincrement), name (NOT NULL), email (NOT NULL UNIQUE),
//             role (default 'user'), created_at (default current datetime)
//    Use CREATE TABLE IF NOT EXISTS so you can re-run this file safely.

db.exec(`
  -- your SQL here
`)


// ─────────────────────────────────────────────
// 2. Insert users
//    Write a createUser(name, email, role) function.
//    Use a prepared statement.
//    Return the newly created user (run + then get by lastInsertRowid).
//    If email already exists, catch the error and return null.

function createUser(name, email, role = 'user') {
  // your code here
}

const u1 = createUser('Alice', 'alice@example.com', 'admin')
const u2 = createUser('Bob', 'bob@example.com')
const u3 = createUser('Charlie', 'charlie@example.com')
const duplicate = createUser('Alice2', 'alice@example.com')  // duplicate email

console.log('Created users:', u1, u2, u3)
console.log('Duplicate result:', duplicate)  // should be null


// ─────────────────────────────────────────────
// 3. Read users
//    getAllUsers() → array of all users, ordered by created_at DESC
//    getUserById(id) → user object or null
//    getUserByEmail(email) → user object or null

function getAllUsers() {
  // your code here
}

function getUserById(id) {
  // your code here
}

function getUserByEmail(email) {
  // your code here
}

console.log('\nAll users:', getAllUsers())
console.log('User by id 1:', getUserById(1))
console.log('User by email:', getUserByEmail('bob@example.com'))
console.log('Missing user:', getUserById(999))


// ─────────────────────────────────────────────
// 4. Update a user
//    updateUser(id, changes) — changes is { name?, email?, role? }
//    Only update the fields that are provided.
//    Return the updated user, or null if id not found.
//
//    Tip: build the SQL query dynamically based on which fields are in changes.
//    Do NOT use string interpolation for user values — use prepared statements.

function updateUser(id, changes) {
  // your code here
}

console.log('\nUpdated user:', updateUser(2, { name: 'Robert', role: 'admin' }))
console.log('Missing update:', updateUser(999, { name: 'Ghost' }))


// ─────────────────────────────────────────────
// 5. Delete a user
//    deleteUser(id) → returns true if deleted, false if not found

function deleteUser(id) {
  // your code here
}

console.log('\nDelete user 3:', deleteUser(3))
console.log('Delete missing:', deleteUser(999))
console.log('All users after delete:', getAllUsers())
