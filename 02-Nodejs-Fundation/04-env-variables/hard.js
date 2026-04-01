// 04 — Environment Variables — Hard
// Goal: build a production-grade config validation system
// Run with: node hard.js

// ─────────────────────────────────────────────
// Challenge: Schema-based config validator
//
// No starter code. You design the solution.
//
// Real apps use libraries like `zod` or `joi` to validate config.
// You will build a simplified version from scratch.
//
// Requirements:
//
// 1. Build a configSchema definition — a plain object where each key maps to:
//    {
//      envKey: 'PORT',           // the env var name
//      type: 'number',           // 'string' | 'number' | 'boolean'
//      required: true,           // true = must be present
//      default: 3000,            // used when not present (only if required: false)
//      validate: (v) => v > 0    // optional extra validation function
//      validationMessage: '...'  // message shown if validate() returns false
//    }
//
//    Define a schema for these config values:
//    - port              (PORT, number, default 3000, must be 1-65535)
//    - nodeEnv           (NODE_ENV, string, default 'development', must be dev/test/prod)
//    - jwtSecret         (JWT_SECRET, string, required, min length 16 chars)
//    - jwtExpiresIn      (JWT_EXPIRES_IN, string, default '7d')
//    - dbUrl             (DATABASE_URL, string, required only in production)
//    - dbPoolSize        (DB_POOL_SIZE, number, default 5, must be 1-50)
//    - logLevel          (LOG_LEVEL, string, default 'info', must be debug/info/warn/error)
//    - corsOrigin        (CORS_ORIGIN, string, default 'http://localhost:3000')
//
// 2. Build a parseConfig(schema) function that:
//    - Iterates the schema
//    - Reads process.env values
//    - Converts to the correct type
//    - Applies defaults
//    - Runs validation functions
//    - Collects ALL errors (not just the first one)
//    - If any errors: throws with a formatted multi-line error message
//    - If all valid: returns the typed config object
//
// 3. The error message should look like:
//    "Config validation failed:
//      - JWT_SECRET: required but missing
//      - PORT: expected number between 1-65535, got 99999
//      - LOG_LEVEL: must be one of debug|info|warn|error, got 'verbose'"
//
// 4. Wire it up:
//    - Create a .env file for this exercise
//    - Load dotenv
//    - Call parseConfig(schema)
//    - Log the resulting config
//    - Test it by intentionally breaking one env var at a time
//
// When you're done, ask yourself:
// - How would you add support for array values ("a,b,c" → ['a', 'b', 'c'])?
// - How would you make dbUrl required only when nodeEnv === 'production'?
//   (conditional requirements — this is the hard part)
// - Why do libraries like zod exist instead of doing this manually?

require('dotenv').config()

// your code here
