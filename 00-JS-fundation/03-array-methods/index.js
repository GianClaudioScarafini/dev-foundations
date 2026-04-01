// 1. Double every number in the array
//    Expected: [1,2,3,4,5] → [2,4,6,8,10]
const numbers = [1,2,3,4,5]

console.log(numbers.map(n=>n*2))
console.log(numbers)

// 2. Return only words longer than 4 characters
//    Expected: ["cat","elephant","dog","giraffe"] → ["elephant","giraffe"]
const animals = ["cat","elephant","dog","giraffe"]

console.log(animals.filter(n=>n.length > 4))

// 3. Sum all numbers in the array using reduce
//    Expected: [1,2,3,4,5] → 15
console.log([1,2,3,4,5].reduce((acc,cur) => acc + cur))
// 4. Turn this array of objects into an array of just names
//    Expected: → ["Alice","Bob","Charlie"]
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]
const Expected = users.map(({name}) => (name))
console.log(Expected)

// 5. Find the total age of users over 28
//    Use filter AND reduce together

const agesTotal = users.filter(({age}) => (age>28)).map(({age }) => (age)).reduce((acc,cur) => acc + cur)

console.log(agesTotal)