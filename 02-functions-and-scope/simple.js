// FUNCTIONS AND SCOPE — Simple
// Declaration vs expression, parameters, return values, scope basics

// ─────────────────────────────────────────────
// 1. Function declaration vs expression
//    Write the same function both ways:
//    a) as a function declaration named `double`
//    b) as a function expression stored in `doubleExpr`
//    Both: take a number and return it multiplied by 2

// your code here


// ─────────────────────────────────────────────
// 2. Arrow function shorthand
//    Rewrite each as an arrow function (shortest possible form)

function square(n) { return n * n }
function greet(name) { return `Hello, ${name}!` }
function add(a, b) { return a + b }

// square  →
// greet   →
// add     →


// ─────────────────────────────────────────────
// 3. Default parameters
//    Write `createTag(content, tag)` where tag defaults to "p"
//    createTag("Hello")           → "<p>Hello</p>"
//    createTag("Hello", "h1")     → "<h1>Hello</h1>"

// your code here


// ─────────────────────────────────────────────
// 4. Rest parameters
//    Write `sum(...nums)` that adds any number of arguments
//    sum(1, 2, 3)       → 6
//    sum(10, 20)        → 30
//    sum(1, 2, 3, 4, 5) → 15

// your code here


// ─────────────────────────────────────────────
// 5. Scope — predict the output
//    Write your prediction before running each block

let x = "global"

function test() {
  let x = "local"
  console.log(x)  // → ?
}

test()
console.log(x)  // → ?

// predictions:


// ─────────────────────────────────────────────
// 6. Hoisting
//    Predict what logs — remember: declarations are hoisted, expressions are not

// console.log(hoisted())   // → ?
// console.log(notHoisted) // → ?

function hoisted() { return "I work!" }
const notHoisted = () => "I also work"

// predictions + explanation:


// ─────────────────────────────────────────────
// 7. Return early pattern
//    Write `getDiscount(price, isMember)`:
//    - If price <= 0, return 0
//    - If isMember is true, return price * 0.8 (20% off)
//    - Otherwise return price
//    Use early returns — no if/else nesting

// your code here
