// 07 — Utility Types — Medium
// Goal: use utility types to build an API layer that's type-safe end-to-end

// ─────────────────────────────────────────────
// 1. API layer typing pattern
//    In a real app, you have three different "shapes" of each entity:
//    - DB shape (internal, has all fields including sensitive ones)
//    - API response shape (public, sanitised)
//    - API input shape (what clients send to create/update)
//
//    Define all three shapes for each entity using utility types.
//    NEVER duplicate fields manually — always derive from the DB shape.

interface DBUser {
  id: number
  name: string
  email: string
  passwordHash: string
  role: 'admin' | 'user'
  emailVerified: boolean
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

interface DBPost {
  id: number
  title: string
  slug: string
  body: string
  excerpt: string
  authorId: number
  published: boolean
  publishedAt: string | null
  viewCount: number
  createdAt: string
  updatedAt: string
}

// Derive these WITHOUT repeating fields:
// UserResponse — what GET /users returns (no password, no deletedAt)
// CreateUserInput — what POST /users accepts (name, email, password, role)
// UpdateUserInput — what PATCH /users accepts (name, email only, both optional)
//
// PostResponse — what GET /posts returns (no authorId — embed a nested author object instead)
// CreatePostInput — what POST /posts accepts (title, body, published, authorId)
// UpdatePostInput — what PATCH /posts accepts (title, body, published — all optional)

// your types here


// ─────────────────────────────────────────────
// 2. DeepPartial — Partial doesn't go deep enough
//    Partial<T> only makes the top-level properties optional.
//    For nested objects, you need DeepPartial.
//
//    Write: type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }
//
//    Then verify with a nested config:
type AppConfig = {
  server: { port: number; host: string; ssl: boolean }
  database: { url: string; pool: { min: number; max: number } }
  auth: { secret: string; expiresIn: string }
}

// With Partial<AppConfig>, server is optional but { port, host, ssl } are all required
// With DeepPartial<AppConfig>, all nested properties are optional too

// your DeepPartial type here


// ─────────────────────────────────────────────
// 3. Conditional types — the real power
//    TypeScript lets you write types with conditions:
//    type IsString<T> = T extends string ? true : false
//
//    Write these:
//    a) Flatten<T> — if T is an array, return the element type; otherwise return T
//       Flatten<string[]> → string
//       Flatten<number>   → number
//
//    b) NonNullable<T> — remove null and undefined from T (already built-in, but write it yourself)
//       NonNullable<string | null | undefined> → string
//
//    c) Awaited<T> — unwrap a Promise type (already built-in, but write it yourself)
//       Awaited<Promise<string>> → string
//       Awaited<string>         → string (already not a promise)

// your types here


// ─────────────────────────────────────────────
// 4. Extract and Exclude
//    TypeScript has built-in Extract and Exclude:
//    Extract<T, U>  — keep types in T that are assignable to U
//    Exclude<T, U>  — remove types from T that are assignable to U
//
//    Without looking them up, implement both:
//    MyExtract<T, U> using conditional types
//    MyExclude<T, U> using conditional types
//
//    Verify:
//    Exclude<'a' | 'b' | 'c', 'a'> → 'b' | 'c'
//    Extract<string | number | boolean, string | boolean> → string | boolean

// your code here
