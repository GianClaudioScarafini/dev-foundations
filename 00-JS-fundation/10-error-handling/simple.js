// ERROR HANDLING — Simple
// try/catch basics, throwing errors, finally, error types

// ─────────────────────────────────────────────
// 1. Catch a thrown error
//    Wrap this in try/catch. Log the error message, not the whole object.
//    Expected: logs "Unexpected token 'n', "not json" is not valid JSON"

// your code here
JSON.parse("not json")


// ─────────────────────────────────────────────
// 2. finally always runs
//    Add a finally block. It should log "cleanup done" whether or not an error occurs.
//    Test with BOTH a passing and a failing JSON.parse.

// your code here


// ─────────────────────────────────────────────
// 3. Throw a custom message
//    Write `validateAge(age)`:
//    - Throws Error("Age must be a positive number") if age <= 0
//    - Throws Error("Age must be a number") if not a number
//    - Returns age otherwise
//
//    validateAge(25)       → 25
//    validateAge(-1)       → throws
//    validateAge("hello")  → throws

// your code here


// ─────────────────────────────────────────────
// 4. Catch specific message
//    Catch only the "not found" error — let all others bubble up

function lookupUser(id) {
  if (id === 0) throw new Error("not found")
  if (id < 0)  throw new Error("invalid id")
  return { id, name: "Alice" }
}

// your code here — catch "not found" only, re-throw others


// ─────────────────────────────────────────────
// 5. Error types
//    Match what error type each of these throws:
//    Then verify with instanceof in a catch block.

// a) null.toString()           → ? Error
// b) undeclaredVar             → ? Error
// c) eval("@#$%")              → ? Error
// d) decodeURIComponent("%")   → ? Error

// your code + comments here


// ─────────────────────────────────────────────
// 6. Safe JSON parse
//    Write `safeJSON(str)` that returns the parsed object,
//    or `null` if parsing fails. No uncaught errors.
//
//    safeJSON('{"name":"Alice"}')  → { name: "Alice" }
//    safeJSON("broken")            → null

// your code here


// ─────────────────────────────────────────────
// 7. Stack trace
//    Throw an error deep inside a call stack.
//    Call: a() → b() → c() — c() throws.
//    Catch it in a() and log error.stack.
//    Observe how the stack trace shows the call chain.

// your code here
