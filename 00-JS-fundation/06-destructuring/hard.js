// DESTRUCTURING — Hard
// Real-world patterns: API responses, config parsing, complex data shapes

// ─────────────────────────────────────────────
// 1. Parse an API response
//    Extract: userId, title of the first todo, and whether it's completed
//    in a single destructuring statement (or two clean ones)

const apiResponse = {
  status: 200,
  data: {
    userId: 7,
    todos: [
      { id: 1, title: "Buy groceries", completed: false },
      { id: 2, title: "Write code",    completed: true }
    ]
  }
}

// your code here
// Expected: userId → 7, firstTitle → "Buy groceries", firstDone → false


// ─────────────────────────────────────────────
// 2. Destructure with computed keys
//    Extract a property using a dynamic key name
//    const key = "score"
//    const result = { score: 95, level: "A" }
//    Extract the value at `key` into a variable called `value`
//    Expected: value → 95

const key = "score"
const result = { score: 95, level: "A" }

// your code here


// ─────────────────────────────────────────────
// 3. Config parser
//    Write `parseConfig(config)` that destructures a config object with defaults:
//    - host defaults to "localhost"
//    - port defaults to 3000
//    - db.name defaults to "mydb"
//    - db.pool defaults to 5
//    Returns a clean config object with those four values.
//
//    parseConfig({ port: 8080, db: { name: "prod" } })
//    → { host: "localhost", port: 8080, dbName: "prod", dbPool: 5 }

// your code here


// ─────────────────────────────────────────────
// 4. Normalize array of API objects
//    Map this array so each item only has { id, fullName, active }
//    Use destructuring + rename inside the map callback
//    fullName = `${first} ${last}`

const rawUsers = [
  { id: 1, first: "Alice", last: "Smith",  status: "active",   role: "admin" },
  { id: 2, first: "Bob",   last: "Jones",  status: "inactive", role: "user"  },
  { id: 3, first: "Carol", last: "White",  status: "active",   role: "user"  }
]

// your code here
// Expected: [
//   { id: 1, fullName: "Alice Smith",  active: true  },
//   { id: 2, fullName: "Bob Jones",    active: false },
//   { id: 3, fullName: "Carol White",  active: true  }
// ]


// ─────────────────────────────────────────────
// 5. Destructure in chained .then()
//    This promise resolves with a response object.
//    Use destructuring in the .then() callback to extract
//    `status` and `data.users` cleanly — no intermediate variables.

function fakeApi() {
  return Promise.resolve({
    status: 200,
    data: { users: ["Alice", "Bob"] }
  })
}

fakeApi()
  .then(/* destructure here */)


// ─────────────────────────────────────────────
// 6. Swap array elements
//    Swap the first and last elements of any array using destructuring
//    Write a function `swapEnds(arr)` that returns a NEW array with ends swapped
//    swapEnds([1, 2, 3, 4, 5]) → [5, 2, 3, 4, 1]

// your code here


// ─────────────────────────────────────────────
// 7. Deep destructure with fallback
//    Write `getCity(user)` that safely extracts user.address.city
//    — return "Unknown" if any part of the path is missing
//    — use destructuring with defaults, NOT optional chaining
//
//    getCity({ address: { city: "Paris" } })  → "Paris"
//    getCity({ address: {} })                  → "Unknown"
//    getCity({})                               → "Unknown"

// your code here
