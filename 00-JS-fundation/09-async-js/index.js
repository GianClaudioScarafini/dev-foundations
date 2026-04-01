// ASYNC JS — callbacks, promises, async/await
// JS is single-threaded. Async lets you handle things that take time
// (network, timers, file reads) without blocking everything else.

// ─────────────────────────────────────────────
// 1. setTimeout — basic async
//    Log "start", then after 1 second log "done"
//    Notice the order of execution

console.log("start")
// your code here — log "done" after 1 second
console.log("end")  // ← this runs before "done". Why?


// ─────────────────────────────────────────────
// 2. Callback pattern
//    Complete `fetchUser` so it calls `callback` after a fake 500ms delay
//    Expected: callback receives { id: 1, name: "Alice" }

function fetchUser(id, callback) {
  // simulate network delay with setTimeout
  // your code here
}

// fetchUser(1, (user) => console.log(user))


// ─────────────────────────────────────────────
// 3. Promise — create one
//    Complete `getUser` so it returns a Promise
//    Resolve with { id: 1, name: "Alice" } after 500ms
//    Expected:
//      getUser(1).then(user => console.log(user))

function getUser(id) {
  // return new Promise(...)
}

// getUser(1).then(user => console.log(user))


// ─────────────────────────────────────────────
// 4. Promise chaining
//    Chain two fake async operations:
//    getUser(1) → then get their posts → log posts
//    Use .then().then()

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 300)
  })
}

// your code here — chain getUser and getPosts


// ─────────────────────────────────────────────
// 5. async/await
//    Rewrite exercise 4 using async/await instead of .then()

async function loadUserPosts() {
  // your code here
}

// loadUserPosts()


// ─────────────────────────────────────────────
// 6. Promise.all
//    Run both fetches in parallel and log both results together
//    Don't await them one at a time — that defeats the purpose

function getComments() {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Nice!", "Great post"]), 400)
  })
}

async function loadAll() {
  // your code here — use Promise.all
}

// loadAll()


// ─────────────────────────────────────────────
// 7. Real fetch (Node 18+ / browser)
//    Fetch a real URL and log the first todo item's title
//    URL: https://jsonplaceholder.typicode.com/todos/1

async function getTodo() {
  // your code here
}

// getTodo()
