// 06 — Express Basics — Hard
// Goal: build a versioned Express API with input validation and structured errors

// ─────────────────────────────────────────────
// Challenge: Versioned Job Listings API
//
// No starter code. You design the structure.
//
// Build a job listings API that a frontend could actually consume.
//
// Requirements:
//
// 1. File structure:
//    hard.js              ← entry point
//    app.js               ← express setup + route mounting
//    routes/
//      v1/
//        jobs.js          ← job routes under /api/v1/jobs
//        companies.js     ← company routes under /api/v1/companies
//    data/
//      jobs.js            ← data + CRUD helpers
//      companies.js       ← data + CRUD helpers
//    middleware/
//      validate.js        ← request validation helper
//
// 2. Companies CRUD:
//    GET    /api/v1/companies              → all companies
//    GET    /api/v1/companies/:id          → one company
//    POST   /api/v1/companies             → create (name, website, location required)
//
//    Company shape: { id, name, website, location, size: 'startup'|'mid'|'enterprise' }
//
// 3. Jobs CRUD:
//    GET    /api/v1/jobs                   → all jobs (supports ?status= ?companyId= ?remote=)
//    GET    /api/v1/jobs/:id               → one job or 404
//    POST   /api/v1/jobs                   → create job
//    PUT    /api/v1/jobs/:id               → update job
//    DELETE /api/v1/jobs/:id               → delete job (204)
//    PUT    /api/v1/jobs/:id/close         → mark job as closed
//
//    Job shape: { id, title, companyId, salary: { min, max, currency },
//                 location, remote: bool, status: 'open'|'closed',
//                 tags: [], postedAt, closedAt }
//
// 4. GET /api/v1/jobs should support these query params:
//    ?status=open            → filter by status
//    ?companyId=1            → filter by company
//    ?remote=true            → only remote jobs
//    ?minSalary=50000        → salary min >= this
//    ?tag=React              → jobs where tags includes this (case-insensitive)
//    ?page=1&limit=5         → paginate results
//
//    Response for paginated list:
//    {
//      data: [...jobs],
//      pagination: { page: 1, limit: 5, total: 20, pages: 4 }
//    }
//
// 5. validate.js middleware:
//    Export a validate(schema) function that returns Express middleware.
//    The schema is a plain object: { field: { required, type, enum, min, max } }
//    If validation fails, respond 400 with all errors listed.
//    Use this middleware on POST and PUT routes.
//
// 6. When a job is fetched by id, embed the company data:
//    { ...job, company: { id, name, location } }
//    Do NOT embed the full company on list responses.
//
// When you're done, ask yourself:
// - Why separate v1/ folder? What would v2 look like?
// - What is the difference between validation middleware and error-handling middleware?
// - How would you add authentication so only job-poster can delete their own job?

const app = require('./app')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Job API v1 running at http://localhost:${PORT}`)
})
