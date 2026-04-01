# 01 — Types and Annotations

## What TypeScript actually does

TypeScript is a **compile-time** checker. It reads your code, checks for type errors, then erases all the types and outputs plain JavaScript. At runtime, there is no TypeScript — only JS.

```ts
// TypeScript
const name: string = "Gian"
function add(a: number, b: number): number {
  return a + b
}

// What compiles to (plain JS)
const name = "Gian"
function add(a, b) {
  return a + b
}
```

## Primitive types

```ts
let name: string = "Gian"
let age: number = 32
let active: boolean = true
let nothing: null = null
let missing: undefined = undefined

// Type inference — TypeScript figures it out from the value
let city = "London"  // inferred as string — no annotation needed
let score = 100      // inferred as number
```

## Arrays and tuples

```ts
// Arrays — all elements same type
const names: string[] = ["Alice", "Bob"]
const scores: number[] = [95, 87, 100]
const flags: Array<boolean> = [true, false]  // alternative syntax

// Tuples — fixed length, each position has a known type
const point: [number, number] = [10, 20]
const entry: [string, number] = ["Alice", 95]

// Common mistake:
const wrong: [string, number] = [95, "Alice"]  // Error!
```

## Object types

```ts
// Inline object type annotation
const user: { name: string; age: number; active: boolean } = {
  name: "Gian",
  age: 32,
  active: true
}

// Optional property
const config: { port: number; host?: string } = { port: 3000 }
// host is optional — can be string or undefined
```

## Special types

```ts
// any — turns off TypeScript for this value. Avoid it.
let anything: any = 42
anything = "now a string"  // no error — TypeScript stopped checking

// unknown — safer than any — you must check type before using
let input: unknown = "hello"
input.toUpperCase()  // Error! Must check first:
if (typeof input === "string") {
  input.toUpperCase()  // OK now
}

// never — a function that never returns (throws or infinite loops)
function crash(msg: string): never {
  throw new Error(msg)
}
```

## Key questions to answer before coding
- What is the difference between `any` and `unknown`?
- When does TypeScript infer types vs when should you annotate explicitly?
- What is the difference between `null`, `undefined`, and `never`?
- What does TypeScript output when you compile — what stays, what gets removed?

---

Go to `simple.ts` when ready.
