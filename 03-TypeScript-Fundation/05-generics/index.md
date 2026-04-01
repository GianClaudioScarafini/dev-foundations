# 05 — Generics

## What generics are

Generics let you write code that works on **any type** without losing type safety. The alternative is `any`, which loses all safety.

```ts
// Without generics — you lose the type
function first(arr: any[]): any {
  return arr[0]
}
const n = first([1, 2, 3])  // n is any — TypeScript can't help you

// With generics — type is preserved
function first<T>(arr: T[]): T {
  return arr[0]
}
const n = first([1, 2, 3])  // n is number
const s = first(['a', 'b']) // s is string
```

## Generic constraints — `extends`

Limit which types T can be:

```ts
// T must have a .length property
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b
}

longest("hello", "hi")       // T = string ✓
longest([1, 2], [3])         // T = number[] ✓
longest(42, 100)             // Error — numbers have no .length ✓

// T must be a key of object U
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user = { name: "Gian", age: 32 }
getProperty(user, "name")   // string
getProperty(user, "age")    // number
getProperty(user, "email")  // Error — 'email' not in user ✓
```

## Generic interfaces and classes

```ts
interface Repository<T> {
  findById(id: number): T | null
  findAll(): T[]
  save(item: T): T
  delete(id: number): boolean
}

class Stack<T> {
  private items: T[] = []
  push(item: T): void { this.items.push(item) }
  pop(): T | undefined { return this.items.pop() }
  peek(): T | undefined { return this.items.at(-1) }
  get size(): number { return this.items.length }
}

const numStack = new Stack<number>()
numStack.push(1)
numStack.push("hello")  // Error — string not allowed ✓
```

## Key questions to answer before coding
- What does `<T>` mean in `function identity<T>(value: T): T`?
- What is a generic constraint? What does `T extends string` mean?
- What is `keyof T`? What type does it produce?
- What is `T[K]` called? (It's called an "indexed access type".)

---

Go to `simple.ts` when ready.
