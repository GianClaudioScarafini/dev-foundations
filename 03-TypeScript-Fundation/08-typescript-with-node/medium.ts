// 08 — TypeScript with Node/Express — Medium
// Goal: build a fully typed Express API with proper file structure
//
// Create this structure alongside medium.ts:
//   medium.ts          ← entry point
//   src/
//     app.ts           ← express app
//     types/
//       express.d.ts   ← module augmentation for Request
//       models.ts      ← shared interfaces
//     routes/
//       users.ts       ← typed user routes
//     middleware/
//       auth.ts        ← typed auth middleware
//       errorHandler.ts
//     services/
//       userService.ts ← business logic

// ─────────────────────────────────────────────
// src/types/models.ts — define all shared types here

// User, PublicUser, CreateUserInput, UpdateUserInput
// JwtPayload: { userId: number; email: string; role: string }


// ─────────────────────────────────────────────
// src/types/express.d.ts — extend Express types

// declare global {
//   namespace Express {
//     interface Request {
//       user?: JwtPayload
//       requestId: string
//     }
//   }
// }


// ─────────────────────────────────────────────
// src/middleware/auth.ts
//
// requireAuth(req: Request, res: Response, next: NextFunction): void
// Reads Authorization: Bearer <token>
// Token is base64-encoded JSON: { userId, email, role, exp }
// Validates exp (Unix timestamp), attaches req.user
// 401 if missing/invalid/expired


// ─────────────────────────────────────────────
// src/services/userService.ts
//
// Pure TypeScript service — no Express imports.
// Methods: register, login, getById, updateProfile
// Uses in-memory store.
// All inputs and outputs strictly typed using your model types.


// ─────────────────────────────────────────────
// src/routes/users.ts
//
// GET    /               → all users (admin only, use requireRole middleware)
// GET    /:id            → get user by id
// POST   /register       → create account
// POST   /login          → login, return token
// GET    /me             → current user profile (requires auth)
// PATCH  /me             → update current user (requires auth)
//
// Every route handler must have explicit Request/Response types.
// No implicit any anywhere.


// ─────────────────────────────────────────────
// Medium.ts entry point

import express from 'express'
// import app from './src/app'  ← uncomment after creating the files

const PORT = parseInt(process.env.PORT ?? '3000', 10)

// app.listen(PORT, () => console.log(`Running on :${PORT}`))
console.log('Build the src/ structure first, then uncomment the imports above.')
