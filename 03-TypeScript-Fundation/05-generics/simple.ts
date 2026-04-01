// 05 — Generics — Simple
// Run with: npx ts-node simple.ts

// ─────────────────────────────────────────────
// 1. Make these functions generic.
//    Replace every `any` with a proper generic type parameter.
//    The return type must be inferred or explicit — no `any`.

function identity(value: any): any {
  return value
}

function wrapInArray(value: any): any[] {
  return [value]
}

function last(arr: any[]): any {
  return arr[arr.length - 1]
}

function swap(pair: [any, any]): [any, any] {
  return [pair[1], pair[0]]
}
// After fixing: swap(["hello", 42]) should return [42, "hello"] typed as [number, string]


// ─────────────────────────────────────────────
// 2. Generic constraints
//    These functions need constraints on their type parameters.
//    Figure out what constraint each one needs.

// a) pluck — extract an array of values for a given key
//    pluck(users, 'name') → string[]
//    pluck(users, 'age')  → number[]
//    The key MUST exist on the object. TypeScript should error on invalid keys.

function pluck(array: any[], key: any): any[] {
  return array.map(item => item[key])
}

// b) merge — merge two objects, second wins on conflict
//    TypeScript should know the return type has properties from BOTH objects

function merge(obj1: any, obj2: any): any {
  return { ...obj1, ...obj2 }
}
// After fixing: merge({name:'G'}, {age:32}) should be typed as {name:string} & {age:number}

// c) findByKey — find an item in an array by any key
//    findByKey(users, 'email', 'g@b.com') → User | undefined

function findByKey(array: any[], key: any, value: any): any {
  return array.find(item => item[key] === value)
}


// ─────────────────────────────────────────────
// 3. Generic data structures
//    Implement a typed Queue class.
//    A queue is FIFO — first in, first out.
//    - enqueue(item: T): void
//    - dequeue(): T | undefined
//    - peek(): T | undefined  (look at front without removing)
//    - get size(): number
//    - isEmpty(): boolean
//    - toArray(): T[]  (returns a copy — not the internal array)
//
//    Test it with strings and with numbers. TypeScript should prevent mixing.

// your code here


// ─────────────────────────────────────────────
// 4. Predict the inferred types — no running
//    What does TypeScript infer as the return type of each call?
//    Write your prediction as a comment, then verify with your editor.

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b]
}

const p1 = pair(1, "hello")         // inferred as: ?
const p2 = pair(true, { x: 10 })    // inferred as: ?
const p3 = pair([1, 2], [3, 4])     // inferred as: ?

function fromEntries<K extends string, V>(entries: [K, V][]): Record<K, V> {
  return Object.fromEntries(entries) as Record<K, V>
}

const obj = fromEntries([["a", 1], ["b", 2]])  // inferred as: ?
