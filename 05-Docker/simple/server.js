const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const projects = [
  { id: 1, name: 'Office Tower A', status: 'active', progress: 72 },
  { id: 2, name: 'Warehouse B',    status: 'active', progress: 45 },
  { id: 3, name: 'Car Park C',     status: 'complete', progress: 100 },
]

app.get('/', (req, res) => {
  res.json({ message: 'Project Tracker API', version: '1.0' })
})

app.get('/projects', (req, res) => {
  res.json(projects)
})

app.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === Number(req.params.id))
  if (!project) return res.status(404).json({ error: 'Project not found' })
  res.json(project)
})

app.listen(PORT, () => {
  console.log(`Project Tracker API running on port ${PORT}`)
})
