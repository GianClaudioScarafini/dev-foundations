// 03 — File System — Medium
// Goal: build a JSON-based data store using the file system
// Run with: node medium.js

const fs = require('fs/promises')
const path = require('path')

const DB_FILE = path.join(__dirname, 'db.json')

// ─────────────────────────────────────────────
// You are building a simple JSON file database.
// Think of db.json as your database — a JSON object where keys are
// collection names and values are arrays of records.
//
// Initial structure: { "users": [], "posts": [] }

// ─────────────────────────────────────────────
// 1. Implement readDB() and writeDB(data)
//    readDB() — reads db.json and returns the parsed object.
//               If the file doesn't exist, create it with the initial structure
//               and return that structure. Do NOT throw.
//    writeDB(data) — writes the object back to db.json as formatted JSON
//                    (use JSON.stringify with 2-space indentation)

async function readDB() {
  // your code here
}

async function writeDB(data) {
  // your code here
}


// ─────────────────────────────────────────────
// 2. Implement insert(collection, record)
//    Reads the DB, pushes the record into db[collection] (create array if missing),
//    adds an auto-incremented 'id' field to the record,
//    writes the DB back, and returns the record with its new id.

async function insert(collection, record) {
  // your code here
}


// ─────────────────────────────────────────────
// 3. Implement findAll(collection) and findById(collection, id)
//    findAll — returns all records in the collection (empty array if none)
//    findById — returns the record with matching id, or null if not found

async function findAll(collection) {
  // your code here
}

async function findById(collection, id) {
  // your code here
}


// ─────────────────────────────────────────────
// 4. Implement deleteById(collection, id)
//    Removes the record with matching id from the collection.
//    Returns true if something was deleted, false if id wasn't found.

async function deleteById(collection, id) {
  // your code here
}


// ─────────────────────────────────────────────
// 5. Wire it all together
//    - Insert 3 users: { name, email }
//    - Insert 2 posts: { title, body, authorId }
//    - Find and log user with id 2
//    - Delete user with id 1
//    - Log all remaining users
//    - Log all posts

async function main() {
  // your code here
}

main().catch(console.error)
