// DESTRUCTURING — Simple
// Pulling values out of arrays and objects cleanly

// ─────────────────────────────────────────────
// 1. Basic array destructuring
//    Extract r, g, b from the array
//    const color = [255, 128, 0]
//    Expected: r → 255, g → 128, b → 0

// your code here


// ─────────────────────────────────────────────
// 2. Basic object destructuring
//    Extract name, age, city from the object
//    const person = { name: "Alice", age: 30, city: "Paris" }

// your code here


// ─────────────────────────────────────────────
// 3. Default values — array
//    Extract first and second. If second doesn't exist, default to 0.
//    const a = [10]
//    Expected: first → 10, second → 0

// your code here


// ─────────────────────────────────────────────
// 4. Default values — object
//    Extract `name` and `role`. role defaults to "guest" if missing.
//    const session = { name: "Bob" }
//    Expected: name → "Bob", role → "guest"

// your code here


// ─────────────────────────────────────────────
// 5. Rename while destructuring
//    Extract `name` as `username` and `age` as `years`
//    const user = { name: "Carol", age: 25 }
//    Expected: username → "Carol", years → 25

// your code here


// ─────────────────────────────────────────────
// 6. Destructure in function parameter
//    Rewrite `formatUser` to destructure in the param directly
//    function formatUser(user) {
//      return `${user.name} — ${user.role}`
//    }
//    formatUser({ name: "Alice", role: "admin" }) → "Alice — admin"

// your code here


// ─────────────────────────────────────────────
// 7. Skip array elements
//    Extract only the 1st and 3rd values
//    const [a, , c] — fill in the array and values
//    const coords = [10, 99, 42]
//    Expected: first → 10, third → 42

// your code here


// ─────────────────────────────────────────────
// 8. Swap two variables
//    Swap a and b using array destructuring — one line, no temp variable
//    let a = "hello", b = "world"
//    After swap: a → "world", b → "hello"

// your code here
