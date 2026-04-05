// DESTRUCTURING
// Extract values from arrays and objects into named variables — cleaner than index access.

// ─────────────────────────────────────────────
// 1. Array destructuring — basic
//    Extract the first two values into `first` and `second`
//    const rgb = [255, 128, 0]
//    Expected: first → 255, second → 128

// your code here
console.log("// 1. Array destructuring — basic")
const rgb = [255, 128, 0]
let [first, second] = rgb

console.log(first)
console.log(second)


// ─────────────────────────────────────────────
// 2. Array destructuring — skip elements
//    Extract only the third value as `blue`
//    const rgb = [255, 128, 0]
//    Expected: blue → 0

// your code here
console.log("// 2. Array destructuring — skip elements")
let [,,blue] = rgb
console.log(blue)

// ─────────────────────────────────────────────
// 3. Object destructuring — basic
//    Extract `name` and `age` from the object
//    const user = { name: "Alice", age: 30, city: "London" }
//    Expected: name → "Alice", age → 30

// your code here
console.log("// 3. Object destructuring — basic")
const user = { name: "Alice", age: 30, city: "London" }
const {name,age} = user
console.log(name)


// ─────────────────────────────────────────────
// 4. Object destructuring — rename
//    Extract `name` but store it as `username`
//    const user = { name: "Alice", age: 30 }
//    Expected: username → "Alice"

// your code here
console.log("// 4. Object destructuring — rename")
const {name:username,age} =user
console.log(username)



// ─────────────────────────────────────────────
// 5. Default values
//    Extract `name` and `role` — role should default to "user" if missing
//    const account = { name: "Bob" }
//    Expected: name → "Bob", role → "user"

// your code here
console.log("// 5. Default values")
const account = { name: "Bob" }
let {name = "Guest", role = "user"} = account

console.log(name)
console.log(role)

// ─────────────────────────────────────────────
// 6. Destructure in function params
//    Rewrite this function to use destructuring in the parameter:
//    function getLabel(user) {
    //      return `${user.name} (${user.role})`
    //    }
    //    const admin = { name: "Alice", role: "admin" }
    //    getLabel(admin) → "Alice (admin)"
    
    // your code here
    console.log("// 6. Destructure in function params")
function getLabel({name,role}) {
        return `${name} (${role})`
    }
    const admin = { name: "Alice", role: "admin" }
    console.log(getLabel(admin))// → "Alice (admin)"
    

// ─────────────────────────────────────────────
// 7. Nested destructuring
//    Extract `city` from the nested address object
//    const user = { name: "Alice", address: { city: "Paris", zip: "75001" } }
//    Expected: city → "Paris"

// your code here
console.log("// 7. Nested destructuring")
const user_alice = { name: "Alice", address: { city: "Paris", zip: "75001" } }
let {name:test,address:{city}} = user_alice
console.log(city)
console.log(test)// rename becuase already declared
// ─────────────────────────────────────────────
// 8. Swap two variables using array destructuring
//    let a = 1, b = 2
//    After the swap: a → 2, b → 1
//    One line only — no temp variable

// your code here
console.log("// 8. Swap two variables using array destructuring")
let a = 1
let b = 2
console.log(a);
[a,b] = [b,a];
console.log(a);


