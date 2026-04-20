const express = require('express')
const { Pool } = require('pg')
const { createClient } = require('redis')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
const CACHE_TTL = parseInt(process.env.CACHE_TTL || '60')  // seconds

const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT || 5432,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

const redis = createClient({
  url: `redis://${process.env.REDIS_HOST || 'redis'}:${process.env.REDIS_PORT || 6379}`
})

redis.on('error', err => console.error('Redis error:', err))
redis.connect().then(() => console.log('Redis connected'))

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/projects', async (req, res) => {
  const cacheKey = 'projects:all'
  try {
    const cached = await redis.get(cacheKey)
    if (cached) {
      console.log('CACHE HIT — projects:all')
      return res.json(JSON.parse(cached))
    }
    console.log('CACHE MISS — querying database')
    const result = await pool.query('SELECT * FROM projects ORDER BY id')
    await redis.setEx(cacheKey, CACHE_TTL, JSON.stringify(result.rows))
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.get('/projects/:id', async (req, res) => {
  const cacheKey = `projects:${req.params.id}`
  try {
    const cached = await redis.get(cacheKey)
    if (cached) {
      console.log(`CACHE HIT — ${cacheKey}`)
      return res.json(JSON.parse(cached))
    }
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [req.params.id])
    if (result.rows.length === 0) return res.status(404).json({ error: 'Not found' })
    await redis.setEx(cacheKey, CACHE_TTL, JSON.stringify(result.rows[0]))
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
    await redis.del('projects:all')  // invalidate list cache on write
    res.status(201).json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`)
})
