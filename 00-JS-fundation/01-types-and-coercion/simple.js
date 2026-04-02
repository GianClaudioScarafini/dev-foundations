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
// console.log(typeof 42)             // number
// console.log(typeof "hello")        // string
// console.log(typeof true)           // boolean
// console.log(typeof undefined)      // undefine
// console.log(typeof null)           // "object"
// console.log(typeof {})             // "object"
// console.log(typeof [])             // "object"
// console.log(typeof function(){})   //function


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
// console.log("5" - 2)    → 3
// console.log("5" + 2)    → 52
// console.log("5" * 2)    → 10
// console.log("5" / 2)    → 2.5
// console.log(+"5")       → 5
// console.log(+true)      → 1
// console.log(+false)     → 0
// console.log(+"hello")   → Nan



// ─────────────────────────────────────────────
// 3. Truthy and falsy
//    Mark each value as truthy or falsy

// 0            → flase
// ""           → flase
// " "          → true
// null         → false
// undefined    → false 
// false        → false
// NaN          → flase
// []           → true
// {}           → true
// "false"      → true

// answers:
// 0            → flase
// ""           → flase
// " "          → true
// null         → false
// undefined    → false 
// false        → false
// NaN          → flase
// []           → true
// {}           → true
// "false"      → true


// ─────────────────────────────────────────────
// 4. == vs ===
//    Predict each result

// console.log(1 == "1")            → true
// console.log(1 === "1")           → fale
// console.log(null == undefined)   → true
// console.log(null === undefined)  → false
// console.log(0 == false)          → true
// console.log(0 === false)         → flase
// console.log("" == false)         → flase


// predictions:
//→ true
//→ fale
//→ true
//→ false
//→ true
//→ flase
//→ flase

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
function isNumber(val){
    if (isNaN(val)===isNaN(val)){
        return false
    }else{
        return typeof(val) === "number"
    }
}
//    console.log(isNumber(42)      ) //→ true
//    console.log(isNumber(NaN)     ) //→ false
//    console.log(isNumber("42")    ) //→ false
//    console.log(isNumber(Infinity)) //→ true
// ─────────────────────────────────────────────
// 6. Nullish coalescing vs OR
//    What's the difference? Fill in the expected output.

const a = null ?? "default"        // → "default"
const b = undefined ?? "default"   // → undefined
const c = 0 ?? "default"           // → 0
const d = 0 || "default"           // → null
const e = "" ?? "default"          // → ""
const f = "" || "default"          // → "default"

// answers:
// const a = null ?? "default"        // → "default"
// const b = undefined ?? "default"   // → undefined
// const c = 0 ?? "default"           // → 0
// const d = 0 || "default"           // → null
// const e = "" ?? "default"          // → ""
// const f = "" || "default"          // → "default"


// ─────────────────────────────────────────────
// 7. NaN is weird
//    Fix `isNaN` — the global one is broken. Use Number.isNaN instead.
//    Explain in a comment why isNaN("hello") returns true but shouldn't.

// console.log(isNaN("hello"))         //→ ?
// console.log(Number.isNaN("hello"))  //→ ?
// console.log(NaN === NaN)            //→ ?  ← most surprising JS fact

// explanation:
// console.log(isNaN("hello"))         //→ this return ture becuase the string contain a value
// console.log(Number.isNaN("hello"))  //→ this return true becauase "hello"is not equalt to type number
// console.log(NaN === NaN)            //→ ?  ← most surprising JS fact == operation cannot be used with NaN instead use is the isNaN()
console.log(isNaN(NaN) === isNaN(NaN))            //→ ?  ← most surprising JS fact
