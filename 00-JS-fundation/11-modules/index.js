// MODULES — import / export
// Modules let you split code into files and only expose what's needed.
// Run this file with: node --experimental-vm-modules index.js
// Or rename to index.mjs and run: node index.mjs

// ─────────────────────────────────────────────
// EXERCISES — read each one, then create the file it describes

// ─────────────────────────────────────────────
// 1. Named export
//    Create a file `math.js` with named exports:
//    - add(a, b)    → returns a + b
//    - subtract(a, b) → returns a - b
//    - multiply(a, b) → returns a * b
//    Then import and test all three below.

// import { add, subtract, multiply } from './math.js'
// console.log(add(2, 3))       → 5
// console.log(subtract(10, 4)) → 6
// console.log(multiply(3, 4))  → 12


// ─────────────────────────────────────────────
// 2. Default export
//    Create a file `greet.js` that default-exports a function:
//    greet(name) → "Hello, Alice!"
//    Import it below with any name you choose.

// import greet from './greet.js'
// console.log(greet("Alice"))  → "Hello, Alice!"


// ─────────────────────────────────────────────
// 3. Named + default together
//    Create `user.js` with:
//    - default export: a `createUser(name, role)` function
//    - named export: a `ROLES` object → { admin: "admin", guest: "guest" }
//    Import both below.

// import createUser, { ROLES } from './user.js'
// const u = createUser("Alice", ROLES.admin)
// console.log(u) → { name: "Alice", role: "admin" }


// ─────────────────────────────────────────────
// 4. Re-export
//    Create `index.js` inside a `utils/` folder that re-exports
//    everything from math.js and greet.js
//    So the consumer can do: import { add, greet } from './utils/index.js'

// your file structure here (as comments):
// utils/
//   math.js
//   greet.js
//   index.js  ← re-exports both


// ─────────────────────────────────────────────
// 5. Dynamic import
//    Use dynamic import() to load math.js only when needed
//    Expected: logs 7

async function loadMath() {
  // const { add } = await import('./math.js')
  // console.log(add(3, 4))
}

// loadMath()
