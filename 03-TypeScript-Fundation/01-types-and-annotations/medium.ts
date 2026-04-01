// 01 — Types and Annotations — Medium
// Goal: type real data structures you'll use in an API

// ─────────────────────────────────────────────
// 1. Type an API response
//    You're calling an external jobs API. The response looks like this:
//    (Do NOT copy-paste — read the shape and write the types yourself)
//
//    {
//      "data": [
//        {
//          "id": 1,
//          "title": "Senior Frontend Developer",
//          "company": {
//            "id": 10,
//            "name": "Acme Corp",
//            "logoUrl": "https://acme.com/logo.png"  ← can be null
//          },
//          "salary": {
//            "min": 70000,
//            "max": 90000,
//            "currency": "GBP"
//          },
//          "location": "London",
//          "remote": true,
//          "tags": ["React", "TypeScript", "GraphQL"],
//          "postedAt": "2024-01-15T10:00:00Z",
//          "closedAt": null   ← null if still open
//        }
//      ],
//      "meta": {
//        "page": 1,
//        "limit": 10,
//        "total": 47,
//        "pages": 5
//      }
//    }
//
//    Write object types (not interfaces yet — that's next topic) for:
//    - Company
//    - Salary
//    - Job
//    - PaginationMeta
//    - JobsApiResponse

// your types here


// ─────────────────────────────────────────────
// 2. Type a config system
//    Write types for this config structure.
//    Then write a typed getConfig() function that builds it from process.env.
//    All number and boolean conversions must be explicit.
//
//    Config shape:
//    {
//      env: "development" | "production" | "test",   ← limited to these three strings
//      server: { port: number, host: string },
//      database: { url: string, poolSize: number },
//      auth: { jwtSecret: string, expiresIn: string },
//      features: { enableAnalytics: boolean, enableBetaFeatures: boolean }
//    }

// your types here

function getConfig() {
  // your code here
}


// ─────────────────────────────────────────────
// 3. Tuple use case — function that returns multiple values
//    Write a function parseCSVLine(line: string) that parses:
//    "Alice,32,alice@example.com,admin"
//    into a typed tuple: [name: string, age: number, email: string, role: string]
//
//    Then write a function that maps an array of CSV lines to an array of those tuples.
//    const lines = ["Alice,32,alice@example.com,admin", "Bob,28,bob@example.com,user"]

// your code here


// ─────────────────────────────────────────────
// 4. The readonly modifier
//    Mark these properties as readonly where it makes sense.
//    TypeScript will prevent you from mutating them after creation.
//    Then try to mutate one and observe the error.
//
//    Rule: if a value should never change after creation, it's readonly.

type DatabaseConfig = {
  host: string
  port: number
  name: string
  credentials: {
    username: string
    password: string
  }
}

const dbConfig: DatabaseConfig = {
  host: "localhost",
  port: 5432,
  name: "myapp",
  credentials: { username: "admin", password: "secret" }
}

// Try: dbConfig.host = "production.db"   ← should this be allowed?
// Add readonly to the fields that should be immutable, then test it.
