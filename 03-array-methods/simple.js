// ARRAY METHODS — Simple
// map, filter, find, some, every, includes, indexOf

// ─────────────────────────────────────────────
// 1. map — transform every element
//    Double every number
//    [1, 2, 3, 4, 5] → [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5]

// your code here


// ─────────────────────────────────────────────
// 2. filter — keep matching elements
//    Keep only even numbers
//    [1, 2, 3, 4, 5, 6] → [2, 4, 6]

// your code here


// ─────────────────────────────────────────────
// 3. find — get the first match
//    Find the first user over 25
//    Expected: { name: "Bob", age: 30 }

const users = [
  { name: "Alice", age: 22 },
  { name: "Bob",   age: 30 },
  { name: "Carol", age: 28 }
]

// your code here


// ─────────────────────────────────────────────
// 4. some — does at least one match?
//    Is there any score above 90?
//    [70, 85, 92, 60] → true

const scores = [70, 85, 92, 60]

// your code here


// ─────────────────────────────────────────────
// 5. every — do all match?
//    Are all prices above 0?
//    [10, 5, 8, 3] → true
//    [10, -1, 8]   → false

const prices = [10, 5, 8, 3]

// your code here


// ─────────────────────────────────────────────
// 6. includes and indexOf
//    a) Does the list include "banana"? → true/false
//    b) What index is "cherry" at? → number
//    c) What does indexOf return if not found?

const fruits = ["apple", "banana", "cherry", "mango"]

// your code here


// ─────────────────────────────────────────────
// 7. map with objects
//    Extract just the names from the users array above
//    Expected: ["Alice", "Bob", "Carol"]

// your code here


// ─────────────────────────────────────────────
// 8. filter + map together
//    Get names of users who are 25 or older
//    Expected: ["Bob", "Carol"]

// your code here
