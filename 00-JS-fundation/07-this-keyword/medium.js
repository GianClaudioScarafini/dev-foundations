// THIS KEYWORD — Medium
// call / apply / bind, timers, class methods, common real-world traps

// ─────────────────────────────────────────────
// 1. apply() with an array of args
//    Use .apply() to call `sum` with the numbers array as arguments
//    sum(1, 2, 3) → 6
//    Hint: apply passes array as individual args

function sum(a, b, c) {
  return a + b + c
}

const numbers = [1, 2, 3]

// your code here — use apply
var result = sum.apply(null, numbers)
console.log(result)


// ─────────────────────────────────────────────
// 2. bind() to create a preset function
//    Create `double` and `triple` by binding `multiply` with a preset first arg
//    double(5) → 10
//    triple(5) → 15

function multiply(factor, number) {
  return factor * number
}

// your code here
console.log("// 2. bind() to create a preset function")
const triple = multiply.bind(this,3)
const doble = multiply.bind(this,2)
console.log(doble(5))
console.log(triple(5))

// ─────────────────────────────────────────────
// 3. `this` inside a class
//    Fix the bug — the timer loses `this.name`
console.log("// 3. `this` inside a class")
class Greeter {
  constructor(name) {
    this.name = name
  }

  delayedHi(){
    setTimeout(()=> {
      console.log(`Hi from ${this.name}`)  
    }, 500)
  }
}

const g = new Greeter("Alice")
// g.delayedHi()  // → should log "Hi from Alice" after 500ms
console.log(g)
console.log(g.delayedHi())

//personal note:
//function() creates its own this. What this is depends on how it's called.
//When setTimeout calls your callback, it calls it as a plain function — so this becomes undefined (or window in browsers). Not your Greeter instance.
//An arrow function has no this of its own. It looks up this from the surrounding scope at the time it was defined — which is inside delayedHi, where this is your Greeter instance.
//Simple rule: arrow functions borrow this from where they're written. Regular functions get a new this based on how they're called.

// ─────────────────────────────────────────────
// 4. Method passed as callback
//    Fix this so it logs "Alice" inside forEach
//    Hint: don't use an arrow function on the method itself

class Printer {
  constructor(prefix) {
    this.prefix = prefix
  }
  
  printAll(items) {
    items.forEach((item)=> {
      console.log(`${this.prefix}: ${item}`)  // ← broken
    })
  }
}

const p = new Printer("Item")
// p.printAll(["apple", "banana"])  // → "Item: apple", "Item: banana"
console.log("// 4. Method passed as callback")
console.log(p.printAll(["apple", "banana"]))

// ─────────────────────────────────────────────
// 5. Explicit binding chain
//    Call `fullGreeting` with `person` as `this` using all three:
//    .call(), .apply(), and .bind() — one line each
//    Expected: "Alice from Paris says hello"

function fullGreeting() {
  return `${this.name} from ${this.city} says hello`
}

const person = { name: "Alice", city: "Paris" }

// with .call():
// with .apply():
// with .bind():
console.log("// 5. Explicit binding chain")
console.log(fullGreeting.apply(person))
console.log(fullGreeting.call(person))
let test = fullGreeting.bind(person)
console.log(test())



// ─────────────────────────────────────────────
// 6. Chained object methods with `this`
//    Build a simple builder that chains — complete the missing methods

const counter = {
  value: 0,
  increment() {
    this.value++
    return this  // ← enables chaining
  },
  decrement() {
    // your code here — decrement and return this
  },
  add(n) {
    // your code here — add n and return this
  },
  result() {
    return this.value
  }
}

// counter.increment().increment().add(5).decrement().result()  → 6


// ─────────────────────────────────────────────
// 7. What does `this` refer to? (predict without running)
//    Write your prediction next to each log

function outer() {
  console.log(this)  // → ?

  const inner = function() {
    console.log(this)  // → ?
  }

  const arrowInner = () => {
    console.log(this)  // → ?
  }

  inner()
  arrowInner()
}

outer()
