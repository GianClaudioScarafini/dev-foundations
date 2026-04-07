require('dotenv').config()
// 04 — Environment Variables — Simple
// Goal: read, validate, and type-convert env vars correctly
// Run with: node simple.js
// Run with vars: PORT=4000 DEBUG=true node simple.js


// ─────────────────────────────────────────────
// 1. Read and convert env vars safely
//    Read these from process.env and log them WITH their JS types:
//    - PORT (default: 3000) → must be a Number
//    - DEBUG (default: false) → must be a Boolean
//    - APP_NAME (default: 'MyApp') → string is fine
//    - MAX_CONNECTIONS (default: 10) → must be a Number
//
//    Log format: "PORT = 3000 (number)"

// your code here


// ─────────────────────────────────────────────
// 2. dotenv setup
//    a) Install dotenv: npm install dotenv
//    b) Create a .env file in this folder with:
//       PORT=4000
//       DB_HOST=localhost
//       DB_PORT=5432
//       DB_NAME=myapp_dev
//       SECRET_KEY=dev-secret-abc123
//       DEBUG=true
//    c) Load dotenv at the top of this file
//    d) Log the full database connection string:
//       "postgresql://localhost:5432/myapp_dev"
//    e) Create a .env.example file with the same keys but empty values


// your code here


// ─────────────────────────────────────────────
// 3. Build a config object
//    Write a function getConfig() that reads from process.env
//    and returns a structured config object:
//
//    {
//      server: { port: Number, debug: Boolean },
//      database: { host: String, port: Number, name: String },
//      auth: { secretKey: String }
//    }
//
//    All values should have the correct JS type.
//    Log the config object.

function getConfig() {
  // your code here
}

console.log(getConfig())


// ─────────────────────────────────────────────
// 4. Validate required vars
//    Write a function validateEnv(required) that:
//    - Accepts an array of required env var names
//    - Checks each one exists and is non-empty in process.env
//    - If any are missing, logs ALL missing ones and throws an Error
//    - If all present, logs "Environment OK" and returns true
//
//    Test it with: validateEnv(['PORT', 'SECRET_KEY', 'MISSING_VAR', 'ALSO_MISSING'])
//    It should report both missing vars, not just the first one.

function validateEnv(required) {
  // your code here
}

try {
  validateEnv(['PORT', 'SECRET_KEY', 'MISSING_VAR', 'ALSO_MISSING'])
} catch (err) {
  console.error(err.message)
}
