// ASYNC JS — Hard
// Real-world patterns: retry, throttle, queue, cancellation

// ─────────────────────────────────────────────
// 1. Retry with backoff
//    Write `retry(fn, times)` that calls an async function up to `times` times.
//    If it fails every time, reject with the last error.
//    Add 100ms delay between retries.
//
//    let attempts = 0
//    const flakyRequest = () => new Promise((resolve, reject) => {
//      attempts++
//      attempts < 3 ? reject(new Error("fail")) : resolve("success")
//    })
//
//    retry(flakyRequest, 5).then(console.log)  → "success" (after 2 retries)

// your code here


// ─────────────────────────────────────────────
// 2. Timeout wrapper
//    Write `withTimeout(promise, ms)` that rejects if the promise
//    takes longer than `ms` milliseconds.
//
//    const slow = new Promise(r => setTimeout(() => r("done"), 2000))
//    withTimeout(slow, 500).catch(e => console.log(e.message))
//    → "Request timed out"

// your code here


// ─────────────────────────────────────────────
// 3. Async queue with concurrency limit
//    Write `asyncQueue(tasks, limit)` that runs async tasks
//    with a maximum of `limit` running at the same time.
//
//    const tasks = [1,2,3,4,5].map(i => () =>
//      new Promise(r => setTimeout(() => { console.log(`done ${i}`); r(i) }, 200))
//    )
//    asyncQueue(tasks, 2)
//    → runs max 2 at a time, logs in completion order

// your code here


// ─────────────────────────────────────────────
// 4. Cache async results
//    Write `cachedFetch(url)` that caches responses by URL.
//    The same URL should never trigger a real fetch twice.
//
//    let fetchCount = 0
//    const mockFetch = (url) => { fetchCount++; return Promise.resolve(`data:${url}`) }
//
//    cachedFetch("api/users")   // fetchCount → 1
//    cachedFetch("api/users")   // fetchCount → still 1 (cached)
//    cachedFetch("api/posts")   // fetchCount → 2

// your code here


// ─────────────────────────────────────────────
// 5. Promise from scratch
//    Implement a simplified `MyPromise` class that supports:
//    - new MyPromise((resolve, reject) => {...})
//    - .then(onFulfilled)
//    - .catch(onRejected)
//    - Basic chaining: .then().then()
//    You don't need to handle all edge cases — just make the examples below work.
//
//    new MyPromise(resolve => resolve(42))
//      .then(v => v * 2)
//      .then(v => console.log(v))  → 84
//
//    new MyPromise((_, reject) => reject(new Error("oops")))
//      .catch(e => console.log(e.message))  → "oops"

// your code here


// ─────────────────────────────────────────────
// 6. Waterfall — sequential with dependencies
//    Each step receives the result of the previous step.
//    Write `waterfall(fns, initial)` where each fn is async.
//
//    const steps = [
//      async (n) => n * 2,
//      async (n) => n + 10,
//      async (n) => `result: ${n}`
//    ]
//    waterfall(steps, 5)  → "result: 20"  (5 → 10 → 20 → "result: 20")

// your code here
