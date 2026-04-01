# 04 — Union and Intersection Types

## Union types — "either/or"

```ts
type StringOrNumber = string | number
type Status = 'open' | 'closed' | 'pending'
type ID = string | number

let id: ID = 42
id = "abc"  // also fine
```

## Narrowing — how you use union types

TypeScript knows which branch you're in after a check:

```ts
function formatId(id: string | number): string {
  if (typeof id === 'string') {
    return id.toUpperCase()  // TypeScript knows id is string here
  }
  return id.toFixed(0)       // TypeScript knows id is number here
}
```

## Discriminated unions — the most important pattern

When your union members each have a shared "tag" field:

```ts
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'rectangle'; width: number; height: number }

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':    return Math.PI * shape.radius ** 2
    case 'square':    return shape.side ** 2
    case 'rectangle': return shape.width * shape.height
  }
}
```

TypeScript knows `shape.radius` only exists in the `'circle'` branch. If you add a new shape to the union, TypeScript will warn you that `area()` doesn't handle it.

## Intersection types — "both"

```ts
type Timestamps = { createdAt: string; updatedAt: string }
type SoftDelete = { deletedAt: string | null }

type BaseEntity = Timestamps & SoftDelete
// BaseEntity has: createdAt, updatedAt, deletedAt

type User = BaseEntity & {
  id: number
  name: string
  email: string
}
```

## Key questions to answer before coding
- What is "type narrowing" and how does TypeScript know what type something is after a check?
- What makes a union "discriminated"? What is the "discriminant" property?
- What happens if you add a new variant to a discriminated union but forget to handle it in a `switch`?
- What is `never` and why does it appear at the exhaustive check of a `switch`?

---

Go to `simple.ts` when ready.
