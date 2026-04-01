// THIS KEYWORD — Hard
// Real-world class patterns, event-like systems, tricky edge cases

// ─────────────────────────────────────────────
// 1. Auto-bind all methods in a class
//    Write `autoBind(instance)` that binds all methods of an object
//    to that object, so they work correctly even when extracted.
//
//    class Dog {
//      constructor(name) { this.name = name }
//      bark() { return `${this.name} says woof!` }
//    }
//
//    const dog = autoBind(new Dog("Rex"))
//    const bark = dog.bark
//    bark()  → "Rex says woof!"  (not broken)

// your code here


// ─────────────────────────────────────────────
// 2. EventEmitter-style pattern
//    Build a simple `EventEmitter` class:
//    - on(event, handler)   — register a listener
//    - emit(event, ...args) — call all listeners for that event
//    Handlers must be called with the emitter as `this`
//
//    const emitter = new EventEmitter()
//    emitter.on("greet", function(name) {
//      console.log(`${this.greeting}, ${name}!`)
//    })
//    emitter.greeting = "Hello"
//    emitter.emit("greet", "Alice")  → "Hello, Alice!"

// your code here


// ─────────────────────────────────────────────
// 3. Mixin pattern using call
//    Apply `serializeMixin` to any object using .call()
//    so that object gains a `serialize()` method using its own properties.
//
//    const serializeMixin = {
//      serialize() { return JSON.stringify(this) }
//    }
//
//    const product = { name: "Laptop", price: 999 }
//    Expected: '{"name":"Laptop","price":999}'

const serializeMixin = {
  serialize() { return JSON.stringify(this) }
}

const product = { name: "Laptop", price: 999 }

// your code here — call serialize with product as this


// ─────────────────────────────────────────────
// 4. Class with private-ish counter using closure + this
//    Create a `TaskQueue` class where:
//    - Tasks are added with add(fn)
//    - run() executes them all in sequence, with `this` as the queue
//    - Each fn receives the queue as its first argument
//    - A private `_count` tracks how many tasks have run
//
//    const q = new TaskQueue()
//    q.add(queue => console.log(`task 1, count: ${queue.count()}`))
//    q.add(queue => console.log(`task 2, count: ${queue.count()}`))
//    q.run()
//    → "task 1, count: 1"
//    → "task 2, count: 2"

// your code here


// ─────────────────────────────────────────────
// 5. Dangerous `this` in a reduce callback
//    Why does this fail? Fix it using bind.
//    Expected: { doubled: [2,4,6], sum: 12 }

const processor = {
  multiplier: 2,
  process(nums) {
    return nums.reduce(function(acc, n) {
      acc.doubled.push(n * this.multiplier)
      acc.sum += n * this.multiplier
      return acc
    }, { doubled: [], sum: 0 })  // ← broken: this.multiplier is undefined
  }
}

// console.log(processor.process([1, 2, 3]))


// ─────────────────────────────────────────────
// 6. Trace the `this` context — hardest version
//    Predict what each log prints WITHOUT running it first.
//    Comment your prediction, then verify.

const obj = {
  name: "outer",
  inner: {
    name: "inner",
    regularFn: function() { return this.name },
    arrowFn: () => this.name,
    method() {
      const reg = function() { return this.name }
      const arr = () => this.name
      return { reg: reg(), arr: arr() }
    }
  }
}

// obj.inner.regularFn()           → ?
// obj.inner.arrowFn()             → ?
// obj.inner.method().reg          → ?
// obj.inner.method().arr          → ?

// your predictions:
