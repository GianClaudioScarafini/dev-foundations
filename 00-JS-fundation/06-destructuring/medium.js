// DESTRUCTURING — Medium
// Nesting, rest, combining with loops and functions

// ─────────────────────────────────────────────
// 1. Nested object destructuring
//    Extract street and city from the nested address
//    const order = {
//      id: 42,
//      customer: { name: "Alice" },
//      shipping: { address: { street: "12 Rue de la Paix", city: "Paris" } }
//    }
//    Expected: street → "12 Rue de la Paix", city → "Paris"

const order = {
  id: 42,
  customer: { name: "Alice" },
  shipping: { address: { street: "12 Rue de la Paix", city: "Paris" } }
}

// your code here
console.log(order.shipping.address.street); 
console.log(order.shipping.address.city); 

const { customer, ...rest} = order
const { shipping, ...other} = order
console.log(customer)
console.log(shipping.address.street)


// ─────────────────────────────────────────────
// 2. Rest in arrays
//    Extract the first item as `head`, the rest as `tail`
//    const nums = [1, 2, 3, 4, 5]
//    Expected: head → 1, tail → [2, 3, 4, 5]

// your code here
const nums2 = [1, 2, 3, 4, 5]
const [head, ...rest2] = nums2
console.log(head)
console.log(rest2)

// ─────────────────────────────────────────────
// 3. Rest in objects
//    Extract `password` separately, put everything else in `safeUser`
//    const user = { name: "Alice", email: "alice@dev.com", password: "secret" }
//    Expected: password → "secret", safeUser → { name: "Alice", email: "alice@dev.com" }

// your code here
console.log("// 3. Rest in objects")
const user = { name: "Alice", email: "alice@dev.com", password: "secret" }
const {password, ...safeUser} = user
console.log(password)
console.log(safeUser)

// ─────────────────────────────────────────────
// 4. Destructure in a loop
//    Log "Alice is 30" for each person using destructuring in the for...of
//    const people = [
  //      { name: "Alice", age: 30 },
  //      { name: "Bob",   age: 25 },
  //      { name: "Carol", age: 28 }
  //    ]
  
  console.log("// 4. Destructure in a loop")
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob",   age: 25 },
  { name: "Carol", age: 28 }
]

// your code here

for(const{name,age} of people){
  console.log(`${name} is ${age}`)
}


// ─────────────────────────────────────────────
// 5. Destructure function return value
//    `getMinMax` returns an object. Destructure the result directly.
//    Expected: min → 1, max → 9

function getMinMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) }
}

console.log("// 5. Destructure function return value")
// your code here — destructure the return value inline
const nums = [3, 1, 4, 1, 5, 9, 2, 6]

const {min,max} = getMinMax(nums)
console.log(min, max)
// ─────────────────────────────────────────────
// 6. Mixed array + object destructuring
//    Extract the name of the first user and the score of the second
//    const data = [{ name: "Alice", score: 90 }, { name: "Bob", score: 75 }]
//    Expected: firstName → "Alice", secondScore → 75

const data = [{ name: "Alice", score: 90 }, { name: "Bob", score: 75 }]

// your code here


// ─────────────────────────────────────────────
// 7. Rename + default in one shot
//    Extract `colour` as `theme` — default to "light" if missing
//    const settings = { fontSize: 14 }
//    Expected: theme → "light"

// your code here
