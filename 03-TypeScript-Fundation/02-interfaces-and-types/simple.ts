// 02 — Interfaces and Type Aliases — Simple
// Goal: model data with interfaces and type aliases
// Run with: npx ts-node simple.ts

// ─────────────────────────────────────────────
// 1. Model these shapes with interfaces.
//    Add optional and readonly modifiers where they make sense.
//    Add a comment explaining your decisions.

// a) A blog post
//    Has: id, title, body, authorId, published status, createdAt timestamp, updatedAt timestamp
//    The id and createdAt should never change after creation.
//    Tags are optional — can be an array of strings.

// interface Post { ... }


// b) An API error response
//    Has: statusCode, message, and optionally an array of field-level errors
//    Each field error has: field name and a message

// interface ApiError { ... }


// c) A paginated response — generic (works for any data type)
//    Has: data (array of T), and pagination info (page, limit, total, pages)
//    Tip: interface PaginatedResponse<T> { data: T[]; ... }

// interface PaginatedResponse<T> { ... }


// ─────────────────────────────────────────────
// 2. Extend interfaces
//    Start with a base Entity interface that all database records share:
//    { id: number, createdAt: string, updatedAt: string }
//
//    Then create:
//    - User extends Entity: { name, email, role: 'admin' | 'user' }
//    - Product extends Entity: { name, price, stock, category }
//    - Order extends Entity: { userId, items: OrderItem[], status, total }
//    - OrderItem: { productId, quantity, unitPrice }

// your interfaces here


// ─────────────────────────────────────────────
// 3. type vs interface decision
//    For each shape below, decide: interface or type? Why?
//    Write your reason as a comment before each definition.
//
//    a) Coordinates — always a tuple [lat, lng]
//    b) HttpMethod — exactly one of GET | POST | PUT | PATCH | DELETE
//    c) RequestHandler — a function (req: Request, res: Response) => void
//    d) UserProfile — an object with name, bio, avatar, social links
//    e) ID — either a number or a string

// your code here


// ─────────────────────────────────────────────
// 4. Index signatures in practice
//    a) Write a type for a translation dictionary:
//       keys are locale codes ('en', 'fr', 'de')
//       values are objects where keys are translation keys and values are strings
//       Example: { en: { greeting: "Hello", farewell: "Goodbye" } }
//
//    b) Write a typed function translate(dict, locale, key) that
//       returns the translation or falls back to the key itself if missing

// your code here
