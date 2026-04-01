// ARRAY METHODS — Medium
// reduce, flat, flatMap, sort, chaining methods

// ─────────────────────────────────────────────
// 1. reduce — sum
//    Sum all numbers. Start accumulator at 0.
//    [1, 2, 3, 4, 5] → 15

// your code here


// ─────────────────────────────────────────────
// 2. reduce — build an object
//    Count how many of each fruit there are
//    Expected: { apple: 3, banana: 2, cherry: 1 }

const basket = ["apple", "banana", "apple", "cherry", "apple", "banana"]

// your code here


// ─────────────────────────────────────────────
// 3. reduce — group by property
//    Group products by category
//    Expected: { fruit: [...], veg: [...] }

const products = [
  { name: "apple",  category: "fruit", price: 1.5 },
  { name: "carrot", category: "veg",   price: 0.8 },
  { name: "mango",  category: "fruit", price: 2.0 },
  { name: "broccoli", category: "veg", price: 1.2 }
]

// your code here


// ─────────────────────────────────────────────
// 4. sort — numbers
//    JS sort() is alphabetical by default — it's broken for numbers.
//    Sort ascending then descending.
//    [10, 1, 21, 3, 100, 5] → [1, 3, 5, 10, 21, 100]

const nums = [10, 1, 21, 3, 100, 5]

// your code here (don't mutate nums)


// ─────────────────────────────────────────────
// 5. sort — objects by property
//    Sort users by age, youngest first.

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob",   age: 22 },
  { name: "Carol", age: 27 }
]

// your code here


// ─────────────────────────────────────────────
// 6. flat and flatMap
//    a) Flatten one level:
//       [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]
//    b) Flatten two levels:
//       [1, [2, [3, [4]]]] → [1, 2, 3, 4]
//    c) flatMap: double each number then flatten
//       [1, 2, 3] → [1, 1, 2, 2, 3, 3]

// your code here


// ─────────────────────────────────────────────
// 7. Method chaining — pipeline
//    From the products array above:
//    1. Keep only items under £1.50
//    2. Get their names
//    3. Sort alphabetically
//    Expected: ["broccoli", "carrot"]

// your code here (one chain)


// ─────────────────────────────────────────────
// 8. findIndex vs find
//    a) Find the INDEX of the first product with price > 1.5
//    b) What does findIndex return if nothing matches?
//    c) What's the difference between find and findIndex?

// your code + answers here
