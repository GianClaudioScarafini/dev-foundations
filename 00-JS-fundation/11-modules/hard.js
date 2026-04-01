// MODULES — Hard
// Real architecture: plugin system, lazy loading, module encapsulation patterns

// ─────────────────────────────────────────────
// 1. Plugin registry module
//    Create plugins/registry.js:
//    - Private Map of plugins
//    - export register(name, plugin)
//    - export get(name) — throws if not found
//    - export list() — returns array of names
//    - export execute(name, ...args) — calls plugin.run(...args)
//
//    Then create plugins/uppercase.js and plugins/trim.js
//    Each exports a default object with a `run` method.
//
//    File to create: ./plugins/registry.js
//    File to create: ./plugins/uppercase.js
//    File to create: ./plugins/trim.js

// import { register, execute, list } from './plugins/registry.js'
// import uppercase from './plugins/uppercase.js'
// import trim from './plugins/trim.js'
// register("uppercase", uppercase)
// register("trim", trim)
// execute("uppercase", "hello")  → "HELLO"
// execute("trim", "  hello  ")   → "hello"
// list()                         → ["uppercase", "trim"]


// ─────────────────────────────────────────────
// 2. Lazy-loaded feature modules
//    Build a router-like system that lazy-loads modules on demand.
//    Write `createRouter(routes)` where routes maps path → module path.
//    Calling `navigate(path)` should dynamic import() the module and call its default export.
//
//    // pages/home.js — default export: async function() { console.log("home page") }
//    // pages/about.js — default export: async function() { console.log("about page") }
//
//    const router = createRouter({
//      "/":       "./pages/home.js",
//      "/about":  "./pages/about.js"
//    })
//    await router.navigate("/about")  → logs "about page"

// your code here (implement createRouter + create the page files)


// ─────────────────────────────────────────────
// 3. Singleton pattern using module scope
//    Modules are singletons — they're only evaluated once.
//    Create store.js that acts as a global state store:
//    - Private `state` object (never exported)
//    - export setState(key, value)
//    - export getState(key)
//    - export subscribe(fn) — fn called on every setState
//
//    Prove it's a singleton: import it in two different files.
//    setState in one file, getState in the other — same value.
//
//    File to create: ./store.js

// import { setState, getState, subscribe } from './store.js'
// subscribe(state => console.log("changed:", state))
// setState("user", "Alice")   → logs "changed: {user: 'Alice'}"
// getState("user")            → "Alice"


// ─────────────────────────────────────────────
// 4. Dependency injection via modules
//    Create a `db.js` module that exports a default `db` object.
//    Create `userRepository.js` that imports db and uses it.
//    In tests you should be able to swap the db without changing userRepository.
//
//    Implement both files and write a test file that:
//    - Uses a real db object
//    - Swaps it with a mock and verifies userRepository still works
//
//    This is a simplified version of what you'd do in Node.js apps.

// your code here


// ─────────────────────────────────────────────
// 5. Build a mini SDK
//    Create a package structure for a fictional API client:
//
//    sdk/
//      client.js     — default export: createClient(apiKey)
//      endpoints/
//        users.js    — getUser(id), listUsers()
//        posts.js    — getPost(id), createPost(data)
//      utils/
//        request.js  — makeRequest(url, options)
//      index.js      — exports createClient and all endpoints
//
//    Usage:
//    import { createClient } from './sdk/index.js'
//    const client = createClient("my-api-key")
//    client.users.getUser(1)
//    client.posts.listPosts()

// your code here


// ─────────────────────────────────────────────
// 6. Tree-shakeable module design
//    The following module is NOT tree-shakeable — explain why,
//    then rewrite it so a bundler can eliminate unused exports.
//
//    // bad.js
//    const utils = {
//      formatDate: (d) => d.toISOString(),
//      formatCurrency: (n) => `$${n.toFixed(2)}`,
//      slugify: (s) => s.toLowerCase().replace(/\s+/g, '-')
//    }
//    export default utils
//
//    Problem:
//    Fix:
