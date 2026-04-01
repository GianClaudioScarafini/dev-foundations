// 07 — Utility Types — Simple
// Run with: npx ts-node simple.ts

interface User {
  id: number
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
  bio?: string
  createdAt: string
  updatedAt: string
}

interface Post {
  id: number
  title: string
  body: string
  authorId: number
  published: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
}

// ─────────────────────────────────────────────
// 1. Derive these types using utility types. Do NOT rewrite the properties manually.

// The type sent back from GET /users (no password)
type PublicUser = never // your code — use Pick or Omit

// The type accepted by POST /users (no id, createdAt, updatedAt — server sets those)
type CreateUserInput = never // your code

// The type accepted by PATCH /users/:id (all fields optional, still no id/timestamps)
type UpdateUserInput = never // your code

// The type accepted by POST /posts
type CreatePostInput = never // your code

// A config object that cannot be mutated after creation
type ImmutablePostConfig = never // your code — use Readonly


// ─────────────────────────────────────────────
// 2. Use the derived types in functions

// Write with the correct param and return types — use your derived types above

function createUser(input: CreateUserInput): PublicUser {
  // your code here
  return {} as PublicUser
}

function updateUser(id: number, patch: UpdateUserInput): PublicUser | null {
  // your code here
  return null
}

// Write a function sanitise(user: User): PublicUser
// that strips password before returning
function sanitise(user: User): PublicUser {
  // Hint: destructuring + rest
  // your code here
  return {} as PublicUser
}


// ─────────────────────────────────────────────
// 3. ReturnType and Parameters in practice

// You have this function from a library you don't control:
declare function fetchUserFromDB(id: number, includeDeleted?: boolean): {
  user: User
  meta: { fetchedAt: string; fromCache: boolean }
}

// Without duplicating the types, define:
// a) The return type of fetchUserFromDB
type FetchUserResult = never  // your code — use ReturnType

// b) The parameter types of fetchUserFromDB as a tuple
type FetchUserParams = never  // your code — use Parameters

// c) A wrapper function that calls fetchUserFromDB and returns only the user
function getUser(...args: FetchUserParams): User {
  // your code here
  return {} as User
}


// ─────────────────────────────────────────────
// 4. Record in practice
//    Define a permissions system using Record.
//    Roles: 'admin', 'editor', 'viewer'
//    Actions: 'read', 'write', 'delete', 'manage_users'
//
//    a) Type PermissionMap = each role maps to an array of allowed actions
//    b) Write the actual permissions object
//    c) Write hasPermission(role, action): boolean

type Role = 'admin' | 'editor' | 'viewer'
type Action = 'read' | 'write' | 'delete' | 'manage_users'

// your code here
