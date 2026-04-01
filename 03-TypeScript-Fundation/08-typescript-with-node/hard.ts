// 08 — TypeScript with Node/Express — Hard
// Goal: strict TypeScript on a production-grade Express API

// ─────────────────────────────────────────────
// Challenge: Migrate an untyped API to strict TypeScript
//
// Take the Node.js exercise from 07-rest-api/medium.js (the blog API)
// and rewrite it in strict TypeScript with:
//
// 1. tsconfig.json with "strict": true — no escape hatches
//
// 2. Typed everything:
//    - All request handlers: Request<P,B,Q> generics
//    - All middleware: proper NextFunction typing
//    - All service functions: explicit return types
//    - All models: interfaces with readonly where appropriate
//
// 3. A custom error hierarchy:
//    class AppError extends Error { status: number }
//    class NotFoundError extends AppError { constructor(resource: string, id: unknown) }
//    class ValidationError extends AppError { constructor(fields: ValidationDetail[]) }
//    class ConflictError extends AppError { constructor(message: string) }
//
//    Your error handler should use `instanceof` to handle each type differently.
//
// 4. Zero `any` types — use `unknown` where you need to accept unknown input.
//    If you find yourself reaching for `any`, ask why and find the typed alternative.
//
// 5. A typed response helper:
//    function sendSuccess<T>(res: Response, data: T, status = 200): void
//    function sendError(res: Response, error: AppError): void
//
// 6. Run with:
//    npx ts-node --strict hard.ts
//
//    Any TypeScript error = bug to fix, not a reason to add // @ts-ignore
//
// When you're done, ask yourself:
// - What errors did TypeScript catch that you wouldn't have caught without types?
// - Where did you have to change your JS approach to make it type-safe?
// - What is the `unknown` type good for, specifically in error handlers?

// your code here
