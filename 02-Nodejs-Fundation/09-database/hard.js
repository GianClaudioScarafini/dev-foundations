// 09 — Database — Hard
// Goal: build a database layer that your Express API plugs into

// ─────────────────────────────────────────────
// Challenge: Database module for a Job Board API
//
// No starter code. You design the solution.
//
// Build a self-contained database module that an Express API can import.
// This is the "model" layer in MVC architecture.
//
// Requirements:
//
// 1. db/index.js — connection + migrations
//    - Connect to 'jobboard.db'
//    - Set PRAGMA foreign_keys = ON and PRAGMA journal_mode = WAL
//      (WAL mode is better for concurrent reads — look it up)
//    - Run migrations (create tables) on startup
//    - Export the db instance
//
// 2. Schema (run migrations in order — use a migrations table to track which ran):
//
//    companies: id, name, website, location, size (startup|mid|enterprise), created_at
//    jobs: id, title, description, company_id (FK), salary_min, salary_max, currency,
//          location, remote (0|1), status (open|closed), created_at, closed_at
//    tags: id, name (UNIQUE)
//    job_tags: job_id (FK), tag_id (FK), PRIMARY KEY (job_id, tag_id)  ← many-to-many
//
// 3. db/companies.js — company model
//    findAll()               → all companies
//    findById(id)            → company with job count, or null
//    create(data)            → insert + return created company
//    update(id, changes)     → partial update + return updated or null
//    remove(id)              → delete (only if no open jobs), return true/false
//                              Hint: check with a query before deleting
//
// 4. db/jobs.js — job model
//    findAll(filters)        → filtered jobs with company name and tags array embedded
//      filters: { status, companyId, remote, minSalary, tag }
//    findById(id)            → job with full company object and tags array, or null
//    create(data, tags)      → insert job + insert tags (create tag if new) + link them
//                              Do all of this in a transaction.
//    update(id, changes)     → partial update, return updated or null
//    close(id)               → set status=closed, closed_at=now(), return job or null
//    remove(id)              → delete job and its job_tags entries (transaction)
//
// 5. Wire it into an Express API in hard.js (this file):
//    GET    /api/companies
//    GET    /api/companies/:id
//    POST   /api/companies
//    GET    /api/jobs            (support ?status= ?companyId= ?remote= ?tag= ?minSalary=)
//    GET    /api/jobs/:id
//    POST   /api/jobs            body: { title, description, companyId, salaryMin, salaryMax,
//                                        currency, location, remote, tags: ['React','Node'] }
//    PUT    /api/jobs/:id/close
//    DELETE /api/jobs/:id
//
// 6. Seed the database with realistic data on startup (if tables are empty).
//    3 companies, 8 jobs across them with tags.
//
// When you're done, ask yourself:
// - What is the difference between DELETE and soft-delete (setting a flag)?
// - Why is WAL mode useful? What problem does it solve?
// - The many-to-many tags pattern — how does it compare to storing tags as a comma-separated string?
// - If you switched from SQLite to PostgreSQL, what in your code would change?

const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

// your code here — create the db/ folder and modules, then wire them into routes here

app.listen(PORT, () => console.log(`Job Board API running on :${PORT}`))
