// OBJECTS — Medium
// Nested access, transforming objects, merging, real patterns

// ─────────────────────────────────────────────
// 1. Nested object access
//    Given the object below, log:
//    - The city name
//    - The second tag
//    - The zip code

const user = {
  name: "Alice",
  address: {
    city: "Paris",
    zip: "75001"
  },
  tags: ["developer", "cyclist", "reader"]
}

// your code here


// ─────────────────────────────────────────────
// 2. Safe nested access (optional chaining)
//    These might be undefined — don't let it crash.
//    Log the value or "not found" if the path doesn't exist.
//    a) user.company?.name
//    b) user.address?.country?.code

// your code here


// ─────────────────────────────────────────────
// 3. Merge with override
//    Merge `defaults` and `options` — options should win on conflicts
//    Do NOT mutate either object
//    const defaults = { color: "blue", size: "md", border: true }
//    const options  = { color: "red", size: "lg" }
//    Expected: { color: "red", size: "lg", border: true }

// your code here


// ─────────────────────────────────────────────
// 4. Transform object values
//    Double every value in this object without mutating it
//    const prices = { coffee: 3, tea: 2, juice: 4 }
//    Expected: { coffee: 6, tea: 4, juice: 8 }
//    Hint: Object.entries + reduce, or Object.fromEntries

// your code here


// ─────────────────────────────────────────────
// 5. Filter object keys
//    Keep only entries where value > 3
//    const stock = { apple: 5, banana: 1, mango: 4, grape: 2 }
//    Expected: { apple: 5, mango: 4 }

// your code here


// ─────────────────────────────────────────────
// 6. Group an array into an object
//    Group these users by role
//    Expected: { admin: [{...}], user: [{...}, {...}] }

const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob",   role: "user" },
  { name: "Carol", role: "user" }
]

// your code here


// ─────────────────────────────────────────────
// 7. Count occurrences
//    Count how many times each word appears
//    const words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
//    Expected: { apple: 3, banana: 2, cherry: 1 }

// your code here
