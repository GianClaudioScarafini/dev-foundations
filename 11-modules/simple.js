// MODULES — Simple
// Named exports, default exports, basic imports
// To run: rename to .mjs OR add "type": "module" to package.json

// ─────────────────────────────────────────────
// TASK: Create the files described below, then uncomment the imports to test.
// Each task requires you to CREATE a new file + test it here.

// ─────────────────────────────────────────────
// 1. Named exports — create math.js
//    Export three functions: add, subtract, multiply
//
//    File to create: ./math.js
//    add(2, 3)       → 5
//    subtract(10, 4) → 6
//    multiply(3, 4)  → 12

// import { add, subtract, multiply } from './math.js'
// console.log(add(2, 3))
// console.log(subtract(10, 4))
// console.log(multiply(3, 4))


// ─────────────────────────────────────────────
// 2. Default export — create greet.js
//    Default export a function: greet(name) → "Hello, {name}!"
//
//    File to create: ./greet.js

// import greet from './greet.js'
// console.log(greet("Alice"))  → "Hello, Alice!"
// console.log(greet("Bob"))    → "Hello, Bob!"


// ─────────────────────────────────────────────
// 3. Named + default — create user.js
//    Default export: createUser(name, role) → { name, role, id: Date.now() }
//    Named export:   ROLES = { admin: "admin", user: "user", guest: "guest" }
//
//    File to create: ./user.js

// import createUser, { ROLES } from './user.js'
// const u = createUser("Alice", ROLES.admin)
// console.log(u.name)  → "Alice"
// console.log(u.role)  → "admin"


// ─────────────────────────────────────────────
// 4. Constants file — create constants.js
//    Named exports: API_URL, MAX_RETRIES (= 3), TIMEOUT_MS (= 5000)
//
//    File to create: ./constants.js

// import { API_URL, MAX_RETRIES, TIMEOUT_MS } from './constants.js'
// console.log(MAX_RETRIES)  → 3


// ─────────────────────────────────────────────
// 5. Import everything as a namespace
//    Using the math.js you created above,
//    import ALL exports under the name `math`
//    math.add(1, 2) → 3

// import * as math from './math.js'
// console.log(math.add(1, 2))
// console.log(math.multiply(5, 5))


// ─────────────────────────────────────────────
// 6. Re-export in a single file — create utils/index.js
//    Re-export everything from math.js and greet.js
//    Consumer should be able to do:
//    import { add, greet } from './utils/index.js'

// File to create: ./utils/index.js
// Then test here:
// import { add, greet } from './utils/index.js'
// console.log(add(1, 1))      → 2
// console.log(greet("World")) → "Hello, World!"
