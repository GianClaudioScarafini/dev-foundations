// TYPES AND COERCION — Hard
// Deep equality, type-safe utilities, Symbol, BigInt, coercion internals

// ─────────────────────────────────────────────
// 1. Deep equality
//    Write `deepEqual(a, b)` that works for primitives, arrays, and plain objects.
//    === is not enough for nested structures.
//
//    deepEqual(1, 1)                          → true
//    deepEqual([1,[2,3]], [1,[2,3]])          → true
//    deepEqual({ a: { b: 1 } }, { a: { b: 1 } }) → true
//    deepEqual([1, 2], [1, 3])                → false
//    deepEqual({ a: 1 }, { a: 1, b: 2 })     → false

// your code here


// ─────────────────────────────────────────────
// 2. valueOf and toString — how coercion works internally
//    JS calls valueOf() then toString() when coercing objects.
//    Create a `Quantity` class where:
//    - Math operations use the numeric value (via valueOf)
//    - String concatenation shows "5kg" (via toString)
//
//    const q = new Quantity(5, "kg")
//    q + 10        → 15       (numeric)
//    `${q}`        → "5kg"    (string)
//    q > 3         → true

// your code here


// ─────────────────────────────────────────────
// 3. Symbol — unique keys
//    Symbols are useful to avoid property name collisions.
//    a) Create two Symbols with the same description — prove they're not equal
//    b) Use a Symbol as an object key
//    c) Show that Symbol keys DON'T appear in Object.keys() or for...in
//    d) Use Symbol.iterator to make a plain object iterable with for...of

// your code here


// ─────────────────────────────────────────────
// 4. BigInt
//    Regular JS numbers lose precision above Number.MAX_SAFE_INTEGER.
//    a) Show the precision loss: MAX_SAFE_INTEGER + 1 === MAX_SAFE_INTEGER + 2
//    b) Redo the same with BigInt — show it works correctly
//    c) Try mixing BigInt and Number — what error do you get?
//    d) Write `safeBigAdd(a, b)` that accepts regular numbers, converts them,
//       adds as BigInt, then converts the result back to Number

// your code here


// ─────────────────────────────────────────────
// 5. Coercion quiz — hardest cases
//    These are real JS interview traps. Predict THEN verify each.

// console.log([] + [])         → ?
// console.log([] + {})         → ?
// console.log({} + [])         → ?   ← run this in Node vs browser, different!
// console.log(+[])             → ?
// console.log(+{})             → ?
// console.log(+"")             → ?
// console.log(true + true)     → ?
// console.log(true + false)    → ?
// console.log([1] == 1)        → ?
// console.log([[]] == 0)       → ?

// predictions:
// explanations (what rule caused each result):


// ─────────────────────────────────────────────
// 6. Type-safe number parsing
//    Write `parseNumber(val)` that:
//    - Returns the number if val is already a valid finite number
//    - Parses strings like "42" or "3.14" correctly
//    - Returns null for NaN, Infinity, non-numeric strings, null, undefined
//    - Handles edge case: parseNumber("  42  ") → 42  (trimmed)
//
//    parseNumber(42)        → 42
//    parseNumber("3.14")    → 3.14
//    parseNumber("  10  ")  → 10
//    parseNumber("12px")    → null
//    parseNumber(NaN)       → null
//    parseNumber(Infinity)  → null
//    parseNumber(null)      → null

// your code here


// ─────────────────────────────────────────────
// 7. Branded types (TypeScript idea, in plain JS)
//    In production code you might want to distinguish a "UserId" number
//    from a plain number to avoid mixing them up.
//    Create `createBrand(typeName)` that returns a factory function.
//    The branded value should carry a non-enumerable Symbol tag.
//
//    const UserId  = createBrand("UserId")
//    const OrderId = createBrand("OrderId")
//
//    const uid = UserId(42)
//    const oid = OrderId(42)
//
//    uid.value            → 42
//    uid.brand            → "UserId"
//    uid.value === oid.value  → true  (same number)
//    uid.brand === oid.brand  → false (different types)

// your code here
