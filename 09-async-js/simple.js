// ASYNC JS — Simple
// Timers, basic promises, async/await fundamentals

// ─────────────────────────────────────────────
// 1. Predict the order
//    Before running this, write the order you think things log.
//    Then run it and check.

console.log("A")
setTimeout(() => console.log("B"), 0)
console.log("C")

// predicted order:
// actual order:


// ─────────────────────────────────────────────
// 2. Create a simple promise
//    Write `wait(ms)` that returns a promise resolving after `ms` milliseconds
//    Then use it to log "done" after 500ms

function wait(ms) {
  // return new Promise(...)
}

// wait(500).then(() => console.log("done"))


// ─────────────────────────────────────────────
// 3. Promise resolve and reject
//    Write `divide(a, b)` that returns a Promise:
//    - Resolves with a / b
//    - Rejects with an Error if b === 0
//
//    divide(10, 2).then(console.log)          → 5
//    divide(10, 0).catch(err => console.log(err.message))  → "Division by zero"

// your code here


// ─────────────────────────────────────────────
// 4. async/await basics
//    Rewrite this .then() chain using async/await

function fakeRequest() {
  return new Promise(resolve => setTimeout(() => resolve({ name: "Alice" }), 300))
}

// .then() version (already written):
fakeRequest().then(data => console.log(data.name))

// your async/await version:
async function loadUser() {
  // your code here
}

// loadUser()


// ─────────────────────────────────────────────
// 5. Chain two promises
//    Step 1: fetch a user (returns { id: 1, name: "Alice" })
//    Step 2: fetch their score using the id (returns { userId: 1, score: 95 })
//    Log: "Alice scored 95"

function getUser() {
  return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "Alice" }), 200))
}

function getScore(userId) {
  return new Promise(resolve => setTimeout(() => resolve({ userId, score: 95 }), 200))
}

// your code here — chain with .then() OR async/await


// ─────────────────────────────────────────────
// 6. try/catch with async/await
//    This function randomly fails. Handle the error and log "Request failed: <message>"

function riskyRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("success") : reject(new Error("server error"))
    }, 200)
  })
}

async function safeLoad() {
  // your code here
}

// safeLoad()


// ─────────────────────────────────────────────
// 7. Understand: await is not blocking the whole program
//    Predict what logs and in what order, then verify.

async function fetchData() {
  console.log("fetching...")
  const result = await new Promise(resolve => setTimeout(() => resolve("data"), 300))
  console.log("got:", result)
}

fetchData()
console.log("after fetchData() call")

// predicted order:
