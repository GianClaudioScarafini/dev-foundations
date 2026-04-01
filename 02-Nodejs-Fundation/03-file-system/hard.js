// 03 — File System — Hard
// Goal: build a real file-watching log processor
// Run with: node hard.js

// ─────────────────────────────────────────────
// Challenge: Log File Processor
//
// No starter code. You design the solution.
//
// Background: servers write log files like this — one JSON object per line:
//   {"level":"info","msg":"Server started","timestamp":"2024-01-15T10:00:00Z"}
//   {"level":"error","msg":"DB connection failed","timestamp":"2024-01-15T10:00:05Z"}
//   {"level":"warn","msg":"Memory usage high","timestamp":"2024-01-15T10:01:00Z"}
//   {"level":"info","msg":"Request: GET /api/users","timestamp":"2024-01-15T10:01:02Z"}
//   {"level":"error","msg":"Unhandled exception","timestamp":"2024-01-15T10:01:10Z"}
//
// Requirements:
//
// 1. generateLogs()
//    Create a file called 'server.log' with at least 10 log entries (mix of levels).
//    Each entry must be valid JSON on its own line (NDJSON format).
//    Use real timestamps spread across a few minutes.
//
// 2. parseLogs(filePath)
//    Read the log file and parse each line as JSON.
//    Return an array of log objects.
//    Skip any lines that are empty or fail to parse (don't crash).
//
// 3. analyseLogs(logs)
//    Return a report object:
//    {
//      total: number,
//      byLevel: { info: N, warn: N, error: N },
//      errors: [ array of error messages only ],
//      firstEntry: timestamp string,
//      lastEntry: timestamp string,
//    }
//
// 4. writeReport(report, outputPath)
//    Write the report to a file as formatted JSON.
//    Then ALSO append a human-readable summary to 'summary.txt':
//    "=== Log Report ===
//    Total entries: 10
//    Errors: 2
//    Warnings: 1
//    Info: 7
//    Time range: 2024-01-15T10:00:00Z → 2024-01-15T10:01:10Z
//    ==================
//    "
//
// 5. watchAndProcess(logPath)
//    Use fs.watch() to watch server.log for changes.
//    When the file changes, re-run parseLogs + analyseLogs + writeReport.
//    Log "Log file updated — report regenerated" each time.
//    Tip: fs.watch() is in the callback-style 'fs' module, not 'fs/promises'.
//    Run this for 10 seconds then exit cleanly.
//
// When you're done, ask yourself:
// - What happens if two writes happen to the file at the same moment?
// - How would you rotate logs (archive and start fresh) when the file exceeds 1MB?
// - Why is fs.watch() not reliable across all operating systems?

const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')

// your code here
