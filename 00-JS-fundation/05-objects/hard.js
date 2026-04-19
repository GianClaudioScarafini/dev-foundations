// OBJECTS — Hard
// Deep cloning, immutable patterns, advanced transforms, real-world problems

// ─────────────────────────────────────────────
// 1. Deep clone (no JSON.parse trick)
//    Write a `deepClone(obj)` function that recursively clones
//    an object including nested objects and arrays.
//    Mutating the clone must NOT affect the original.
//
//    const original = { a: 1, b: { c: 2, d: [3, 4] } }
//    const clone = deepClone(original)
//    clone.b.c = 99
//    console.log(original.b.c)  // → still 2

// your code here
console.log("// 1. Deep clone (no JSON.parse trick)")

function deepClone(original){
    if (typeof original !== "object" || original === null) return original
    const result = {}
    for (const[key,values] of Object.entries(original)){
        if (Array.isArray(values)){
            result[key] = values.map(item => deepClone(item))

        }
        else if (typeof(values) !== "object") {
            result[key] =values
            
        } else {
            result[key] = deepClone(values)
        }
    }
    return result
}

const original = { a: 1, b: { c: 2, d: [3, 4] } }
const clone = deepClone(original)
console.log(original)
clone.b.c = 99
console.log(clone)

console.log(original.b.c)  // → still 2

// ─────────────────────────────────────────────
// 2. Immutable update (nested)
//    Update `city` to "Lyon" WITHOUT mutating the original
//    const state = { user: { name: "Alice", address: { city: "Paris" } } }
//    Expected: new object where city is "Lyon", everything else unchanged

// your code here
console.log("// 2. Immutable update (nested)");
const state = { user: { name: "Alice", address: { city: "Paris" } } }
const newstate = deepClone(state)
const test = {...state}
newstate.user.address.city = "Lyon"
console.log(newstate)
console.log(test)
console.log(state)

// ─────────────────────────────────────────────
// 3. Flatten a nested object
//    Write `flatten(obj)` that flattens one level of nesting using dot notation keys
//    const nested = { a: 1, b: { c: 2, d: 3 }, e: 4 }
//    Expected: { a: 1, "b.c": 2, "b.d": 3, e: 4 }

// your code here
console.log("// 3. Flatten a nested object")
function flatten(obj){
    const result = {}
    for (const[key,values] of Object.entries(obj)){
        if (typeof(values) === "object") {
            var newkey = []
            for (const [nestedKey,nestedVal] of Object.entries(values)){
                newkey = key + "." + nestedKey
                result[newkey] = nestedVal
            }
        } else {
            result[key] =values
        }
    }
    return result
}
const nested = { a: 1, b: { c: 2, d: 3 }, e: 4 } //    Expected: { a: 1, "b.c": 2, "b.d": 3, e: 4 }
console.log(nested)
console.log(flatten(nested))


console.log(Object.entries(nested))

// ─────────────────────────────────────────────
// 4. Object diff
//    Write `diff(obj1, obj2)` that returns an object with only the keys
//    that changed and their NEW values.
//    const a = { name: "Alice", age: 30, city: "Paris" }
//    const b = { name: "Alice", age: 31, city: "Lyon" }
//    diff(a, b)  → { age: 31, city: "Lyon" }

// your code here
function diff(a,b){
    result = {}
    if (JSON.stringify(a) === JSON.stringify(b)) {
    
    } else {
        
        }
        return result
    }
    
    console.log("// 4. Object diff")
    const a = { name: "Alice", age: 30, city: "Paris" }
    const b = { name: "Alice", age: 30, city: "Paris" }
    // const b = { name: "Alice", age: 31, city: "Lyon" }

    console.log(JSON.stringify(a) === JSON.stringify(b))

// ─────────────────────────────────────────────
// 5. Factory function with private state
//    Build a `createBankAccount(initialBalance)` factory function.
//    Return an object with:
//    - deposit(amount) — adds to balance
//    - withdraw(amount) — subtracts, throws if insufficient funds
//    - getBalance() — returns current balance
//    The balance variable must NOT be directly accessible from outside.
//
//    const account = createBankAccount(100)
//    account.deposit(50)
//    account.withdraw(30)
//    account.getBalance()  → 120
//    account.balance       → undefined

// your code here


// ─────────────────────────────────────────────
// 6. Memoize with an object cache
//    Write `memoize(fn)` that caches results by argument.
//    The same input should never call `fn` twice.
//
//    let callCount = 0
//    const expensiveAdd = memoize((a, b) => { callCount++; return a + b })
//    expensiveAdd(2, 3)  → 5  (callCount: 1)
//    expensiveAdd(2, 3)  → 5  (callCount: still 1 — cached)
//    expensiveAdd(1, 2)  → 3  (callCount: 2)

// your code here


// ─────────────────────────────────────────────
// 7. Pipeline of transforms
//    Write `transformUser(user, ...fns)` that passes user through
//    each function in sequence, returning the final result.
//    None of the transforms should mutate the input.
//
//    const addFullName  = u => ({ ...u, fullName: `${u.first} ${u.last}` })
//    const normalizeEmail = u => ({ ...u, email: u.email.toLowerCase() })
//    const setActive    = u => ({ ...u, active: true })
//
//    transformUser({ first: "Alice", last: "Smith", email: "ALICE@DEV.COM" },
//      addFullName, normalizeEmail, setActive)
//    → { first: "Alice", last: "Smith", email: "alice@dev.com",
//        fullName: "Alice Smith", active: true }

// your code here
