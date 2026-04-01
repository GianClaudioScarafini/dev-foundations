// 02 — Modules — Medium
// Goal: design a module structure for a real feature
// Run with: node medium.js

// ─────────────────────────────────────────────
// Context: you're building a small task management CLI.
// You need to split it into focused modules.
//
// Create these files alongside this one:
//   validator.js   — input validation functions
//   formatter.js   — display/formatting functions
//   tasks.js       — task logic (create, complete, filter)
//
// Then use them all here in medium.js.

// ─────────────────────────────────────────────
// 1. validator.js
//    Export these functions using module.exports:
//
//    isNonEmptyString(val)  → true if val is a string with length > 0
//    isValidPriority(val)   → true if val is 'low', 'medium', or 'high'
//    isPositiveInteger(val) → true if val is an integer > 0

// (create the file, then require it below)
const validator = require('./validator')

// Test your validator:
console.log(validator.isNonEmptyString(''))       // false
console.log(validator.isNonEmptyString('buy milk')) // true
console.log(validator.isValidPriority('urgent'))    // false
console.log(validator.isValidPriority('high'))      // true
console.log(validator.isPositiveInteger(-1))        // false
console.log(validator.isPositiveInteger(5))         // true


// ─────────────────────────────────────────────
// 2. formatter.js
//    Export these functions:
//
//    formatTask(task) — takes a task object and returns a formatted string:
//      "[x] Buy milk (high) — due: 2024-12-31"  (if done)
//      "[ ] Buy milk (high) — due: 2024-12-31"  (if not done)
//
//    formatList(tasks) — takes an array of tasks, returns a numbered list string:
//      "1. [ ] Buy milk (high)\n2. [x] Read book (low)\n..."
//
//    summarise(tasks) — returns:
//      "3 tasks — 1 done, 2 remaining"

const formatter = require('./formatter')


// ─────────────────────────────────────────────
// 3. tasks.js
//    Export a createTask(title, priority, dueDate) factory function.
//    It should return a task object with:
//      id: auto-incrementing number (use a module-level counter)
//      title: string
//      priority: 'low' | 'medium' | 'high'
//      dueDate: string (YYYY-MM-DD)
//      done: false
//      createdAt: ISO timestamp string of now
//
//    Also export markDone(task) — returns a new task object with done: true
//    (do NOT mutate the original — return a copy)
//
//    Also export filterByPriority(tasks, priority) — returns filtered array

const { createTask, markDone, filterByPriority } = require('./tasks')


// ─────────────────────────────────────────────
// 4. Wire it all together here
//    - Create 4 tasks with different priorities and due dates
//    - Validate each one before adding (use validator)
//    - Mark 2 of them as done
//    - Filter and display only 'high' priority tasks
//    - Print the full formatted list
//    - Print the summary

// your code here
