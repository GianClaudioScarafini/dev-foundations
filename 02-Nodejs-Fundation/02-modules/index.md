# 02 — Modules (CommonJS & ESM)

## Why modules?

Every file in Node is a module. Without modules, you'd have one giant file and no way to share code between files. Modules let you:
- Split code into focused, reusable pieces
- Control what you expose to the outside world
- Import built-in Node modules, npm packages, and your own files

## CommonJS (CJS) — the original Node way

```js
// math.js — exporting
function add(a, b) { return a + b }
function subtract(a, b) { return a - b }

module.exports = { add, subtract }   // export an object
// or export a single thing:
module.exports = add
```

```js
// index.js — importing
const { add, subtract } = require('./math')  // relative path, no extension needed
const add = require('./math')                 // if it exported a single thing
const fs = require('fs')                      // built-in module — no path needed
const express = require('express')            // npm package — no path needed
```

## ES Modules (ESM) — the modern way

```js
// math.js — exporting
export function add(a, b) { return a + b }
export const PI = 3.14159

export default function multiply(a, b) { return a * b }
```

```js
// index.js — importing
import { add, PI } from './math.js'     // named imports — file extension required
import multiply from './math.js'         // default import
import * as math from './math.js'        // import everything as an object
```

To use ESM in Node you need either:
- File extension `.mjs`, OR
- `"type": "module"` in your `package.json`

## Key differences

| | CommonJS | ESM |
|---|---|---|
| Syntax | `require` / `module.exports` | `import` / `export` |
| When loaded | At runtime (dynamic) | At parse time (static) |
| Default in Node | Yes (legacy) | Needs config |
| Default in bundlers | No | Yes |

## Key questions to answer before coding
- What is the difference between `module.exports = fn` and `module.exports = { fn }`?
- Why does ESM require the `.js` extension but CJS doesn't?
- What does `require` return?
- Can you `require` inside an `if` statement? Can you `import` inside one?

---

Go to `simple.js` when ready.
