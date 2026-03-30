// ARRAY METHODS — Practice
// Methods to use: map, filter, reduce (and combinations)

// ─────────────────────────────────────────────
// 1. Double only the even numbers
//    Expected: [1,2,3,4,5,6] → [4,8,12]
const nums = [1, 2, 3, 4, 5, 6]



// your code here
console.log(nums.filter(n=> n%2===0).map(n=>n*2))

// ─────────────────────────────────────────────
// 2. Get the names of products that cost more than 20
//    Expected: → ["Headphones", "Keyboard"]
const products = [
    { name: "Mouse", price: 15 },
    { name: "Headphones", price: 45 },
    { name: "Cable", price: 8 },
    { name: "Keyboard", price: 30 }
]

// your code here
console.log(products.filter(({price}) => (price >20 )).map(({name,price}) => (name)))

// ─────────────────────────────────────────────
// 3. Calculate the total price of all products
//    Expected: → 98

// your code here
console.log(products.reduce((acc,price.price) => acc + price))

// ─────────────────────────────────────────────
// 4. Count how many words have more than 5 characters
//    Expected: → 3
const words = ["apple", "banana", "kiwi", "strawberry", "fig", "blueberry"]

// your code here

// ─────────────────────────────────────────────
// 5. Get the average age of users over 18
//    Use filter AND reduce together
const users = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
    { name: "Eve", age: 25 }
]

// your code here
