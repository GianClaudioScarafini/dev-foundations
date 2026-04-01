// 06 — Classes — Medium
// Goal: use classes for real service-layer patterns

// ─────────────────────────────────────────────
// Context: build a typed service layer for a user management system.
// This is the pattern used in NestJS and many production Node apps.

// ─────────────────────────────────────────────
// 1. Define your data types

interface User {
  id: number
  name: string
  email: string
  passwordHash: string
  role: 'admin' | 'user'
  createdAt: string
}

type CreateUserInput = Omit<User, 'id' | 'passwordHash' | 'createdAt'> & { password: string }
type UpdateUserInput = Partial<Pick<User, 'name' | 'email' | 'role'>>
type PublicUser = Omit<User, 'passwordHash'>  // never expose the hash


// ─────────────────────────────────────────────
// 2. UserRepository class
//    Private in-memory store.
//    Methods return domain types, never internal storage details.
//
//    findById(id: number): User | undefined
//    findByEmail(email: string): User | undefined
//    findAll(): User[]
//    save(user: User): User
//    update(id: number, patch: UpdateUserInput): User | undefined
//    delete(id: number): boolean

class UserRepository {
  private users: Map<number, User> = new Map()
  private nextId = 1

  // your methods here
}


// ─────────────────────────────────────────────
// 3. UserService class
//    Depends on UserRepository (injected via constructor — dependency injection).
//    Contains business logic. Never exposes passwordHash to callers.
//
//    register(input: CreateUserInput): PublicUser
//      - Throw if email already exists: "Email already registered"
//      - Hash password (fake it: return `hashed:${password}`)
//      - Save and return PublicUser
//
//    login(email: string, password: string): PublicUser
//      - Find user by email
//      - Check password (compare against `hashed:${password}`)
//      - Throw "Invalid credentials" for either failure (same message — no leaking)
//      - Return PublicUser
//
//    getProfile(id: number): PublicUser
//      - Find user, throw "User not found" if missing
//      - Return PublicUser
//
//    updateProfile(id: number, input: UpdateUserInput): PublicUser
//      - Validate: if updating email, check not already taken
//      - Update and return PublicUser
//
//    deleteAccount(id: number): void
//      - Delete, throw "User not found" if missing

class UserService {
  constructor(private readonly repo: UserRepository) {}

  // your methods here
}


// ─────────────────────────────────────────────
// 4. Wire it up and test

const repo = new UserRepository()
const service = new UserService(repo)

const alice = service.register({ name: 'Alice', email: 'alice@b.com', role: 'user', password: 'pass123' })
console.log('Registered:', alice)
// alice.passwordHash  ← should be a TypeScript error — not on PublicUser

try {
  service.register({ name: 'Alice2', email: 'alice@b.com', role: 'user', password: 'other' })
} catch (e: unknown) {
  if (e instanceof Error) console.log('Duplicate caught:', e.message)
}

const loggedIn = service.login('alice@b.com', 'pass123')
console.log('Logged in:', loggedIn)

try {
  service.login('alice@b.com', 'wrongpass')
} catch (e: unknown) {
  if (e instanceof Error) console.log('Bad login caught:', e.message)
}
