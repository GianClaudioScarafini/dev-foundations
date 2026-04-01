// 03 — Functions — Medium
// Goal: write typed utility functions used in real apps

// ─────────────────────────────────────────────
// 1. Typed array utilities — re-implement without using the built-in methods
//    All must have proper generic types. No `any` allowed.

// chunk<T>(array: T[], size: number): T[][]
// chunk([1,2,3,4,5], 2) → [[1,2], [3,4], [5]]

// flatten<T>(array: T[][]): T[]
// flatten([[1,2], [3,4], [5]]) → [1,2,3,4,5]

// unique<T>(array: T[]): T[]
// unique([1,2,2,3,1]) → [1,2,3]

// sortBy<T>(array: T[], key: keyof T): T[]
// sortBy(users, 'name') → users sorted alphabetically by name

// your code here


// ─────────────────────────────────────────────
// 2. Middleware-style function pipeline
//    Write a typed compose function for async middleware.
//    This is the pattern Express uses internally.
//
//    type Middleware<T> = (context: T, next: () => Promise<void>) => Promise<void>
//
//    Write: compose<T>(middlewares: Middleware<T>[]): (context: T) => Promise<void>
//    When the composed function is called, it runs each middleware in order.
//    Each middleware must call next() to continue to the next one.
//
//    Test it with:
//    - A logger middleware that logs before and after
//    - An auth middleware that checks context.userId
//    - A handler that sets context.result

type RequestContext = {
  path: string
  userId?: number
  result?: unknown
}

// your code here


// ─────────────────────────────────────────────
// 3. Memoize — typed version
//    Write memoize<T extends (...args: any[]) => any>(fn: T): T
//    It wraps any function and caches its results by arguments.
//    The cached version has the SAME type signature as the original.
//
//    Test it works and preserves types:
//    const memoFib = memoize((n: number): number => { ... })
//    memoFib(10)  // computed
//    memoFib(10)  // cached
//    TypeScript should infer memoFib as (n: number) => number

// your code here


// ─────────────────────────────────────────────
// 4. Retry with typed error handling
//    Write retry<T>(fn: () => Promise<T>, times: number, delayMs: number): Promise<T>
//    It calls fn, and if it throws, retries up to `times` times with a delay.
//    If all attempts fail, it throws the last error.
//    T is inferred from fn's return type.
//
//    Test with a function that fails the first 2 times, succeeds the 3rd:
//    let attempts = 0
//    const unstable = () => {
//      attempts++
//      if (attempts < 3) return Promise.reject(new Error(`Attempt ${attempts} failed`))
//      return Promise.resolve({ data: 'success' })
//    }
//    const result = await retry(unstable, 3, 100)

// your code here
