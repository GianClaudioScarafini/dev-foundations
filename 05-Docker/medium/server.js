const express = require('express')
const { Pool } = require('pg')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT || 5432,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

app.get('/', (req, res) => {
  res.json({ message: 'Project Tracker API v2 — with database' })
})

app.get('/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY id')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('/projects/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [req.params.id])
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' })
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.post('/projects', async (req, res) => {
  const { name, status, progress } = req.body
  try {
    const result = await pool.query(
      'INSERT INTO projects (name, status, progress) VALUES ($1, $2, $3) RETURNING *',
      [name, status || 'active', progress || 0]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`)
  console.log(`Connecting to DB at ${process.env.DB_HOST}:${process.env.DB_PORT || 5432}`)
})
