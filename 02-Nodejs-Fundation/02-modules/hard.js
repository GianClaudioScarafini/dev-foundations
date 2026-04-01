// 02 — Modules — Hard
// Goal: understand module caching, circular dependencies, and ESM vs CJS tradeoffs
// Run with: node hard.js

// ─────────────────────────────────────────────
// Challenge: Module-based plugin system
//
// No starter code. You design the solution.
//
// Build a simple plugin system using Node modules.
//
// Requirements:
//
// 1. Create a file `pluginRegistry.js`
//    It maintains a registry (plain object or Map) of plugins.
//    Export these functions:
//      register(name, plugin)  — adds a plugin to the registry
//                                throws an Error if name already exists
//      get(name)               — returns the plugin, throws if not found
//      list()                  — returns array of registered plugin names
//      run(name, input)        — calls plugin.execute(input) and returns the result
//
// 2. Create three plugin files — each exports an object with { name, execute(input) }:
//    - `plugins/uppercase.js`  — execute returns input.toUpperCase()
//    - `plugins/wordCount.js`  — execute returns the number of words in input
//    - `plugins/reverse.js`    — execute returns the string reversed
//
// 3. In hard.js (this file):
//    - Require pluginRegistry
//    - Register all three plugins
//    - Try to register 'uppercase' again — catch the error and log it
//    - List all registered plugins
//    - Run each plugin on the string "Hello from Node"
//    - Log the results
//
// 4. MODULE CACHING puzzle (answer in comments):
//    Create a file `counter.js` that exports an object with:
//      { count: 0, increment() { this.count++ } }
//
//    In hard.js, require it twice:
//      const a = require('./counter')
//      const b = require('./counter')
//      a.increment()
//      console.log(b.count)  // What does this log? WHY?
//
//    Write your answer as a comment before running it.
//    Then verify.
//
// When you're done, ask yourself:
// - Why is module caching useful for things like database connections?
// - What breaks if two modules require each other (circular dependency)?
// - If you converted this to ESM, what would change in the syntax?

// your code here
