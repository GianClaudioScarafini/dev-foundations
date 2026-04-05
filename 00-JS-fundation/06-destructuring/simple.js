// DESTRUCTURING — Simple
// Pulling values out of arrays and objects cleanly

// ─────────────────────────────────────────────
// 1. Basic array destructuring
//    Extract r, g, b from the array
//    const color = [255, 128, 0]
//    Expected: r → 255, g → 128, b → 0

// your code here
console.log("// 1. Basic array destructuring")
const color = [255, 128, 0];
let [r,g,b] = color;
console.log(r); 
console.log(b); 
console.log(g); 
// ─────────────────────────────────────────────
// 2. Basic object destructuring
//    Extract name, age, city from the object
//    const person = { name: "Alice", age: 30, city: "Paris" }

// your code here
console.log("// 2. Basic object destructuring");
const person = { name: "Alice", age: 30, city: "Paris" };
let {name,age,city} = person;
console.log([name,age,city])

// ─────────────────────────────────────────────
// 3. Default values — array
// 3. Default values — array
//    Extract first and second. If second doesn't exist, default to 0.
//    const a = [10]
//    Expected: first → 10, second → 0

// your code here
console.log("// 3. Default values — array")

{
    var a = [10];
let [first, second=0] = a
console.log(second)
}
// ─────────────────────────────────────────────
// 4. Default values — object
//    Extract `name` and `role`. role defaults to "guest" if missing.
//    const session = {name: "Bob" }
//    Expected: name → "Bob", role → "guest"

// your code here
console.log("// 4. Default values — object")
const session = {name2: "Bob" }
let {name2, role="guest"} = session
console.log(name2)
console.log(role)


// ─────────────────────────────────────────────
// 5. Rename while destructuring
//    Extract `name` as `username` and `age` as `years`
//    const user = { name: "Carol", age: 25 }
//    Expected: username → "Carol", years → 25

// your code here
console.log("// 5. Rename while destructuring");
const user = { name3: "Carol", age: 25 };

let {name3:username, age:years} = user

console.log(username)
console.log(years)

// ─────────────────────────────────────────────
// 6. Destructure in function parameter
//    Rewrite `formatUser` to destructure in the param directly
//    function formatUser(user) {
    //      return `${user.name} — ${user.role}`
    //    }
    //    formatUser({ name: "Alice", role: "admin" }) → "Alice — admin"
    
    // your code here
    
    console.log("// 6. Destructure in function parameter")
    function formatUser({name,role}) {
            return `${name} — ${role}`
        }
    console.log(formatUser({ name: "Alice", role: "admin" })) //→ "Alice — admin"
        
    
// ─────────────────────────────────────────────
// 7. Skip array elements
//    Extract only the 1st and 3rd values
//    const [a, , c] — fill in the array and values
//    const coords = [10, 99, 42]
//    Expected: first → 10, third → 42

// your code here
console.log("// 7. Skip array elements")
const coords = [10, 99, 42]
const [first, , third] = coords

console.log(first)
console.log(third)

// ─────────────────────────────────────────────
// 8. Swap two variables
//    Swap a and b using array destructuring — one line, no temp variable
//    let a = "hello", b = "world"
//    After swap: a → "world", b → "hello"

// your code here
console.log("// 8. Swap two variables")
let az = "hello";
let bz = "world";

console.log(az);
console.log(bz);
[az,bz] = [bz,az];
console.log(az);
console.log(bz);
