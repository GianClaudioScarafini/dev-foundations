// 03 — Functions — Simple
// Run with: npx ts-node simple.ts

// ─────────────────────────────────────────────
// 1. Add full type annotations to these functions (params + return type).
//    TypeScript should catch if your annotation doesn't match the implementation.

function formatCurrency(amount, currency, decimals) {
  return `${currency}${amount.toFixed(decimals)}`
}

function filterByMinPrice(products, minPrice) {
  return products.filter(p => p.price >= minPrice)
}

function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const groupKey = item[key]
    if (!acc[groupKey]) acc[groupKey] = []
    acc[groupKey].push(item)
    return acc
  }, {})
}


// ─────────────────────────────────────────────
// 2. Overloads
//    Write a function getById that:
//    - If passed a string id → returns a User (or undefined)
//    - If passed a number id → returns a Product (or undefined)
//    - Use function overloads — two signatures + one implementation
//
//    Define minimal User and Product types to make this work.

interface User { id: string; name: string; email: string }
interface Product { id: number; name: string; price: number }

const users: User[] = [{ id: 'u1', name: 'Alice', email: 'a@b.com' }]
const products: Product[] = [{ id: 1, name: 'Laptop', price: 999 }]

// your overloads here


// ─────────────────────────────────────────────
// 3. Higher-order functions with typed callbacks
//    Type these utility functions properly.
//    The generic parameter T should be inferred — don't hardcode it.

function pipe<T>(value: T, ...fns: any[]): any {
  // Replace the any types with proper types
  // pipe takes a value and a series of transformation functions
  // each function takes the output of the previous
  // returns the final transformed value
  return fns.reduce((acc, fn) => fn(acc), value)
}

// Usage (should work after you fix the types):
// const result = pipe(
//   "  hello world  ",
//   (s: string) => s.trim(),
//   (s: string) => s.toUpperCase(),
//   (s: string) => s.split(' ')
// )
// TypeScript should infer result as string[]


// ─────────────────────────────────────────────
// 4. Optional vs required — spot the difference
//    These two function signatures look similar but behave differently.
//    Write code that demonstrates the difference and explain in a comment.

function a(name: string, role?: string) {
  return role ? `${name} (${role})` : name
}

function b(name: string, role: string | undefined) {
  return role ? `${name} (${role})` : name
}

// Demonstrate: what can you call a() with that you cannot call b() with?
// your code + comment here
