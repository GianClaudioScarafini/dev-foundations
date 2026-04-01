# 08 — TypeScript with Node/Express

## Setup for a TS Node project

```bash
npm install express
npm install -D typescript ts-node @types/node @types/express
npx tsc --init
```

Key `tsconfig.json` settings for Node:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Typing Express

```ts
import express, { Request, Response, NextFunction } from 'express'

const app = express()
app.use(express.json())

// Typed route handler
app.get('/users/:id', (req: Request, res: Response) => {
  const id = req.params.id  // string
  res.json({ id })
})
```

## Typed request and response with generics

```ts
// Type the params, body, query, and response body:
// Request<Params, ResBody, ReqBody, Query>

interface UserParams { id: string }
interface UpdateUserBody { name?: string; email?: string }

app.put('/users/:id',
  (req: Request<UserParams, {}, UpdateUserBody>, res: Response) => {
    const { id } = req.params    // string ✓
    const { name, email } = req.body  // typed ✓
    res.json({ id, name, email })
  }
)
```

## Typed middleware

```ts
// Extending the Request type for custom properties
declare global {
  namespace Express {
    interface Request {
      user?: { id: number; role: string }
      requestId: string
    }
  }
}

// Now req.user and req.requestId are typed everywhere
function authenticate(req: Request, res: Response, next: NextFunction) {
  req.user = { id: 1, role: 'admin' }  // TypeScript knows this field exists
  next()
}
```

## Key questions to answer before coding
- What does `@types/express` install and why do you need it?
- What is `esModuleInterop` in tsconfig? What does it enable?
- How do you extend the Express `Request` type to add custom properties?
- What is the difference between `ts-node` (for development) and `tsc` + running the compiled JS?

---

Go to `simple.ts` when ready.
