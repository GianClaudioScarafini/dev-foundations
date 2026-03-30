// 1. Write a function that takes an array of numbers
//    and returns only the even ones
//    Expected: filterEven([1,2,3,4,5,6]) → [2,4,6]

var myarr = [1,2,3,4,5,6]
function filterEven(arr) {
  // your code first atempt
  return arr.filter((element)=> element % 2 === 0)
}
console.log(filterEven(myarr))

// 2. Write a function that takes a string
//    and returns it reversed
//    Expected: reverseString("hello") → "olleh"
function reverseString(str) {
  // your code
  return [...str].reverse().join("")
}
console.log(reverseString("hello"))

// 3. Write a function that takes an array of numbers
//    and returns the largest one — without using Math.max
//    Expected: findMax([3,1,4,1,5,9,2,6]) → 9
function findMax(arr) {
  const len = arr.length - 1
  return [...arr].sort((a, b) => a - b)[len]
}
console.log(findMax([3,1,4,1,5,9,2,6]))

// 4. Write a function that takes a number
//    and returns true if it's prime, false if not
//    Expected: isPrime(7) → true, isPrime(4) → false
function isPrime(n) {
  if (n <= 1) return false  // edge case — 1 is not prime
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false  // found a divisor, not prime
  }
  
  return true  // no divisors found, is prime
}

console.log(isPrime(10))
console.log(isPrime(7))