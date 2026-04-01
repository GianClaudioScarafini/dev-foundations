// FUNCTIONS AND SCOPE — Medium
// Higher-order functions, callbacks, IIFE, var/let/const traps

// ─────────────────────────────────────────────
// 1. Function as argument (callback)
//    Write `applyTwice(fn, value)` that applies fn to value twice
//    applyTwice(x => x * 2, 3)  → 12
//    applyTwice(x => x + 1, 5)  → 7

// your code here


// ─────────────────────────────────────────────
// 2. Function returning a function
//    Write `multiplier(factor)` that returns a function
//    const triple = multiplier(3)
//    triple(5)  → 15
//    triple(10) → 30

// your code here


// ─────────────────────────────────────────────
// 3. var vs let — the classic loop trap
//    Predict what this logs, then fix it using let

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// logs: ?  (not what you expect)

// explanation:
// fix using let:


// ─────────────────────────────────────────────
// 4. IIFE — immediately invoked function expression
//    Wrap this code in an IIFE so `secret` doesn't pollute the outer scope
//    The IIFE should return the result of the calculation

const secret = 42
const result = secret * 2

// rewrite as IIFE:
// const result = (function() { ... })()


// ─────────────────────────────────────────────
// 5. Function composition
//    Write `compose(f, g)` where compose(f, g)(x) === f(g(x))
//    const double = x => x * 2
//    const addOne = x => x + 1
//    const doubleAfterAdd = compose(double, addOne)
//    doubleAfterAdd(3)  → 8  (3+1=4, 4*2=8)

// your code here


// ─────────────────────────────────────────────
// 6. Closure over a loop
//    Create an array of 5 functions.
//    Each function should return its own index when called.
//    fns[0]() → 0, fns[2]() → 2, fns[4]() → 4

const fns = []

// broken version (don't fix this, just explain why it's broken):
for (var j = 0; j < 5; j++) {
  fns.push(() => j)
}

// your fix + explanation:


// ─────────────────────────────────────────────
// 7. Arguments object vs rest params
//    `oldStyle` uses the arguments object.
//    Rewrite it as `newStyle` using rest parameters and arrow function.

function oldStyle() {
  let total = 0
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

// your newStyle here
// Note: why can't you use arguments in an arrow function?
