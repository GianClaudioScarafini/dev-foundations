# 07 — Utility Types

## TypeScript ships these — use them

Instead of writing types from scratch, compose them from existing ones.

```ts
interface User {
  id: number
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
  createdAt: string
}
```

### `Partial<T>` — all properties optional
```ts
type UserUpdate = Partial<User>
// { id?: number; name?: string; email?: string; ... }
// Use for PATCH request bodies
```

### `Required<T>` — all properties required
```ts
type StrictConfig = Required<Config>
// Opposite of Partial — forces all optionals to be required
```

### `Pick<T, K>` — keep only some keys
```ts
type PublicUser = Pick<User, 'id' | 'name' | 'email'>
// { id: number; name: string; email: string }
// Use to control what you expose from an API
```

### `Omit<T, K>` — remove some keys
```ts
type CreateUserInput = Omit<User, 'id' | 'createdAt'>
// { name, email, password, role }
// Use for creation inputs — server assigns id and createdAt
```

### `Record<K, V>` — typed dictionary
```ts
type RolePermissions = Record<'admin' | 'user' | 'guest', string[]>
// { admin: string[], user: string[], guest: string[] }
```

### `Readonly<T>` — all properties readonly
```ts
type ImmutableUser = Readonly<User>
// Cannot reassign any property — good for config objects
```

### `NonNullable<T>` — remove null and undefined
```ts
type MaybeString = string | null | undefined
type DefinitelyString = NonNullable<MaybeString>  // string
```

### `ReturnType<T>` — extract function return type
```ts
function getUser() { return { id: 1, name: "Gian" } }
type UserShape = ReturnType<typeof getUser>  // { id: number; name: string }
// Useful when you don't control the function signature
```

### `Parameters<T>` — extract function parameter types as a tuple
```ts
function createUser(name: string, email: string, role: string) {}
type CreateArgs = Parameters<typeof createUser>  // [string, string, string]
```

## Key questions to answer before coding
- When would you use `Omit` vs defining a new type from scratch?
- What does `ReturnType<typeof someFunction>` let you do that's useful?
- What is the difference between `Partial<T>` and making all fields `?: T[field] | undefined`?

---

Go to `simple.ts` when ready.
