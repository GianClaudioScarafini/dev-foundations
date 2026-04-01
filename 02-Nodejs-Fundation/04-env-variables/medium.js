// 04 — Environment Variables — Medium
// Goal: build a reusable config module used across an app
// Run with: node medium.js
// Run with: NODE_ENV=production node medium.js

require('dotenv').config()

// ─────────────────────────────────────────────
// Context: you're building a config system for a real Express app.
// The config should differ between development and production.
// It should fail fast if required vars are missing.
// It should be importable by other modules.

// ─────────────────────────────────────────────
// 1. Create config.js in this folder.
//    It should export a frozen config object (Object.freeze — look it up).
//    Why frozen? So no other module can accidentally mutate shared config.
//
//    The config should look like this:
//    {
//      env: 'development',       // from NODE_ENV, default 'development'
//      isDev: true,              // true when env === 'development'
//      isProd: false,            // true when env === 'production'
//      server: {
//        port: 3000,             // from PORT, must be a number
//        host: 'localhost'       // from HOST, default 'localhost'
//      },
//      database: {
//        url: '...',             // from DATABASE_URL (required in production)
//        poolSize: 5             // from DB_POOL_SIZE, default 5, must be a number
//      },
//      auth: {
//        jwtSecret: '...',       // from JWT_SECRET (always required)
//        jwtExpiresIn: '7d'      // from JWT_EXPIRES_IN, default '7d'
//      },
//      logging: {
//        level: 'debug',         // from LOG_LEVEL, default 'debug' in dev, 'error' in prod
//        prettyPrint: true       // true in dev, false in prod
//      }
//    }
//
//    Validation rules:
//    - JWT_SECRET is always required
//    - DATABASE_URL is required only when NODE_ENV=production
//    - Fail with a clear error message listing all missing vars

const config = require('./config')

// your code here — add these to your .env to test:
// JWT_SECRET=my-super-secret-jwt-key
// DATABASE_URL=postgres://localhost:5432/myapp

console.log(config)
console.log('Is development:', config.isDev)
console.log('Logging level:', config.logging.level)


// ─────────────────────────────────────────────
// 2. Environment-specific behaviour
//    Using your config object (not process.env directly), write a
//    startupBanner() function that logs different things depending on the env:
//
//    Development:
//    "
//    ┌────────────────────────────┐
//    │  MyApp — DEVELOPMENT MODE  │
//    │  http://localhost:3000     │
//    │  DB: postgres://localhost  │
//    │  JWT expires: 7d           │
//    └────────────────────────────┘
//    "
//
//    Production:
//    "[MyApp] Starting production server on port 3000"
//    (less verbose — don't leak internal details to logs in prod)

function startupBanner() {
  // your code here
}

startupBanner()


// ─────────────────────────────────────────────
// 3. Secret redaction
//    Write a function safeConfig(config) that returns a copy of the config
//    with sensitive values replaced by '[REDACTED]'.
//    Fields to redact: jwtSecret, database.url (redact the password part only)
//    Log the safe version — this is what you'd log on startup.
//
//    Example database URL redaction:
//    "postgres://admin:s3cr3t@db.host:5432/myapp"
//    → "postgres://admin:[REDACTED]@db.host:5432/myapp"

function safeConfig(config) {
  // your code here
}

console.log('\nSafe config (loggable):')
console.log(safeConfig(config))
