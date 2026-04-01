// 10 — Full-Stack API — Medium
// Goal: build the backend for the React job board frontend
// This API is designed to be consumed by the React track's exercises.

// ─────────────────────────────────────────────
// Context: build a job board API that a React frontend can actually call.
//
// When you finish this, your React frontend (from 01-React-fundation) can
// fetch real data from this server instead of using hardcoded arrays.
//
// Create this full file structure alongside medium.js:
//
//   medium.js           ← entry point
//   app.js              ← express setup
//   config.js           ← env validation + config object
//   db/
//     index.js          ← sqlite connection + migrations
//     seed.js           ← seed with 10 realistic jobs + 3 companies
//   models/
//     company.js        ← company CRUD
//     job.js            ← job CRUD
//   middleware/
//     logger.js         ← request logger with timing
//     asyncHandler.js   ← wrap async routes
//     errorHandler.js   ← global error handler
//   routes/
//     companies.js      ← company routes
//     jobs.js           ← job routes

// ─────────────────────────────────────────────
// API requirements:
//
// Companies:
//   GET /api/companies                → all companies with job count
//   GET /api/companies/:id            → company with its open jobs
//
// Jobs:
//   GET /api/jobs                     → paginated jobs (default limit 10)
//     filters: ?status= ?companyId= ?remote= ?minSalary= ?tag=
//     ?page= ?limit=
//   GET /api/jobs/:id                 → job with company embedded
//   POST /api/jobs                    → create (all fields validated)
//   PATCH /api/jobs/:id               → partial update
//   DELETE /api/jobs/:id              → 204
//
// CORS:
//   Allow requests from http://localhost:5173 (Vite dev server)
//   Add these headers to every response:
//   Access-Control-Allow-Origin: http://localhost:5173
//   Access-Control-Allow-Methods: GET,POST,PATCH,DELETE,OPTIONS
//   Access-Control-Allow-Headers: Content-Type
//   Handle OPTIONS preflight with 204.
//
// Health check:
//   GET /health → { status: 'ok', uptime: process.uptime(), jobs: count, companies: count }
//
// The .env file should configure:
//   PORT=3001  (use 3001 to avoid conflict with your React dev server on 3000)
//   NODE_ENV=development
//   CORS_ORIGIN=http://localhost:5173
//
// After building this, test it works by running both:
//   node medium.js          ← this server on :3001
//   (your React Vite app)   ← on :5173
// And fetching from the React app with:
//   fetch('http://localhost:3001/api/jobs').then(r => r.json()).then(console.log)

require('dotenv').config()
const app = require('./app')
const config = require('./config')

app.listen(config.server.port, () => {
  console.log(`Job Board API running at http://localhost:${config.server.port}`)
  console.log(`CORS enabled for: ${config.corsOrigin}`)
})
