// ERROR HANDLING
// Errors happen. try/catch lets you handle them gracefully
// instead of crashing everything.

// ─────────────────────────────────────────────
// 1. Basic try/catch
//    This code will throw. Wrap it in try/catch and log the error message.
//    Expected: logs "Cannot read properties of null" (or similar)

// your code here — wrap the line below
JSON.parse("not valid json")


// ─────────────────────────────────────────────
// 2. finally
//    Add a `finally` block that always logs "done" — even if there's an error
//    Expected: logs the error message, then logs "done"

// your code here


// ─────────────────────────────────────────────
// 3. Throw your own error
//    Write a `divide(a, b)` function that throws if b is 0
//    Otherwise returns a / b
//    Expected:
//      divide(10, 2)  → 5
//      divide(10, 0)  → throws Error("Cannot divide by zero")

// your code here


// ─────────────────────────────────────────────
// 4. Custom error class
//    Create a `ValidationError` class that extends `Error`
//    It should set the name to "ValidationError"
//    Expected:
//      throw new ValidationError("email is required")
//      err.name    → "ValidationError"
//      err.message → "email is required"

// your code here


// ─────────────────────────────────────────────
// 5. Async error handling
//    This async function might fail. Handle the error with try/catch.
//    Log "fetch failed: <message>" if it throws.

function riskyFetch() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("network timeout")), 300)
  })
}

async function load() {
  // your code here
}

// load()


// ─────────────────────────────────────────────
// 6. Don't swallow errors
//    This pattern is dangerous — why? Add a comment explaining the problem.
//    Then fix it.

async function badLoad() {
  try {
    const data = await riskyFetch()
    return data
  } catch (e) {
    // silent — intentionally broken
  }
}

// your explanation and fix here
