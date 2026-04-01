// 01 — Node vs Browser — Simple
// Goal: get comfortable with Node globals and process object
// Run with: node simple.js
// Run with args: node simple.js hello world

// ─────────────────────────────────────────────
// 1. Log these four things to the console:
//    - The Node.js version currently running
//    - The operating system platform
//    - The absolute path to this file
//    - The absolute path to this file's directory
//
// Do NOT hardcode strings. Use the right Node globals.

// your code here


// ─────────────────────────────────────────────
// 2. Command-line arguments
//    process.argv is an array. Log it and inspect what's in it.
//    Then write code that prints ONLY the arguments the user passes.
//    Example: `node simple.js foo bar` should print: [ 'foo', 'bar' ]
//    Tip: the first two elements of process.argv are always Node and the file path.

// your code here


// ─────────────────────────────────────────────
// 3. Greet from the CLI
//    Read the first argument the user passes.
//    If they passed one, log: "Hello, <name>!"
//    If they didn't, log: "Hello, stranger!"
//    Example: `node simple.js Gian` → "Hello, Gian!"

// your code here


// ─────────────────────────────────────────────
// 4. What does NOT exist in Node?
//    The code below would run fine in a browser.
//    In Node it will crash. Without running it, predict the error.
//    Then comment it out and write what error you expected.

// const el = document.getElementById('app')
// window.scrollTo(0, 0)
// localStorage.setItem('key', 'value')

// I expect this to crash because:
// (your answer here)


// ─────────────────────────────────────────────
// 5. Exit codes
//    process.exit(code) stops the Node process.
//    Exit code 0 = success, anything else = failure.
//    Write a function checkAge(age) that:
//    - If age >= 18: logs "Access granted" and exits with code 0
//    - If age < 18: logs "Access denied" and exits with code 1
//    Call it with checkAge(16) to test.

// your code here
