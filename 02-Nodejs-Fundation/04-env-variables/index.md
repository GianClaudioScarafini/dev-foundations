# 04 — Environment Variables

## Why it matters

Your app needs secrets (API keys, DB passwords) and config that changes between environments (dev, staging, prod). You never hardcode these in source code — they go in environment variables.

Rule: **if it would be embarrassing in a public GitHub repo, it goes in an env var.**

## How env vars work

```bash
# Set in terminal (lasts for this session only)
export DATABASE_URL=postgres://localhost:5432/mydb
node index.js

# Set for just one command
PORT=4000 node index.js

# Set in .env file (loaded by dotenv)
```

## Reading env vars in Node

```js
// Always strings — even numbers
console.log(process.env.PORT)        // "3000" (string, not number)
console.log(process.env.DEBUG)       // "true" (string, not boolean)
console.log(process.env.MISSING)     // undefined

// Always convert and provide defaults
const PORT = parseInt(process.env.PORT, 10) || 3000
const DEBUG = process.env.DEBUG === 'true'
const ENV = process.env.NODE_ENV || 'development'
```

## The dotenv package

```bash
npm install dotenv
```

```env
# .env file — NEVER commit this to git
PORT=3000
DATABASE_URL=postgres://localhost:5432/mydb
JWT_SECRET=supersecretkey123
NODE_ENV=development
```

```js
// Load .env at the very top of your entry file
require('dotenv').config()

// Now process.env has all your .env values
console.log(process.env.PORT)         // "3000"
console.log(process.env.JWT_SECRET)   // "supersecretkey123"
```

## .env.example — what you DO commit

```env
# .env.example — shows what vars are needed, without real values
PORT=3000
DATABASE_URL=
JWT_SECRET=
NODE_ENV=development
```

## Validating required env vars at startup

```js
const required = ['DATABASE_URL', 'JWT_SECRET', 'PORT']

for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing required env var: ${key}`)
    process.exit(1)
  }
}
```

## Key questions to answer before coding
- What type does `process.env.PORT` return and why does it matter?
- What is the difference between `.env` and `.env.example`?
- Why should `.env` be in `.gitignore`?
- What happens if dotenv can't find the `.env` file?

---

Go to `simple.js` when ready.
