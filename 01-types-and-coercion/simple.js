// TYPES AND COERCION — Simple
// typeof, basic coercion, truthy/falsy, loose vs strict equality

// ─────────────────────────────────────────────
// 1. typeof — predict before running
//    Write your prediction next to each line, then verify.

// typeof 42           → ?
// typeof "hello"      → ?
// typeof true         → ?
// typeof undefined    → ?
// typeof null         → ?   ← this one is famous, be careful
// typeof {}           → ?
// typeof []           → ?
// typeof function(){} → ?

// your predictions here


// ─────────────────────────────────────────────
// 2. String to number coercion
//    What does each line produce? Predict then verify.

// console.log("5" - 2)    → ?
// console.log("5" + 2)    → ?
// console.log("5" * 2)    → ?
// console.log("5" / 2)    → ?
// console.log(+"5")       → ?
// console.log(+true)      → ?
// console.log(+false)     → ?
// console.log(+"hello")   → ?

// predictions:


// ─────────────────────────────────────────────
// 3. Truthy and falsy
//    Mark each value as truthy or falsy

// 0            → ?
// ""           → ?
// " "          → ?
// null         → ?
// undefined    → ?
// false        → ?
// NaN          → ?
// []           → ?
// {}           → ?
// "false"      → ?

// answers:


// ─────────────────────────────────────────────
// 4. == vs ===
//    Predict each result

// console.log(1 == "1")       → ?
// console.log(1 === "1")      → ?
// console.log(null == undefined)  → ?
// console.log(null === undefined) → ?
// console.log(0 == false)     → ?
// console.log(0 === false)    → ?
// console.log("" == false)    → ?

// predictions:


// ─────────────────────────────────────────────
// 5. Check types correctly
//    Write a function `isNumber(val)` that returns true
//    ONLY for actual numbers (not NaN, not strings)
//
//    isNumber(42)       → true
//    isNumber(NaN)      → false
//    isNumber("42")     → false
//    isNumber(Infinity) → true

// your code here


// ─────────────────────────────────────────────
// 6. Nullish coalescing vs OR
//    What's the difference? Fill in the expected output.

const a = null ?? "default"        // → ?
const b = undefined ?? "default"   // → ?
const c = 0 ?? "default"           // → ?
const d = 0 || "default"           // → ?
const e = "" ?? "default"          // → ?
const f = "" || "default"          // → ?

// answers:


// ─────────────────────────────────────────────
// 7. NaN is weird
//    Fix `isNaN` — the global one is broken. Use Number.isNaN instead.
//    Explain in a comment why isNaN("hello") returns true but shouldn't.

// console.log(isNaN("hello"))         → ?
// console.log(Number.isNaN("hello"))  → ?
// console.log(NaN === NaN)            → ?  ← most surprising JS fact

// explanation:
