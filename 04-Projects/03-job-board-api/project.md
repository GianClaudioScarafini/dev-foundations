# Project 03 — Dev Job Board API

**Difficulty:** Mid  
**Stack:** Express + TypeScript + SQLite + JWT auth  
**Time estimate:** 3–5 sessions  

---

## What you're building

A production-grade job board API — the kind that a real React frontend could consume. This is the most complete backend you'll build in this track. It has auth, role-based access, relational data, and pagination.

This project should live on your CV.

---

## What it does

```
# Public endpoints
GET  /api/jobs               → paginated jobs (with filters + search)
GET  /api/jobs/:id           → job with company embedded
GET  /api/companies          → all companies
GET  /api/companies/:id      → company with its open jobs

# Auth
POST /api/auth/register      → create account (role: seeker | employer)
POST /api/auth/login         → get access + refresh tokens
POST /api/auth/refresh       → new access token from refresh token
POST /api/auth/logout        → invalidate refresh token
GET  /api/auth/me            → current user profile

# Employer-only (requires auth + role: employer)
POST   /api/jobs             → post a new job
PATCH  /api/jobs/:id         → update (only if you posted it)
DELETE /api/jobs/:id         → close/remove (only if you posted it)

# Admin-only
GET  /api/admin/users        → all users
DELETE /api/admin/users/:id  → delete a user
```

---

## Data model

```ts
// Users
interface User {
  id: number
  name: string
  email: string           // UNIQUE
  passwordHash: string    // never exposed in responses
  role: 'seeker' | 'employer' | 'admin'
  createdAt: string
}

// Companies (owned by an employer)
interface Company {
  id: number
  name: string
  website: string
  location: string
  size: 'startup' | 'mid' | 'enterprise'
  ownerId: number         // FK → users.id
  createdAt: string
}

// Jobs
interface Job {
  id: number
  title: string
  description: string
  companyId: number       // FK → companies.id
  postedBy: number        // FK → users.id (the employer who posted it)
  salary: { min: number; max: number; currency: string }  // stored as JSON
  location: string
  remote: boolean
  status: 'open' | 'closed'
  tags: string[]          // stored as JSON
  postedAt: string
  closedAt: string | null
}

// Refresh tokens (stored in DB to allow logout/revocation)
interface RefreshToken {
  id: number
  userId: number
  token: string           // UNIQUE
  expiresAt: string
  createdAt: string
}
```

---

## File structure

```
03-job-board-api/
├── src/
│   ├── index.ts
│   ├── app.ts
│   ├── config.ts
│   ├── db/
│   │   ├── index.ts
│   │   └── seed.ts        ← 3 companies, 3 employers, 10 jobs
│   ├── models/
│   │   ├── user.ts
│   │   ├── job.ts
│   │   ├── company.ts
│   │   └── refreshToken.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── jobs.ts
│   │   ├── companies.ts
│   │   └── admin.ts
│   ├── middleware/
│   │   ├── auth.ts        ← requireAuth, requireRole
│   │   ├── validate.ts    ← schema validation
│   │   ├── rateLimit.ts
│   │   ├── logger.ts
│   │   └── errorHandler.ts
│   └── types/
│       ├── index.ts
│       └── express.d.ts
├── .env
├── .env.example
├── tsconfig.json
└── README.md
```

---

## Requirements

- [ ] TypeScript strict mode throughout
- [ ] bcryptjs for passwords — never store plain text
- [ ] JWT access tokens (15 min expiry) + refresh tokens (7 day expiry)
- [ ] Refresh tokens stored in DB — logout invalidates them
- [ ] Role-based middleware: `requireAuth`, `requireRole('employer')`, `requireRole('admin')`
- [ ] Employers can only modify their own jobs
- [ ] `GET /api/jobs` supports: `?status=open&remote=true&minSalary=50000&tag=React&q=senior&page=1&limit=10`
- [ ] Pagination meta in all list responses
- [ ] Rate limiting on auth endpoints (5 requests / 15 min per IP)
- [ ] All errors use a typed error hierarchy — consistent response shape
- [ ] Salary and tags stored as JSON in SQLite, parsed in model layer

---

## Stretch goals

- [ ] Deploy to Railway (free tier) with a real PostgreSQL database
- [ ] Saved jobs — seekers can save/unsave jobs, `GET /api/me/saved-jobs`
- [ ] Job applications — seekers can apply, employers can view applicants
- [ ] Email verification on register (use Resend or Nodemailer)
- [ ] OpenAPI/Swagger spec generated from your types

---

## Skills used

- Full auth system (JWT + bcrypt + refresh tokens)
- Role-based access control
- Relational SQLite schema
- Typed middleware chain
- Rate limiting
- Pagination + filtering

---

## What to say in an interview

> "I built a job board REST API from scratch in TypeScript. It has JWT authentication with refresh tokens stored in the database so logout actually works. Employers can post jobs, seekers can browse them with filters and search. I implemented rate limiting on the auth endpoints and role-based access so employers can only modify their own jobs. TypeScript's strict mode forced me to handle nullable fields correctly — which would have been silent bugs in plain JavaScript."
