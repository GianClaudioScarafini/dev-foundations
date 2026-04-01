# 03 — Functions

## Annotating functions

```ts
// Named function
function add(a: number, b: number): number {
  return a + b
}

// Arrow function
const multiply = (a: number, b: number): number => a * b

// Return type inference — TypeScript figures it out
const greet = (name: string) => `Hello, ${name}` // inferred: () => string
```

## Optional and default parameters

```ts
function createUser(name: string, role: string = 'user', bio?: string) {
  return { name, role, bio }
}

createUser("Alice")             // role = 'user', bio = undefined
createUser("Alice", "admin")    // bio = undefined
createUser("Alice", "admin", "...")  // all provided
```

## Rest parameters

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0)
}

sum(1, 2, 3, 4)  // 10
```

## Function overloads

When a function behaves differently based on input type, declare multiple signatures:

```ts
function format(value: string): string
function format(value: number, decimals: number): string
function format(value: string | number, decimals?: number): string {
  if (typeof value === 'string') return value.trim()
  return value.toFixed(decimals ?? 2)
}

format("hello ")       // "hello"
format(3.14159, 2)     // "3.14"
format(3.14159)        // "3.14"
```

## Function types

```ts
// Type alias for a function
type Predicate<T> = (item: T) => boolean
type Transformer<T, U> = (item: T) => U
type AsyncHandler = (req: Request, res: Response) => Promise<void>

// Using it
const isAdult: Predicate<{ age: number }> = (user) => user.age >= 18
const toName: Transformer<{ name: string }, string> = (user) => user.name
```

## Key questions to answer before coding
- What is the difference between `param?: string` and `param: string | undefined`?
- Can a function's return type be inferred? When should you annotate it explicitly?
- What is a function overload? When would you use one instead of a union type?
- What does `void` mean as a return type? How is it different from `undefined`?

---

Go to `simple.ts` when ready.
