// 10 — Full-Stack API — Hard
// Goal: add authentication to a real API — this is interview territory

// ─────────────────────────────────────────────
// Challenge: Add user auth to the job board API
//
// No starter code. Build on top of the medium.js structure.
//
// Real-world auth with JWT (JSON Web Tokens).
// You will implement login, register, and protected routes from scratch.
//
// Requirements:
//
// 1. Schema additions to db/index.js:
//    users: id, name, email (UNIQUE), password_hash, role (user|employer|admin),
//           created_at
//
//    Refresh tokens (for staying logged in):
//    refresh_tokens: id, user_id (FK), token (UNIQUE), expires_at, created_at
//
// 2. Password hashing — npm install bcryptjs
//    NEVER store plain text passwords.
//    Use bcrypt.hash(password, 10) to hash, bcrypt.compare(plain, hash) to check.
//
// 3. JWT tokens — npm install jsonwebtoken
//    Access token:  short-lived (15 minutes), contains { userId, email, role }
//    Refresh token: long-lived (7 days), stored in DB, used to get new access tokens
//
//    JWT_SECRET and JWT_REFRESH_SECRET must come from .env
//    They must be at least 32 characters.
//
// 4. Auth routes — POST /api/auth/register
//    Body: { name, email, password, role }
//    Validate: name required, email valid, password min 8 chars
//    Hash password, create user, return access + refresh tokens
//    409 if email already exists
//
// 5. Auth routes — POST /api/auth/login
//    Body: { email, password }
//    Find user by email, compare password with bcrypt
//    401 if not found or wrong password (same message — don't reveal which)
//    Return new access + refresh tokens
//    Store refresh token in DB
//
// 6. Auth routes — POST /api/auth/refresh
//    Body: { refreshToken }
//    Look up token in DB — if not found or expired: 401
//    Generate new access token
//    Return it
//
// 7. Auth routes — POST /api/auth/logout
//    Body: { refreshToken }
//    Delete it from the DB (invalidate)
//    Return 204
//
// 8. Auth middleware — requireAuth(req, res, next)
//    Reads Authorization: Bearer <token>
//    Verifies JWT using jsonwebtoken
//    Attaches req.user = { userId, email, role }
//    401 if missing or invalid
//
// 9. Role-based access:
//    requireRole('employer') — only employers can POST/PATCH/DELETE jobs
//    requireRole('admin') — only admins can DELETE companies
//    Users can read everything.
//
// 10. Update job routes:
//    POST /api/jobs — requires auth + role 'employer'
//                     set job.postedBy = req.user.userId
//    PATCH /api/jobs/:id — requires auth + must be the employer who posted it
//                          (unless admin)
//    DELETE /api/jobs/:id — same as PATCH
//
// 11. GET /api/auth/me — requires auth
//    Returns req.user's full profile from DB (without password_hash)
//
// Security rules you MUST follow:
//    - Never return password_hash in any response
//    - Never log passwords or tokens
//    - Use parameterised queries for ALL DB operations (no string concatenation)
//    - Validate and sanitise all inputs before touching the DB
//
// When you're done, ask yourself:
// - What is the difference between an access token and a refresh token?
// - Why is bcrypt slow by design? What does the salt factor (10) do?
// - What is CSRF and how does Bearer token auth defend against it?
// - Why should you NEVER store JWTs in localStorage in a browser app?
// - What happens to all a user's sessions if the JWT_SECRET is rotated?

require('dotenv').config()

// your code here — build the full auth system
