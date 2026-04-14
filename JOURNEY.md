# Learning Journey

---

## 2026-04-14 — Async JS: Promises & async/await (25 min)

**File:** `00-JS-fundation/09-async-js/simple.js`

**What was covered:**
- Exercises 4–7 of the async JS fundamentals set
- Rewriting `.then()` chains as `async/await`
- Chaining two dependent promises (passing result of first into second)
- Error handling with `try/catch` in async functions
- Predicting execution order with `await` vs synchronous code

**What went well:**
- Got exercise 4 (async/await rewrite) mostly right on first attempt
- Correctly used `myUser.id` to chain promises in exercise 5 after one hint
- Understood `try/catch` structure quickly; fixed `error.name` → `error.message` independently

**Mistakes made:**
- Exercise 5: called `getScore()` without passing `userId` — missed the point of chaining
- Exercise 5: attempted to mix `.then()` inside an `async` function (overcomplicated it)
- Exercise 6: used `error.name` instead of `error.message`
- Exercise 4: left a dead `// your code here` comment in working code

**Open questions / things to revisit:**
- Why do two sequential `await` calls run in series, not parallel — and when would you use `Promise.all` instead?
- `error.name` vs `error.message` — know the difference cold

**Session score: ~7.5/9 average across exercises**
