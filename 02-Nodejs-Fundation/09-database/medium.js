// 09 — Database — Medium
// Goal: relational data, joins, and transactions
// Run with: node medium.js

const Database = require('better-sqlite3')
const db = new Database('./medium.db')

// ─────────────────────────────────────────────
// 1. Schema — two related tables
//    Create users and posts tables.
//    posts.author_id is a FOREIGN KEY referencing users.id
//    PRAGMA foreign_keys = ON must be set to enforce FK constraints in SQLite.

db.pragma('foreign_keys = ON')

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT NOT NULL,
    email      TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  -- your posts table here
  -- columns: id, title, body, author_id (FK), published (0 or 1, default 0), created_at
`)


// ─────────────────────────────────────────────
// 2. Seed data
//    Write a seedDatabase() function that:
//    - Clears both tables first (DELETE FROM posts; DELETE FROM users;)
//    - Resets autoincrement (DELETE FROM sqlite_sequence WHERE name IN ('users','posts'))
//    - Inserts 3 users
//    - Inserts 5 posts across those users (mix of published and unpublished)
//    Wrap everything in a transaction — all or nothing.

function seedDatabase() {
  // your code here
}

seedDatabase()


// ─────────────────────────────────────────────
// 3. JOIN queries
//    getPostsWithAuthors() → all posts with author name embedded
//    Result shape: { id, title, published, author_name, author_email }
//
//    getPublishedPostsWithAuthors() → same but only published posts
//    Ordered by created_at DESC

function getPostsWithAuthors() {
  // your code here
}

function getPublishedPostsWithAuthors() {
  // your code here
}

console.log('All posts with authors:')
console.log(getPostsWithAuthors())

console.log('\nPublished posts:')
console.log(getPublishedPostsWithAuthors())


// ─────────────────────────────────────────────
// 4. Aggregate queries
//    getUserStats() → stats per user
//    Result: array of { name, total_posts, published_posts, draft_posts }
//    Hint: GROUP BY with COUNT and SUM or CASE

function getUserStats() {
  // your code here
}

console.log('\nUser stats:')
console.log(getUserStats())


// ─────────────────────────────────────────────
// 5. Transaction: publish all drafts for a user
//    publishAllDrafts(userId) — in a single transaction:
//    - Check the user exists (throw if not)
//    - Set published = 1 for all their draft posts
//    - Return { userId, published: count of posts that were updated }

function publishAllDrafts(userId) {
  // your code here
}

console.log('\nPublish all drafts for user 1:')
console.log(publishAllDrafts(1))

console.log('\nAll posts after publish:')
console.log(getPostsWithAuthors())


// ─────────────────────────────────────────────
// 6. Pagination
//    getPaginatedPosts(page, limit) → paginated published posts
//    Returns: { data: [...posts], meta: { page, limit, total, pages } }
//    Posts should include author name.

function getPaginatedPosts(page = 1, limit = 2) {
  // your code here
}

console.log('\nPaginated posts (page 1, limit 2):')
console.log(getPaginatedPosts(1, 2))
