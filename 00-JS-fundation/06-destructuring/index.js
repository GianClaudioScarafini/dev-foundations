// DESTRUCTURING
// Extract values from arrays and objects into named variables — cleaner than index access.

// ─────────────────────────────────────────────
// 1. Array destructuring — basic
//    Extract the first two values into `first` and `second`
//    const rgb = [255, 128, 0]
//    Expected: first → 255, second → 128

// your code here


// ─────────────────────────────────────────────
// 2. Array destructuring — skip elements
//    Extract only the third value as `blue`
//    const rgb = [255, 128, 0]
//    Expected: blue → 0

// your code here


// ─────────────────────────────────────────────
// 3. Object destructuring — basic
//    Extract `name` and `age` from the object
//    const user = { name: "Alice", age: 30, city: "London" }
//    Expected: name → "Alice", age → 30

// your code here


// ─────────────────────────────────────────────
// 4. Object destructuring — rename
//    Extract `name` but store it as `username`
//    const user = { name: "Alice", age: 30 }
//    Expected: username → "Alice"

// your code here


// ─────────────────────────────────────────────
// 5. Default values
//    Extract `name` and `role` — role should default to "user" if missing
//    const account = { name: "Bob" }
//    Expected: name → "Bob", role → "user"

// your code here


// ─────────────────────────────────────────────
// 6. Destructure in function params
//    Rewrite this function to use destructuring in the parameter:
//    function getLabel(user) {
//      return `${user.name} (${user.role})`
//    }
//    const admin = { name: "Alice", role: "admin" }
//    getLabel(admin) → "Alice (admin)"

// your code here


// ─────────────────────────────────────────────
// 7. Nested destructuring
//    Extract `city` from the nested address object
//    const user = { name: "Alice", address: { city: "Paris", zip: "75001" } }
//    Expected: city → "Paris"

// your code here


// ─────────────────────────────────────────────
// 8. Swap two variables using array destructuring
//    let a = 1, b = 2
//    After the swap: a → 2, b → 1
//    One line only — no temp variable

// your code here
