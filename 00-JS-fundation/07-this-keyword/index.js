// THE `this` KEYWORD
// `this` refers to the object that is executing the current function.
// Its value depends on HOW a function is called — not where it's defined.

// ─────────────────────────────────────────────
// 1. `this` in an object method
//    What does `this` refer to here? Add the greet method so it works.
//    Expected: person.greet() → "Hi, I'm Alice"

const person = {
  name: "Alice",
  greet() {
    // use `this` here
  return this.name
  }
}

console.log(person.greet())


// ─────────────────────────────────────────────
// 2. Losing `this`
//    Why does this break? Fix it without changing the object definition.
//    Expected: "Hi, I'm Alice"

const person2 = {
  name: "Alice",
  greet() {
    return `Hi, I'm ${this.name}`
  }
}

const fn = person2.greet.bind(person2)

console.log(fn())  // ← broken, fix this line only


// ─────────────────────────────────────────────
// 3. Arrow functions and `this`
//    Arrow functions don't have their own `this`.
//    Fix the `greet` method so it works correctly.

const person3 = {
  name: "Alice",
  greet() {
    return `Hi, I'm ${this.name}`  // ← why is this broken?
  }
}

console.log(person3.greet())  // expected: "Hi, I'm Alice"


// ─────────────────────────────────────────────
// 4. `this` with a timer
//    Fix this so it logs "Alice" after 1 second
//    Hint: arrow function inside setTimeout

console.log("// 4. `this` with a timer")
const person4 = {
  name: "Alice",
  greet() {
    setTimeout(()=>{
      console.log(this.name)  // ← broken
    }, 1000)
  }
}

person4.greet()


// ─────────────────────────────────────────────
// 5. Explicit binding — call and apply
//    Use .call() to make greet() run with `user` as `this`
//    Expected: "Hi, I'm Bob"

function greet() {
  return `Hi, I'm ${this.name}`
}

const user = { name: "Bob" }

// your code here
console.log("// 5. Explicit binding — call and apply")
console.log(greet.call(user))

// ─────────────────────────────────────────────
// 6. bind()
//    Create a `boundGreet` function permanently bound to `user`
//    so it always logs "Hi, I'm Bob" regardless of how it's called

// your code here
let boundGreet = greet.bind(user) 

console.log(boundGreet)