// 01 — Types and Annotations — Simple
// Goal: annotate code and understand what TypeScript catches
// Run with: npx ts-node simple.ts

// ─────────────────────────────────────────────
// 1. Add type annotations to every variable and parameter below.
//    Do NOT change the values. Just add : type annotations.
//    If TypeScript shows an error after you annotate, explain why in a comment.

let username = "gian"
let loginCount = 5
let isAdmin = false
let lastSeen = null
let sessionId = undefined

function greet(name, greeting) {
  return `${greeting}, ${name}!`
}

function double(n) {
  return n * 2
}

function isEven(n) {
  return n % 2 === 0
}


// ─────────────────────────────────────────────
// 2. Fix the type errors — do NOT change the types, change the values/logic

function getLength(s: string): number {
  return s  // fix this
}

function firstItem(arr: number[]): number {
  return arr  // fix this
}

const point: [number, number] = [10, 20, 30]  // fix this

const user: { name: string; age: number } = {
  name: "Alice",
  age: "thirty"  // fix this
}


// ─────────────────────────────────────────────
// 3. Write these typed functions from scratch.
//    All parameters and return types must be annotated.

// a) repeat(str, times) → repeats the string N times
//    repeat("ha", 3) → "hahaha"

// b) clamp(value, min, max) → keeps value within [min, max] range
//    clamp(15, 0, 10) → 10
//    clamp(-5, 0, 10) → 0
//    clamp(7,  0, 10) → 7

// c) toInitials(fullName) → "Gian Claudio Scarafini" → "G.C.S"

// d) parsePositiveInt(str) → parses string, returns number or null if not a positive integer
//    parsePositiveInt("42")   → 42
//    parsePositiveInt("-1")   → null
//    parsePositiveInt("abc")  → null
//    parsePositiveInt("3.5")  → null


// ─────────────────────────────────────────────
// 4. unknown vs any — this matters in interviews
//
//    a) Write a function processInput(value: unknown) that:
//       - If value is a string: returns it uppercased
//       - If value is a number: returns it doubled
//       - If value is a boolean: returns its negation
//       - Otherwise: returns null
//       You must use typeof narrowing — TypeScript will enforce it.
//
//    b) Now write the same function with processInputAny(value: any).
//       What's different? What does TypeScript stop checking?
//       Write your answer as a comment.

// your code here
