// 10 — Full Stack Mini Project — Express Server
// Phase 1: Build this before touching the React frontend

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3001
const DATA_FILE = path.join(__dirname, 'data', 'jobs.json')

// ─────────────────────────────────────────────
// Middleware
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))

// ─────────────────────────────────────────────
// Helpers — read/write the JSON file
function readData() {
  // your code here — fs.readFileSync + JSON.parse
  // return { jobs: [], applications: [] } as default if file doesn't exist
}

function writeData(data) {
  // your code here — JSON.stringify + fs.writeFileSync
}

// ─────────────────────────────────────────────
// Routes

// GET /api/jobs — return all jobs
app.get('/api/jobs', (req, res) => {
  // your code here
})

// GET /api/jobs/:id — return one job, 404 if not found
app.get('/api/jobs/:id', (req, res) => {
  // your code here
})

// POST /api/jobs — create a new job
// Body: { title, company, location, salary, description, tags }
// Auto-assign: id (Date.now()), postedAt (new Date().toISOString())
app.post('/api/jobs', (req, res) => {
  // your code here
})

// DELETE /api/jobs/:id — delete a job, 404 if not found
app.delete('/api/jobs/:id', (req, res) => {
  // your code here
})

// POST /api/applications — submit a job application
// Body: { jobId, name, email, coverNote }
app.post('/api/applications', (req, res) => {
  // your code here
})

// GET /api/applications — return all applications (admin use)
app.get('/api/applications', (req, res) => {
  // your code here
})

// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
