# 02 — Interfaces and Type Aliases

## Two ways to describe an object shape

```ts
// Type alias — can describe anything: objects, unions, primitives, tuples
type User = {
  id: number
  name: string
  email: string
}

// Interface — describes object shapes only, but can be extended more naturally
interface User {
  id: number
  name: string
  email: string
}
```

In practice: use `interface` for objects that will be extended or implemented. Use `type` for everything else (unions, tuples, computed types).

## Extending

```ts
// Interface extension
interface Animal { name: string }
interface Dog extends Animal { breed: string }
// Dog = { name: string; breed: string }

// Type alias intersection (equivalent)
type Animal = { name: string }
type Dog = Animal & { breed: string }
```

## Optional and readonly properties

```ts
interface Profile {
  id: number
  name: string
  bio?: string          // optional — string | undefined
  readonly email: string  // can be set once, never changed
  readonly createdAt: Date
}
```

## Index signatures — dynamic keys

```ts
// When you don't know the keys upfront:
interface StringMap {
  [key: string]: string
}
const headers: StringMap = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer token'
}
```

## Interface for functions

```ts
interface Formatter {
  (value: string, options?: { uppercase: boolean }): string
}

const shout: Formatter = (value, opts) => {
  return opts?.uppercase ? value.toUpperCase() : value
}
```

## Key difference that matters in interviews

```ts
// Interfaces can be "re-opened" — TypeScript merges them
interface Window { myCustomProp: string }
interface Window { anotherProp: number }
// Result: Window has both myCustomProp AND anotherProp

// Type aliases CANNOT be re-opened
type Config = { port: number }
type Config = { host: string }  // Error: Duplicate identifier 'Config'
```

## Key questions to answer before coding
- When would you use `interface` over `type`? When would you use `type` over `interface`?
- What is the `&` operator for types called? What does it produce?
- What does `readonly` mean on a property? How is it different from `const`?
- Can an interface describe a function? Can a `type` alias?

---

Go to `simple.ts` when ready.
