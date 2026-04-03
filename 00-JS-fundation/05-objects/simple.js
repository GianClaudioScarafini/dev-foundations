// OBJECTS — Simple
// Master the basics: create, read, update, delete, iterate

// ─────────────────────────────────────────────
// 1. Create and access
//    Create a `car` object: make "Toyota", model "Corolla", year 2020
//    Log each value using dot notation
//    Then log `model` using bracket notation

// your code here
console.log("// 1. Create and access")
const car = {make:"Toyota", model :"Corolla",year : 2020}
console.log(car.make)
console.log(car["model"])
console.log(car.year)

// ─────────────────────────────────────────────
// 2. Add and delete properties
//    Start: const profile = { username: "gdev", email: "g@dev.com" }
//    Add: `isActive` set to true
//    Delete: `email`
//    Expected final: { username: "gdev", isActive: true }

// your code here
console.log("// 2. Add and delete properties")
const profile = { username: "gdev", email: "g@dev.com" }
console.log(profile)
profile.isActive = true
console.log(profile)
delete profile.email
console.log(profile)


// ─────────────────────────────────────────────
// 3. Check if a property exists
//    Given: const config = { debug: false, port: 3000 }
//    Check if `debug` exists → true
//    Check if `host` exists  → false
//    Use the `in` operator

// your code here
console.log("// 3. Check if a property exists")
const config = { debug: false, port: 3000 }

console.log(("debug" in config))
console.log(("host" in config))
// ─────────────────────────────────────────────
// 4. Object.keys / Object.values / Object.entries
//    Given: const scores = { alice: 90, bob: 75, charlie: 85 }
//    Log: all keys as an array
//    Log: all values as an array
//    Log: all entries as [key, value] pairs

// your code here
console.log("// 4. Object.keys / Object.values / Object.entries")
const scores = { alice: 90, bob: 75, charlie: 85 }
console.log(Object.keys(scores))
console.log(Object.values(scores))
console.log(Object.entries(scores))

// ─────────────────────────────────────────────
// 5. Iterate with for...in
//    Given: const inventory = { apples: 5, bananas: 3, oranges: 8 }
//    Log each item: "apples: 5", "bananas: 3", "oranges: 8"

// your code here
console.log("// 5. Iterate with for...in")
const inventory = { apples: 5, bananas: 3, oranges: 8 }

Object.entries(inventory).forEach((k,v)=>{
    console.log(`${k[0]}: ${k[1]}`)
})

for (const key in inventory) {
    console.log(`${key}: ${inventory[key]}`)
}



// ─────────────────────────────────────────────
// 6. Shallow copy with spread
//    Given: const original = { name: "Alice", score: 10 }
//    Make a copy and change score to 99
//    Verify original.score is still 10

// your code here
console.log("// 6. Shallow copy with spread")
const original = { name: "Alice", score: 10 }
const copy = {...original}
console.log(copy)
copy.score = 99
console.log(copy)
console.log(original)

// ─────────────────────────────────────────────
// 7. Dynamic property names (computed keys)
//    You have a variable: const field = "email"
//    Create an object where `field` is the key and "alice@dev.com" is the value
//    Expected: { email: "alice@dev.com" }

// your code here
console.log("// 7. Dynamic property names (computed keys)")
const field = "email"
newobj ={[field] :"alice@dev.com"}
console.log(newobj)

