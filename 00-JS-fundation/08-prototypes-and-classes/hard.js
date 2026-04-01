// PROTOTYPES AND CLASSES — Hard
// Design patterns, prototype chain manipulation, real architecture problems

// ─────────────────────────────────────────────
// 1. Implement a linked list
//    Build a `LinkedList` class with:
//    - append(value) — add to end
//    - prepend(value) — add to start
//    - delete(value) — remove first occurrence
//    - toArray() — returns all values as array
//
//    const list = new LinkedList()
//    list.append(1)
//    list.append(2)
//    list.append(3)
//    list.prepend(0)
//    list.delete(2)
//    list.toArray()  → [0, 1, 3]

// your code here


// ─────────────────────────────────────────────
// 2. Observable class
//    Build an `Observable` base class:
//    - subscribe(event, fn) — registers a listener
//    - notify(event, data) — calls all listeners for that event
//    Then create `Store` that extends `Observable`:
//    - setState(newState) — merges new state and notifies "change" listeners
//
//    const store = new Store({ count: 0 })
//    store.subscribe("change", state => console.log(state.count))
//    store.setState({ count: 1 })  → logs 1
//    store.setState({ count: 2 })  → logs 2

// your code here


// ─────────────────────────────────────────────
// 3. Prototype chain inspection
//    Answer these WITHOUT running the code first, then verify.
//
//    class A { hello() { return "A" } }
//    class B extends A { hello() { return "B" } }
//    class C extends B {}
//
//    const c = new C()
//    c.hello()                          → ?
//    Object.getPrototypeOf(C) === B     → ?
//    C.prototype instanceof A           → ?
//    c.hasOwnProperty("hello")          → ?
//
//    Now: delete C.prototype.hello from B.prototype.
//    c.hello()                          → ?

// predictions:
// verification:


// ─────────────────────────────────────────────
// 4. Immutable class (Object.freeze pattern)
//    Build a `ImmutablePoint` class where x and y can never be changed
//    after creation. Attempting to set them silently fails (or throws in strict mode).
//
//    const p = new ImmutablePoint(3, 4)
//    p.x          → 3
//    p.x = 99     → silently ignored
//    p.x          → still 3
//    p.distanceTo(new ImmutablePoint(0, 0))  → 5

// your code here


// ─────────────────────────────────────────────
// 5. Plugin system using classes
//    Build a `PluginRunner` class:
//    - register(name, plugin) — stores a plugin (object with a run method)
//    - execute(name, data) — runs the plugin, passing data
//    - list() — returns registered plugin names
//
//    const runner = new PluginRunner()
//    runner.register("uppercase", { run: (s) => s.toUpperCase() })
//    runner.register("trim",      { run: (s) => s.trim() })
//    runner.execute("uppercase", "hello")  → "HELLO"
//    runner.execute("trim", "  spaces  ")  → "spaces"
//    runner.list()  → ["uppercase", "trim"]

// your code here


// ─────────────────────────────────────────────
// 6. Extend a built-in class
//    Create `SmartArray` that extends Array and adds:
//    - sum() → sum of all numeric elements
//    - average() → mean of all numeric elements
//    - unique() → new SmartArray with duplicates removed
//
//    const s = new SmartArray(1, 2, 2, 3, 4, 4, 5)
//    s.sum()     → 21
//    s.average() → 3
//    s.unique()  → SmartArray [1, 2, 3, 4, 5]
//    s.unique() instanceof SmartArray  → true

// your code here
