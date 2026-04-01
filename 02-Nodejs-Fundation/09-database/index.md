# 09 — Database (SQLite)

## Why SQLite for learning?

SQLite is a real SQL database that lives in a single file. No server to install, no Docker, no config. Just `npm install better-sqlite3` and you have a full relational database running in your Node process.

What you learn here transfers directly to PostgreSQL and MySQL — the SQL is the same.

```bash
npm install better-sqlite3
```

## Connecting and creating tables

```js
const Database = require('better-sqlite3')

const db = new Database('./app.db')  // creates file if it doesn't exist

// Create a table
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    name  TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role  TEXT NOT NULL DEFAULT 'user',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`)
```

## better-sqlite3 API — synchronous (unlike most DB libraries)

```js
// INSERT
const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)')
const result = stmt.run('Gian', 'g@example.com')
console.log(result.lastInsertRowid)  // the new id

// SELECT one
const user = db.prepare('SELECT * FROM users WHERE id = ?').get(42)
// Returns the object, or undefined if not found

// SELECT many
const users = db.prepare('SELECT * FROM users WHERE role = ?').all('admin')
// Returns an array (empty array if no results)

// UPDATE / DELETE
const updated = db.prepare('UPDATE users SET name = ? WHERE id = ?').run('New Name', 42)
console.log(updated.changes)  // number of rows affected (0 means id not found)
```

## Transactions

Multiple operations that must succeed or fail together:

```js
const transfer = db.transaction((fromId, toId, amount) => {
  db.prepare('UPDATE accounts SET balance = balance - ? WHERE id = ?').run(amount, fromId)
  db.prepare('UPDATE accounts SET balance = balance + ? WHERE id = ?').run(amount, toId)
})

transfer(1, 2, 100)  // both updates succeed or both fail
```

## SQL you need to know

```sql
-- Filter
SELECT * FROM users WHERE role = 'admin' AND created_at > '2024-01-01'

-- Sort and limit
SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 20

-- Join (get user with their posts)
SELECT u.id, u.name, p.title
FROM users u
JOIN posts p ON p.author_id = u.id
WHERE u.id = 1

-- Count
SELECT COUNT(*) as total FROM users
SELECT role, COUNT(*) as count FROM users GROUP BY role
```

## Key questions to answer before coding
- What does `AUTOINCREMENT` do? What does it guarantee?
- What does `NOT NULL` do? What about `UNIQUE`?
- What is a prepared statement and why is it safer than string concatenation?
- What is a transaction and why do you need one for a bank transfer?

---

Go to `simple.js` when ready.
