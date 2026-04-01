// CLOSURES — Simple
// A closure is a function that remembers variables from its outer scope
// even after the outer function has finished executing.

// ─────────────────────────────────────────────
// 1. Basic closure
//    What does this log and why?
//    Write your explanation as a comment.

function outer() {
  const message = "hello"
  function inner() {
    console.log(message)
  }
  return inner
}

const fn = outer()
fn()  // → ?

// explanation:


// ─────────────────────────────────────────────
// 2. Counter factory
//    Write `makeCounter()` that returns a function.
//    Each call to the returned function increments and returns the count.
//
//    const counter = makeCounter()
//    counter()  → 1
//    counter()  → 2
//    counter()  → 3

// your code here


// ─────────────────────────────────────────────
// 3. Two independent counters
//    Using makeCounter from above, prove that two counters
//    are independent — they don't share state.
//
//    const c1 = makeCounter()
//    const c2 = makeCounter()
//    c1()  → 1
//    c1()  → 2
//    c2()  → 1  ← NOT 3

// your code here


// ─────────────────────────────────────────────
// 4. Greeting factory
//    Write `makeGreeter(greeting)` that returns a function
//    The returned function takes a name and returns the full greeting.
//
//    const sayHi    = makeGreeter("Hi")
//    const sayHello = makeGreeter("Hello")
//    sayHi("Alice")    → "Hi, Alice!"
//    sayHello("Bob")   → "Hello, Bob!"
//    sayHi("Carol")    → "Hi, Carol!"

// your code here


// ─────────────────────────────────────────────
// 5. Remember the last value
//    Write `makeLast()` that returns a function.
//    Each call saves the value. Calling with no args returns the last saved value.
//
//    const last = makeLast()
//    last("apple")
//    last("banana")
//    last()  → "banana"

// your code here


// ─────────────────────────────────────────────
// 6. Private variable
//    Closures can create "private" data — no direct access from outside.
//    Write `makeSecret(val)` that returns an object with:
//    - getSecret() → returns the val
//    - setSecret(newVal) → updates val
//    Direct access to val should be impossible.
//
//    const s = makeSecret("🔐")
//    s.getSecret()       → "🔐"
//    s.setSecret("🗝️")
//    s.getSecret()       → "🗝️"
//    s.val               → undefined

// your code here
