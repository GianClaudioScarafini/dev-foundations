// CLOSURES — Medium
// Practical patterns: once, debounce, partial application, module pattern

// ─────────────────────────────────────────────
// 1. once() — run only the first time
//    Write `once(fn)` — the returned function calls fn on first invocation only.
//    Every subsequent call returns the original result.
//
//    const init = once(() => { console.log("initialising..."); return 42 })
//    init()  → logs "initialising...", returns 42
//    init()  → returns 42, does NOT log again
//    init()  → returns 42, does NOT log again

// your code here


// ─────────────────────────────────────────────
// 2. Partial application
//    Write `partial(fn, ...args)` that pre-fills some arguments.
//    const add = (a, b, c) => a + b + c
//    const add10 = partial(add, 10)
//    add10(2, 3)   → 15
//    add10(0, 0)   → 10

// your code here


// ─────────────────────────────────────────────
// 3. Memoize
//    Write `memoize(fn)` that caches results by argument.
//    The same input should never recompute.
//
//    let count = 0
//    const expensiveSquare = memoize(n => { count++; return n * n })
//    expensiveSquare(5)  → 25  (count: 1)
//    expensiveSquare(5)  → 25  (count: still 1)
//    expensiveSquare(6)  → 36  (count: 2)

// your code here


// ─────────────────────────────────────────────
// 4. Module pattern (closure-based)
//    Build a `shoppingCart` module using only closures (no class).
//    Expose:
//    - addItem(name, price)
//    - removeItem(name)
//    - getTotal()
//    - getItems()
//    The internal items array must NOT be accessible directly.
//
//    shoppingCart.addItem("apple", 1.5)
//    shoppingCart.addItem("bread", 2.0)
//    shoppingCart.getTotal()  → 3.5
//    shoppingCart.items       → undefined

// your code here


// ─────────────────────────────────────────────
// 5. Accumulator
//    Write `makeAccumulator(initial)` that returns a function.
//    Each call adds to the running total and returns it.
//
//    const acc = makeAccumulator(0)
//    acc(5)   → 5
//    acc(10)  → 15
//    acc(3)   → 18

// your code here


// ─────────────────────────────────────────────
// 6. Closure in a loop — the right way
//    Create 5 functions that each remember their own index.
//    When called, each returns its own index.
//    fns[0]() → 0, fns[3]() → 3
//    Do NOT use let in the for loop — use a closure factory.

const fns = []

// your code here (hint: use a wrapper function to capture i)
