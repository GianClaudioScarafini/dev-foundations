# 01 — Node vs Browser

## The mental model shift

In the browser, JavaScript runs inside a tab. It has access to the DOM, `window`, `document`, `localStorage`, `fetch`.

In Node, JavaScript runs on a server (or your machine). There is no DOM, no `window`, no browser APIs. Instead you get:

```js
// Things that ONLY exist in Node
process          // info about the running process
__dirname        // absolute path to the current file's directory
__filename       // absolute path to the current file
require()        // load another module
module.exports   // export from this module
```

## The event loop — same engine, different host

Node uses the same V8 engine as Chrome. The event loop is the same concept — but instead of handling click events and DOM updates, it handles:
- File system operations (reading a file)
- Network operations (handling an HTTP request)
- Timers (`setTimeout`, `setInterval`)

```js
// This works exactly the same in Node and the browser
setTimeout(() => console.log('later'), 1000)
console.log('now')
// Output: "now" then "later"
```

## What Node adds

```js
// process object
console.log(process.version)       // Node version
console.log(process.platform)      // 'linux', 'darwin', 'win32'
console.log(process.argv)          // command-line arguments
console.log(process.env.HOME)      // environment variables

// __dirname and __filename
console.log(__dirname)             // /Users/you/project
console.log(__filename)            // /Users/you/project/index.js
```

## What Node removes

```js
// These will CRASH in Node — they don't exist
document.getElementById('app')    // ReferenceError: document is not defined
window.localStorage.getItem('x')  // ReferenceError: window is not defined
```

## Key questions to answer before coding
- What is `process.argv` and why would you use it?
- What does `__dirname` give you that a relative path `./` does not?
- Name three things available in the browser that don't exist in Node.
- Name two things available in Node that don't exist in the browser.

---

Go to `simple.js` when ready.
