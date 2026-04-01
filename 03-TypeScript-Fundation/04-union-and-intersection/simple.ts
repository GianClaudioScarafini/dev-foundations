// 04 — Union and Intersection Types — Simple
// Run with: npx ts-node simple.ts

// ─────────────────────────────────────────────
// 1. Narrow these union types correctly.
//    TypeScript will error if you access a property without narrowing first.

function describe(value: string | number | boolean | null): string {
  // Handle each case and return a description string.
  // You cannot use .toString() on null — TypeScript will catch it.
  // your code here
  return ''
}

console.log(describe("hello"))  // "string: HELLO"
console.log(describe(42))       // "number: 84 (doubled)"
console.log(describe(true))     // "boolean: true"
console.log(describe(null))     // "null value"


// ─────────────────────────────────────────────
// 2. Discriminated union — notification system
//    A notification can be one of three types with different payloads.
//    Model it as a discriminated union and write a render() function.

// Define the union:
// EmailNotification:   { type: 'email',   to: string, subject: string, body: string }
// SMSNotification:     { type: 'sms',     to: string, message: string }
// PushNotification:    { type: 'push',    deviceId: string, title: string, badge?: number }

type Notification = never // replace with your discriminated union

function renderNotification(n: Notification): string {
  // Use a switch on n.type
  // TypeScript should know the exact shape in each case
  // your code here
  return ''
}


// ─────────────────────────────────────────────
// 3. Intersection types — compose object types
//    Use intersections to build up complex types from small reusable pieces.

type WithId = { id: number }
type WithTimestamps = { createdAt: string; updatedAt: string }
type WithSoftDelete = { deletedAt: string | null }

// Build these by combining the above types plus their own fields:
// BlogPost: id + timestamps + soft delete + { title, body, authorId, published: boolean }
// ApiKey: id + timestamps + { key: string, name: string, lastUsedAt: string | null }

type BlogPost = never // your code
type ApiKey = never   // your code

// Now write a function that accepts any record with timestamps
// and returns how old it is in days
function ageInDays(record: WithTimestamps): number {
  // your code here
  return 0
}


// ─────────────────────────────────────────────
// 4. Exhaustive switch — the never trick
//    When you switch on a discriminated union, TypeScript can verify
//    you've handled every case. This is extremely useful when you add
//    new variants later.
//
//    Add this at the end of your switch:
//    default:
//      const exhausted: never = value  // Error if any case is unhandled
//      return exhausted
//
//    Add it to your renderNotification() function above.
//    Then add a new notification type to the union and watch TypeScript
//    tell you exactly where to update the code.
