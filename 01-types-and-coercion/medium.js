// TYPES AND COERCION — Medium
// Explicit conversion, type checking patterns, edge cases

// ─────────────────────────────────────────────
// 1. Explicit conversion
//    Convert each value to the target type WITHOUT using ==
//    Use Number(), String(), Boolean()

// "42" → number:
// 0    → boolean:
// null → string:
// true → number:
// []   → string:    ← what does String([]) give you?
// {}   → string:    ← and String({})?

// your code + results here


// ─────────────────────────────────────────────
// 2. Implicit coercion traps — spot the bug
//    Each function has a coercion bug. Find and fix it.

function addTax(price, rate) {
  return price + price * rate  // works fine
}
// addTax("100", 0.2) → "10020" instead of 120. Why? Fix it.


function isAdult(age) {
  return age >= 18  // might work wrong sometimes
}
// isAdult("17") → ?  explain what JS does here


function isEmpty(value) {
  return value == null  // intentional or bug?
}
// is this OK? what does it actually check?


// ─────────────────────────────────────────────
// 3. Safe type checking
//    Write these without using typeof for everything — use the best tool:
//    a) isArray(val)   — true only for arrays
//    b) isNull(val)    — true only for null (not undefined)
//    c) isObject(val)  — true for plain objects, NOT arrays or null
//    d) isInteger(val) — true for integers only (not floats)

// your code here


// ─────────────────────────────────────────────
// 4. Number edge cases
//    What does each produce? Predict then verify.

// console.log(0.1 + 0.2 === 0.3)    → ?
// console.log(0.1 + 0.2)            → ?
// console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2)  → ?
// console.log(1 / 0)                → ?
// console.log(-1 / 0)               → ?
// console.log(0 / 0)                → ?
// console.log(parseInt("12px"))     → ?
// console.log(parseInt("px12"))     → ?

// predictions + explanations:


// ─────────────────────────────────────────────
// 5. Equality table (fill in all 9 cells)
//    Without running the code, fill in == results:
//
//           | false |  0   |  ""
//    --------|-------|------|------
//    false   |   T   |  ?   |  ?
//    0       |   ?   |  T   |  ?
//    ""      |   ?   |  ?   |  T
//
//    Then write the 6 checks to verify.

// your answers + verification:


// ─────────────────────────────────────────────
// 6. Write a strict typeOf
//    The built-in typeof is unreliable for null and arrays.
//    Write `strictTypeOf(val)` that returns:
//    "null", "array", "object", "number", "string", "boolean",
//    "undefined", "function" — correctly for all cases.
//
//    strictTypeOf(null)       → "null"
//    strictTypeOf([1,2,3])    → "array"
//    strictTypeOf({})         → "object"
//    strictTypeOf(42)         → "number"
//    strictTypeOf(NaN)        → "nan"   ← bonus: detect NaN separately

// your code here
