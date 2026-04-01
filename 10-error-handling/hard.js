// ERROR HANDLING — Hard
// Result type, error boundaries, centralized handling, production patterns

// ─────────────────────────────────────────────
// 1. Result type (no exceptions)
//    Implement a `Result` class with two static constructors:
//    - Result.ok(value)  — success
//    - Result.err(error) — failure
//    And methods:
//    - isOk() / isErr()
//    - map(fn)      — transform value if ok, pass through if err
//    - flatMap(fn)  — fn returns a Result; unwraps one level
//    - getOrElse(default) — returns value or default if err
//
//    Result.ok(5).map(n => n * 2).getOrElse(0)      → 10
//    Result.err("oops").map(n => n * 2).getOrElse(0) → 0
//    Result.ok(5).flatMap(n => Result.ok(n + 1)).getOrElse(0) → 6

// your code here


// ─────────────────────────────────────────────
// 2. Validated form fields using Result
//    Write validators that return Result.ok or Result.err:
//    - validateEmail(str)  — must contain @
//    - validatePassword(str) — min 8 chars
//    Then write `validateForm(email, password)` that runs both
//    and returns all errors at once (not just the first one)
//
//    validateForm("bad", "short")
//    → Result.err(["invalid email", "password too short"])
//
//    validateForm("a@b.com", "longenough")
//    → Result.ok({ email: "a@b.com", password: "longenough" })

// your code here


// ─────────────────────────────────────────────
// 3. Centralized error handler
//    Build an `ErrorHandler` class that:
//    - Registers handlers by error type: handler.register(ErrorClass, fn)
//    - Handles an error: handler.handle(error) — calls the right fn
//    - Falls back to a default handler if no match
//
//    const handler = new ErrorHandler()
//    handler.register(ValidationError, e => console.log(`Validation: ${e.message}`))
//    handler.register(NotFoundError, e => console.log(`404: ${e.message}`))
//    handler.setDefault(e => console.log(`Unknown: ${e.message}`))
//
//    handler.handle(new ValidationError("bad email"))  → "Validation: bad email"
//    handler.handle(new Error("crash"))                → "Unknown: crash"

// your code here


// ─────────────────────────────────────────────
// 4. Async error boundary
//    Write `withErrorBoundary(fn, fallback)` that wraps an async function.
//    If `fn` throws, call `fallback(error)` and return its result.
//    The wrapper must be transparent — same signature as fn.
//
//    const safeLoad = withErrorBoundary(
//      async (id) => { if (id < 0) throw new Error("bad id"); return { id } },
//      async (err) => ({ error: err.message })
//    )
//
//    await safeLoad(1)   → { id: 1 }
//    await safeLoad(-1)  → { error: "bad id" }

// your code here


// ─────────────────────────────────────────────
// 5. Error aggregator
//    Write `runAll(tasks)` — runs all async tasks and collects ALL errors.
//    Does not stop on first failure.
//    Returns { results: [...], errors: [...] }
//
//    const tasks = [
//      async () => "ok1",
//      async () => { throw new Error("fail2") },
//      async () => "ok3",
//      async () => { throw new Error("fail4") }
//    ]
//    runAll(tasks) → { results: ["ok1", "ok3"], errors: [Error("fail2"), Error("fail4")] }

// your code here


// ─────────────────────────────────────────────
// 6. Structured logging of errors
//    Write `createLogger()` that returns a logger object with:
//    - log(level, message, context)
//    - error(err, context)   — uses err.name, err.message, err.stack
//    Output is a JSON string with: { level, message, timestamp, ...context }
//    For errors also include: { errorType, stack }
//
//    const logger = createLogger()
//    logger.log("info", "user logged in", { userId: 42 })
//    → '{"level":"info","message":"user logged in","timestamp":"...","userId":42}'
//
//    logger.error(new ValidationError("bad email"), { requestId: "abc" })
//    → '{"level":"error","errorType":"ValidationError","message":"bad email",...}'

// your code here
