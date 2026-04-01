// FUNCTIONS AND SCOPE — Hard
// Currying, partial application, pipe, pure functions, real patterns

// ─────────────────────────────────────────────
// 1. Curry a function
//    Write `curry(fn)` that turns a multi-arg function into a curried version.
//    Each call with one argument returns a new function until all args are filled.
//
//    const add = (a, b, c) => a + b + c
//    const curriedAdd = curry(add)
//    curriedAdd(1)(2)(3)     → 6
//    curriedAdd(1)(2)        → function (waiting for c)
//    curriedAdd(1, 2)(3)     → 6  ← bonus: handle multiple args per call

// your code here


// ─────────────────────────────────────────────
// 2. Partial application
//    Write `partial(fn, ...presetArgs)` that pre-fills some arguments.
//    const multiply = (a, b, c) => a * b * c
//    const double = partial(multiply, 2, 1)
//    double(5)   → 10
//    double(10)  → 20

// your code here


// ─────────────────────────────────────────────
// 3. pipe — left-to-right composition
//    Write `pipe(...fns)` that composes functions left to right.
//    (Opposite of compose — first function runs first.)
//
//    const process = pipe(
//      x => x * 2,
//      x => x + 1,
//      x => `result: ${x}`
//    )
//    process(5)  → "result: 11"  (5*2=10, 10+1=11)

// your code here


// ─────────────────────────────────────────────
// 4. Memoize with arity awareness
//    Write `memoize(fn)` for functions with multiple arguments.
//    The cache key must account for ALL arguments.
//
//    let calls = 0
//    const add = memoize((a, b) => { calls++; return a + b })
//    add(1, 2)  → 3  (calls: 1)
//    add(1, 2)  → 3  (calls: 1 — cached)
//    add(1, 3)  → 4  (calls: 2 — different args)

// your code here


// ─────────────────────────────────────────────
// 5. Trampolining — fix stack overflow
//    Recursive functions can overflow the stack on large inputs.
//    `factorial` below crashes for large n. Rewrite using a trampoline.
//
//    function factorial(n, acc = 1) {
//      if (n <= 1) return acc
//      return factorial(n - 1, n * acc)  // ← stack overflow at ~10000
//    }
//
//    A trampoline keeps calling the function until it gets a non-function back.
//    trampoline(factorial)(10000)  → a very big number, no stack overflow

// your code here


// ─────────────────────────────────────────────
// 6. Function overloading pattern
//    JS doesn't have overloading but you can simulate it by inspecting arguments.
//    Write `format(value)` that behaves differently by type:
//    - number → "$42.00"
//    - string → "\"hello\""  (wrapped in quotes)
//    - Date   → "2024-01-15" (ISO date part only)
//    - array  → "[1, 2, 3]"  (joined with ", ")
//    - other  → String(value)
//
//    format(42.5)                       → "$42.50"
//    format("hello")                    → '"hello"'
//    format(new Date("2024-01-15"))      → "2024-01-15"
//    format([1, 2, 3])                  → "[1, 2, 3]"

// your code here


// ─────────────────────────────────────────────
// 7. Once, before, after — function decorators
//    Write three function decorators:
//    - once(fn)        — fn runs only the first time, returns same result after
//    - before(fn, n)   — fn runs only the first n times, then returns undefined
//    - after(fn, n)    — fn runs only AFTER being called n times
//
//    const log = once(() => console.log("init"))
//    log()  → "init"
//    log()  → nothing
//
//    const first3 = before(x => x * 2, 3)
//    first3(1) → 2, first3(2) → 4, first3(3) → 6, first3(4) → undefined
//
//    const lastOne = after(x => x * 10, 3)
//    lastOne(1) → undefined, lastOne(2) → undefined, lastOne(3) → 30

// your code here
