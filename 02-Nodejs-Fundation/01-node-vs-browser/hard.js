// 01 — Node vs Browser — Hard
// Goal: demonstrate real understanding of Node's execution model
// Run with: node hard.js

// ─────────────────────────────────────────────
// Challenge: Build a configurable CLI script runner
//
// No starter code. You design the solution.
//
// Requirements:
//
// 1. The script accepts a --mode flag from the CLI.
//    node hard.js --mode dev
//    node hard.js --mode prod
//    node hard.js --mode bench
//
//    Parse process.argv manually — do NOT use any external library.
//    If --mode is missing or invalid, print usage instructions and exit(1).
//
// 2. Depending on the mode, run a different task:
//
//    dev:   Every 1 second, log "[ dev ] tick N" (N increments from 1)
//           Stop automatically after 5 ticks.
//
//    prod:  Log "[ prod ] System info:" then log these values:
//             - Platform
//             - Node version
//             - Process PID (process.pid)
//             - Memory usage in MB (process.memoryUsage().heapUsed / 1024 / 1024, rounded to 2dp)
//           Then exit(0).
//
//    bench: Measure how long it takes to sum all numbers from 1 to 10,000,000.
//           Use Date.now() or process.hrtime.bigint() for timing.
//           Log: "[ bench ] Sum: <result> — Time: <Xms>"
//           Then exit(0).
//
// 3. Handle SIGINT (Ctrl+C) gracefully:
//    Listen for the 'SIGINT' signal on process.
//    Log "Caught interrupt — cleaning up..." then exit(0).
//    Tip: process.on('SIGINT', handler)
//
// When you're done, ask yourself:
// - How would you add a --help flag?
// - What would you do differently if this script needed to accept 10 different flags?
// - Why does Node need explicit exit() calls after setInterval, but not after synchronous code?

// your code here
