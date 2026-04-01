// 03 — Functions — Hard
// Goal: typed function composition that mirrors real library patterns

// ─────────────────────────────────────────────
// Challenge: Build a typed validation library
//
// Libraries like zod do this. Build a simplified version.
//
// Requirements:
//
// 1. A Validator<T> is a function: (value: unknown) => { ok: true; value: T } | { ok: false; error: string }
//    This is called a "discriminated union result" pattern — used everywhere in typed TS.
//
// 2. Write these primitive validators:
//    string(): Validator<string>
//    number(): Validator<number>
//    boolean(): Validator<boolean>
//
// 3. Write combinator functions that build complex validators from simple ones:
//    optional<T>(v: Validator<T>): Validator<T | undefined>
//    array<T>(v: Validator<T>): Validator<T[]>
//    object<T>(shape: { [K in keyof T]: Validator<T[K]> }): Validator<T>
//
// 4. Write chain modifiers:
//    min(v: Validator<number>, minimum: number): Validator<number>
//    max(v: Validator<number>, maximum: number): Validator<number>
//    minLength(v: Validator<string>, length: number): Validator<string>
//    pattern(v: Validator<string>, regex: RegExp): Validator<string>
//
// 5. Test it — this should all be fully typed:
//    const userValidator = object<{
//      name: string
//      email: string
//      age: number
//      tags: string[]
//      bio: string | undefined
//    }>({
//      name: minLength(string(), 2),
//      email: pattern(string(), /\S+@\S+\.\S+/),
//      age: min(max(number(), 120), 0),
//      tags: array(string()),
//      bio: optional(string())
//    })
//
//    const result = userValidator({ name: 'G', email: 'not-email', age: 200, tags: ['ts'] })
//    // result.ok === false
//    // result.error describes what failed
//
//    const good = userValidator({ name: 'Gian', email: 'g@b.com', age: 30, tags: ['ts'] })
//    // good.ok === true
//    // good.value is typed as the full object — TypeScript knows the shape
//
// When you're done, ask yourself:
// - What is a "discriminated union"? Why is it better than throwing exceptions?
// - What does `[K in keyof T]: Validator<T[K]>` do — break it down piece by piece.
// - How would you add a "transform" step (like coercing "30" → 30 for numbers)?

// your code here
