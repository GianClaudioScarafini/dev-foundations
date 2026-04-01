// 02 — Modules — Simple
// Goal: understand require/exports and built-in modules
// Run with: node simple.js

// ─────────────────────────────────────────────
// 1. Predict the output — no running allowed yet
//    Read the code below. Write your prediction as a comment.
//    Then run it and see if you were right.

const path = require('path')

const filePath = '/Users/gian/projects/api/src/routes/users.js'

console.log(path.basename(filePath))       // ?
console.log(path.dirname(filePath))        // ?
console.log(path.extname(filePath))        // ?
console.log(path.join('/api', 'v1', 'users')) // ?

// My prediction:
// basename:
// dirname:
// extname:
// join:


// ─────────────────────────────────────────────
// 2. Use the built-in 'os' module
//    Require it and log:
//    - The machine's hostname
//    - Total memory in GB (round to 1 decimal place)
//    - Free memory in GB (round to 1 decimal place)
//    - The home directory path
//
//    Check the Node docs if you don't know the method names.

const os = require('os')

// your code here


// ─────────────────────────────────────────────
// 3. Create and import your own module
//    Create a file called `stringUtils.js` in this same folder.
//    Export these three functions from it:
//
//    - capitalize(str)     → "hello" → "Hello"
//    - truncate(str, max)  → ("hello world", 7) → "hello w..."
//    - countWords(str)     → "hello world foo" → 3
//
//    Then require it here and test each function with a sample string.

// your code here (after you've created stringUtils.js)


// ─────────────────────────────────────────────
// 4. module.exports shapes
//    Which of these is correct and which will break? Explain why.
//
//    // File A
//    module.exports.greet = function() { return 'hi' }
//    module.exports.farewell = function() { return 'bye' }
//    // Usage: const { greet } = require('./a')
//
//    // File B
//    module.exports = function greet() { return 'hi' }
//    module.exports = function farewell() { return 'bye' }
//    // Usage: const { greet, farewell } = require('./b')
//
// My explanation:
// File A:
// File B: (what gets exported? what does require return?)
