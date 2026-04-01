// ERROR HANDLING — Medium
// Custom error classes, async errors, re-throwing, error wrapping

// ─────────────────────────────────────────────
// 1. Custom error class
//    Create `ValidationError` and `NotFoundError` that extend Error.
//    Both should set this.name correctly.
//    Add a `statusCode` property: ValidationError → 400, NotFoundError → 404
//
//    const e = new ValidationError("email is required")
//    e.name        → "ValidationError"
//    e.message     → "email is required"
//    e.statusCode  → 400
//    e instanceof ValidationError  → true
//    e instanceof Error            → true

// your code here


// ─────────────────────────────────────────────
// 2. Catch by error type
//    Handle ValidationError and NotFoundError differently.
//    Any other error should be re-thrown.

function processRequest(type) {
  if (type === "validation") throw new ValidationError("name is required")
  if (type === "missing")    throw new NotFoundError("user not found")
  if (type === "crash")      throw new Error("unexpected crash")
  return "ok"
}

// your code here — catch and handle each type


// ─────────────────────────────────────────────
// 3. Async error handling
//    Both of these can fail. Catch errors for each separately
//    so one failure doesn't stop the other.

async function loadProfile() {
  throw new Error("profile service down")
}

async function loadSettings() {
  return { theme: "dark" }
}

async function loadDashboard() {
  // your code here
  // log: "Profile failed: profile service down"
  // log: "Settings: { theme: 'dark' }"
}

// loadDashboard()


// ─────────────────────────────────────────────
// 4. Error wrapping
//    Wrap low-level errors with context so they're easier to debug.
//    If `parseConfig` fails, throw a new Error that says:
//    "Failed to parse config: <original message>"
//    And attach the original error as `cause`

function parseConfig(str) {
  return JSON.parse(str)  // might throw
}

function loadConfig(str) {
  // your code here
}

// loadConfig("broken")
// → Error: "Failed to parse config: Unexpected token..."
// → error.cause → the original SyntaxError


// ─────────────────────────────────────────────
// 5. Global error handler pattern
//    Wrap an async function so it never throws — instead it returns [error, data]
//    This is the "go-style" error handling pattern.
//
//    async function fetchUser() { ... }
//    const [err, user] = await safeAsync(fetchUser())
//    if (err) { handle } else { use user }
//
//    Write `safeAsync(promise)` → returns [error, null] or [null, data]

// your code here


// ─────────────────────────────────────────────
// 6. Retry on specific error
//    Retry a request ONLY if the error is a NetworkError.
//    Give up immediately on any other error type.

class NetworkError extends Error {
  constructor(msg) { super(msg); this.name = "NetworkError" }
}

let attempt = 0
function unstableRequest() {
  attempt++
  if (attempt < 3) throw new NetworkError("connection reset")
  if (attempt === 4) throw new ValidationError("bad request")
  return "ok"
}

// your code here — retry on NetworkError, give up on others
