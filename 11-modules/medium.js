// MODULES — Medium
// Barrel files, aliased imports, dynamic imports, module design patterns

// ─────────────────────────────────────────────
// 1. Rename on import (alias)
//    Import `multiply` from math.js but alias it as `times`
//    Also import `add` normally alongside it

// import { add, multiply as times } from './math.js'
// console.log(times(3, 4))  → 12
// console.log(add(3, 4))    → 7

// your import line here + test


// ─────────────────────────────────────────────
// 2. Rename on export
//    Create validators.js with:
//    - internal function `checkEmail(str)` → true if contains @
//    - internal function `checkLength(str, min)` → true if long enough
//    - Export them as `validateEmail` and `validateLength`
//    (rename at the export, not internally)
//
//    File to create: ./validators.js

// import { validateEmail, validateLength } from './validators.js'
// console.log(validateEmail("a@b.com"))     → true
// console.log(validateEmail("notanemail"))  → false
// console.log(validateLength("hello", 3))  → true


// ─────────────────────────────────────────────
// 3. Barrel pattern — services/index.js
//    Create three service files:
//    services/userService.js  — export getUser(id), createUser(name)
//    services/postService.js  — export getPost(id), createPost(title)
//    services/authService.js  — export login(email, pass), logout()
//    Then create services/index.js that re-exports everything
//
//    Consumer only needs one import:
//    import { getUser, login, getPost } from './services/index.js'

// your file structure + test imports here


// ─────────────────────────────────────────────
// 4. Dynamic import — load on demand
//    Import math.js ONLY when the user clicks (simulate with a condition)
//    Use dynamic import() — it returns a promise

async function calculate(a, b) {
  const condition = true  // pretend this is a user action
  if (condition) {
    // dynamically import math.js here
    // const { add } = await import('./math.js')
    // return add(a, b)
  }
}

// calculate(3, 4).then(console.log)  → 7


// ─────────────────────────────────────────────
// 5. Module with init pattern
//    Create config.js that:
//    - Has a private `_config` object (not exported)
//    - Exports `init(options)` that sets `_config`
//    - Exports `get(key)` that reads from `_config`
//    - Exports `getAll()` that returns a copy (not the original)
//
//    File to create: ./config.js

// import { init, get, getAll } from './config.js'
// init({ db: "postgres", port: 5432 })
// get("db")       → "postgres"
// getAll().port   → 5432
// getAll() === getAll()  → false  (different copies)


// ─────────────────────────────────────────────
// 6. Circular dependency — understand and avoid
//    Read this scenario. Explain in a comment why it's a problem,
//    then restructure the files to fix it.
//
//    // a.js
//    import { b } from './b.js'
//    export const a = `a uses ${b}`
//
//    // b.js
//    import { a } from './a.js'
//    export const b = `b uses ${a}`
//
//    Problem:
//    Fix:
