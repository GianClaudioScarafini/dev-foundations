// CLOSURES — Hard
// Debounce, throttle, generators, advanced memory patterns

// ─────────────────────────────────────────────
// 1. Debounce
//    Write `debounce(fn, delay)`.
//    Calling the debounced function resets the timer.
//    fn only fires after `delay` ms of silence.
//    Classic use case: search input — don't fire on every keystroke.
//
//    const search = debounce(query => console.log("searching:", query), 300)
//    search("h")       ← starts timer
//    search("he")      ← resets timer
//    search("hel")     ← resets timer
//    search("hell")    ← resets timer
//    // 300ms passes
//    → logs "searching: hell" (only once)

// your code here


// ─────────────────────────────────────────────
// 2. Throttle
//    Write `throttle(fn, limit)`.
//    No matter how often it's called, fn fires at most once per `limit` ms.
//    Classic use case: scroll/resize handlers.
//
//    const onScroll = throttle(() => console.log("scroll!"), 500)
//    // called 10 times in 500ms → logs only once
//    // 500ms later, called again → logs again

// your code here


// ─────────────────────────────────────────────
// 3. Closure-based state machine
//    Build a traffic light using closures.
//    States cycle: green → yellow → red → green
//    next() advances to the next state and returns it.
//    current() returns the current state without advancing.
//
//    const light = createTrafficLight()
//    light.current()  → "green"
//    light.next()     → "yellow"
//    light.next()     → "red"
//    light.next()     → "green"
//    light.current()  → "green"

// your code here


// ─────────────────────────────────────────────
// 4. Event emitter using closures
//    Build a minimal event emitter WITHOUT using a class.
//    Return an object with:
//    - on(event, listener)
//    - off(event, listener)
//    - emit(event, ...args)
//
//    const emitter = createEmitter()
//    const handler = (name) => console.log(`Hello, ${name}!`)
//    emitter.on("greet", handler)
//    emitter.emit("greet", "Alice")  → "Hello, Alice!"
//    emitter.off("greet", handler)
//    emitter.emit("greet", "Bob")    → nothing

// your code here


// ─────────────────────────────────────────────
// 5. Lazy evaluation with closures
//    Write `lazy(fn)` that delays execution until `.get()` is called.
//    The result is computed only once, then cached.
//
//    let computed = 0
//    const expensiveValue = lazy(() => {
//      computed++
//      return 42
//    })
//
//    console.log(computed)          → 0  (not computed yet)
//    expensiveValue.get()           → 42 (computed now)
//    expensiveValue.get()           → 42 (cached — not recomputed)
//    console.log(computed)          → 1

// your code here


// ─────────────────────────────────────────────
// 6. Closure memory leak — identify and fix
//    This code has a memory leak caused by closures holding references.
//    Explain what the leak is, then fix it.

function attachHandlers(elements) {
  const largeData = new Array(1000000).fill("data")

  elements.forEach(el => {
    el.onClick = function() {
      // Only needs el.id — but the whole closure holds largeData
      console.log(el.id)
    }
  })
}

// explanation of the leak:
// fix:
