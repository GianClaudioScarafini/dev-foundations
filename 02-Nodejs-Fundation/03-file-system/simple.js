// 03 — File System — Simple
// Goal: read and write files using fs/promises
// Run with: node simple.js

const fs = require('fs/promises')

// ─────────────────────────────────────────────
// 1. Write then read
//    a) Write a file called 'hello.txt' containing the text "Hello, Node!"
//    b) Read it back and log its contents
//    c) All in one async function called run()
//    d) Call run() at the bottom
//
//    Expected output: "Hello, Node!"

async function run() {
  // your code here
}

// ─────────────────────────────────────────────
// 2. Handle a missing file gracefully
//    Try to read a file called 'does-not-exist.txt'
//    Catch the error and log: "Error: file not found (ENOENT)"
//    If the error is NOT ENOENT, re-throw it.
//    Do NOT crash the process.

async function safeRead(filename) {
  // your code here
}


// ─────────────────────────────────────────────
// 3. Append a log entry
//    Write a function logEntry(message) that appends a line to 'app.log':
//    "[2024-01-15T10:30:00.000Z] message goes here\n"
//    Use the real current timestamp (new Date().toISOString())
//    Call it three times with different messages, then read the log file and print it.

async function logEntry(message) {
  // your code here
}


// ─────────────────────────────────────────────
// 4. Check if a file exists before reading
//    Write a function fileExists(path) that returns true or false.
//    Do NOT use try/catch — use fs.access() or fs.stat() instead.
//    Hint: fs.access() resolves if the file is accessible, rejects if not.

async function fileExists(filePath) {
  // your code here
}


// ─────────────────────────────────────────────
// Wire everything up — call your functions here

run()
  .then(() => safeRead('does-not-exist.txt'))
  .then(() => logEntry('Server started'))
  .then(() => logEntry('User logged in'))
  .then(() => logEntry('Request completed'))
  .then(async () => {
    console.log('hello.txt exists:', await fileExists('hello.txt'))
    console.log('ghost.txt exists:', await fileExists('ghost.txt'))
  })
  .catch(console.error)
