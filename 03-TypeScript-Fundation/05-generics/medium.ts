// 05 — Generics — Medium
// Goal: build generic utilities that you'd actually publish as a library

// ─────────────────────────────────────────────
// 1. Generic Repository with typed filtering
//    Build an InMemoryRepository<T extends { id: number }> class.
//
//    Methods:
//    findById(id: number): T | undefined
//    findAll(): T[]
//    findWhere(predicate: (item: T) => boolean): T[]
//    findOne(predicate: (item: T) => boolean): T | undefined
//    save(item: Omit<T, 'id'>): T           ← auto-assigns id
//    update(id: number, patch: Partial<Omit<T, 'id'>>): T | undefined
//    delete(id: number): boolean
//    count(): number
//    exists(predicate: (item: T) => boolean): boolean
//
//    Then instantiate it for User and Product:
//    const userRepo = new InMemoryRepository<User>()
//    const productRepo = new InMemoryRepository<Product>()
//
//    TypeScript should prevent saving a User to productRepo.

interface User { id: number; name: string; email: string }
interface Product { id: number; name: string; price: number; stock: number }

// your code here


// ─────────────────────────────────────────────
// 2. Generic cache with TTL (time-to-live)
//    Build a Cache<T> class that stores values with expiry.
//
//    set(key: string, value: T, ttlMs: number): void
//    get(key: string): T | undefined     ← returns undefined if expired or missing
//    has(key: string): boolean           ← true only if present AND not expired
//    delete(key: string): void
//    clear(): void
//    size(): number                      ← count of non-expired entries

// your code here

// Test:
// const cache = new Cache<{ name: string }>()
// cache.set('user:1', { name: 'Alice' }, 1000)
// console.log(cache.get('user:1'))  // { name: 'Alice' }
// setTimeout(() => console.log(cache.get('user:1')), 1100)  // undefined (expired)


// ─────────────────────────────────────────────
// 3. Generic event emitter
//    Build a typed EventEmitter<Events> where Events is a map of event name → payload type.
//
//    on<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void): void
//    off<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void): void
//    emit<K extends keyof Events>(event: K, payload: Events[K]): void
//    once<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void): void
//
//    Test with typed events:
//    type AppEvents = {
//      'user:login': { userId: number; email: string }
//      'user:logout': { userId: number }
//      'error': { code: number; message: string }
//    }
//    const emitter = new EventEmitter<AppEvents>()
//    emitter.emit('user:login', { userId: 1, email: 'g@b.com' })
//    emitter.emit('user:login', { userId: 1 })  // Error — missing email ✓

// your code here


// ─────────────────────────────────────────────
// 4. Mapped generic types
//    Write these utility types (DO NOT use built-in TypeScript utilities — write them yourself):
//
//    MyPartial<T>  — all properties optional
//    MyRequired<T> — all properties required
//    MyReadonly<T> — all properties readonly
//    MyPick<T, K extends keyof T>     — keep only keys K
//    MyOmit<T, K extends keyof T>     — remove keys K
//    MyRecord<K extends string, V>    — object with keys K and values V
//
//    After writing them, verify they produce the same results as TypeScript's built-ins.

// your code here
