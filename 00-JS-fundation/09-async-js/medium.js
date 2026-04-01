// ASYNC JS — Medium
// Promise combinators, sequential vs parallel, real fetch patterns

// ─────────────────────────────────────────────
// 1. Promise.all — parallel fetch
//    Run all three requests at the SAME TIME (not one after another)
//    Log all three results together when done
//    Measure the difference: parallel should take ~300ms, not ~900ms

function fetchA() { return new Promise(r => setTimeout(() => r("A"), 300)) }
function fetchB() { return new Promise(r => setTimeout(() => r("B"), 300)) }
function fetchC() { return new Promise(r => setTimeout(() => r("C"), 300)) }

// your code here


// ─────────────────────────────────────────────
// 2. Promise.all — fail fast
//    If ANY promise rejects, Promise.all rejects immediately.
//    Handle the error below.

const p1 = new Promise(r => setTimeout(() => r("ok"), 100))
const p2 = new Promise((_, x) => setTimeout(() => x(new Error("p2 failed")), 200))
const p3 = new Promise(r => setTimeout(() => r("ok"), 300))

// your code here — run all three, catch any error


// ─────────────────────────────────────────────
// 3. Promise.allSettled — don't fail fast
//    Use Promise.allSettled to get ALL results regardless of failures
//    Log each result: "fulfilled: value" or "rejected: reason"

const requests = [
  Promise.resolve("user data"),
  Promise.reject(new Error("network error")),
  Promise.resolve("product list")
]

// your code here


// ─────────────────────────────────────────────
// 4. Promise.race
//    Return the fastest response — first to resolve wins
//    Log which server "won"

function server(name, ms) {
  return new Promise(r => setTimeout(() => r(`${name} responded`), ms))
}

// your code here — race between server("A", 400), server("B", 200), server("C", 600)


// ─────────────────────────────────────────────
// 5. Sequential vs parallel — spot the difference
//    Version A runs requests one after another (~600ms total)
//    Version B runs them in parallel (~300ms total)
//    Write BOTH versions, then explain the difference in a comment

function fakeLoad(id) {
  return new Promise(r => setTimeout(() => r(`item-${id}`), 300))
}

// Version A (sequential — slower):
async function loadSequential() {
  // your code here
}

// Version B (parallel — faster):
async function loadParallel() {
  // your code here
}


// ─────────────────────────────────────────────
// 6. Real fetch — async/await with error handling
//    Fetch from https://jsonplaceholder.typicode.com/users/1
//    Log: "Name: Leanne Graham, Email: Sincere@april.biz"
//    Handle network errors AND non-200 responses

async function getUser() {
  // your code here
}

// getUser()


// ─────────────────────────────────────────────
// 7. Async map — transform array items with async functions
//    `fetchPrice` is async. Map over all product ids and get their prices.
//    Expected: [10, 20, 30]  (in order)

function fetchPrice(id) {
  return new Promise(r => setTimeout(() => r(id * 10), Math.random() * 300))
}

async function getAllPrices(ids) {
  // your code here — don't use a for loop
}

// getAllPrices([1, 2, 3]).then(console.log)
