// OBJECTS
// Objects store key-value pairs. You can create, read, update, delete, and copy them.

// ─────────────────────────────────────────────
// 1. Create an object
//    Create a `person` object with: name, age, city
//    Then log each property using dot notation

// your code here
var person = {
    name : "g", age : 24, city: "London"
}
console.log(person.name)
console.log(person.age)
console.log(person.city)
// ─────────────────────────────────────────────
// 2. Add and update properties
//    Start with: { name: "Alice" }
//    Add a `role` property set to "developer"
//    Then update `name` to "Alicia"
//    Log the final object

// your code here
person.name = "Alice"
console.log(person.name)
person.role = "developer"
console.log(person.role)
person.name = "Alicia"


// ─────────────────────────────────────────────
// 3. Delete a property
//    Given: { name: "Bob", age: 30, password: "secret" }
//    Remove the `password` property
//    Log the result — password should be gone

// your code here
console.log("// 3. Delete a property")
var given = { name: "Bob", age: 30, password: "secret" }
console.log(given)
delete given.password
console.log(given)
// ─────────────────────────────────────────────
// 4. Copy without mutating
//    Given: const original = { name: "Alice", score: 10 }
//    Create a copy with score increased to 20
//    original.score should still be 10
//    Expected: original → { name: "Alice", score: 10 }
//              copy     → { name: "Alice", score: 20 }

// your code here
console.log("// 4. Copy without mutating")
const original = { name: "Alice", score: 10 }
console.log(original)
const copy = {...original}
copy.score = 20
console.log(copy)


// ─────────────────────────────────────────────
// 5. Merge two objects
//    Merge these two without mutating either:
//    const defaults = { theme: "light", language: "en", notifications: true }
//    const userPrefs = { theme: "dark", notifications: false }
//    userPrefs values should win on conflicts
//    Expected: { theme: "dark", language: "en", notifications: false }

// your code here
console.log("// 5. Merge two objects")
const defaults = { theme: "light", language: "en", notifications: true }
const userPrefs = { theme: "dark", notifications: false }
console.log({...defaults,...userPrefs})


// ─────────────────────────────────────────────
// 6. Loop over an object
//    Given: const scores = { alice: 90, bob: 75, charlie: 85 }
//    Log each entry as: "alice: 90", "bob: 75", etc.

// your code here
console.log("// 6. Loop over an object")
const scores = { alice: 90, bob: 75, charlie: 85 }
Object.entries(scores).forEach((key,_)=>{
    // console.log(`${key[0]}`)
    console.log(`${key[0]}: `+`${key[1]}`)
})
// ─────────────────────────────────────────────
// 7. Object methods
//    Add a `greet` method to this object that returns "Hi, I'm Alice"
//    const person = { name: "Alice" }
//    person.greet() → "Hi, I'm Alice"


// your code here

console.log("// 7. Object methods")
const person2 = { name: "Alice" ,
    greet(){
        return `Hi, I'm ${this.name}`
    }
}

console.log(person2.greet())