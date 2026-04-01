// THIS KEYWORD — Simple
// Understand what `this` points to in different contexts

// ─────────────────────────────────────────────
// 1. `this` in a method
//    Make `greet()` return "Hi, I'm Alice" using `this`

const person = {
  name: "Alice",
  greet() {
    // your code here
  }
}

console.log(person.greet())  // → "Hi, I'm Alice"


// ─────────────────────────────────────────────
// 2. Method using multiple `this` properties
//    Complete `describe()` to return "Bob is 28 years old"

const user = {
  name: "Bob",
  age: 28,
  describe() {
    // your code here
  }
}

console.log(user.describe())  // → "Bob is 28 years old"


// ─────────────────────────────────────────────
// 3. Spot the bug
//    Why does this return "Hi, I'm undefined"?
//    Explain in a comment, then fix it.

const speaker = {
  name: "Carol",
  greet: () => {
    return `Hi, I'm ${this.name}`
  }
}

// console.log(speaker.greet())  // → "Hi, I'm undefined"
// explanation:
// fix:


// ─────────────────────────────────────────────
// 4. `this` is lost when function is extracted
//    Explain why `fn()` fails, then fix with .bind()

const robot = {
  model: "R2D2",
  identify() {
    return `I am ${this.model}`
  }
}

const fn = robot.identify
// console.log(fn())  // → crashes or "I am undefined"
// explanation:
// fix:


// ─────────────────────────────────────────────
// 5. call() — borrow a method
//    Use .call() to run `introduce` with `guest` as `this`
//    Expected: "Hi I'm Dave, I work at Acme"

function introduce() {
  return `Hi I'm ${this.name}, I work at ${this.company}`
}

const guest = { name: "Dave", company: "Acme" }

// your code here


// ─────────────────────────────────────────────
// 6. Predict the output
//    Before running this, write what you think each line logs.
//    Then run it to check.

const obj = {
  value: 42,
  getValue() {
    return this.value
  }
}

const standalone = obj.getValue
const bound = obj.getValue.bind(obj)

// console.log(obj.getValue())   // → ?
// console.log(standalone())     // → ?
// console.log(bound())          // → ?

// your predictions:
// obj.getValue()  →
// standalone()    →
// bound()         →
