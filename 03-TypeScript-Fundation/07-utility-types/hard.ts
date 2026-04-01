// 07 — Utility Types — Hard
// Goal: write types that generate other types — the meta level

// ─────────────────────────────────────────────
// Challenge: Build a type-safe route system
//
// Express routes are untyped. You can access req.params.anythingYouWant.
// Build a system where route parameters are fully typed.
//
// Requirements:
//
// 1. Write a type ExtractRouteParams<Route extends string> that parses
//    route parameters from a route string at the type level:
//
//    ExtractRouteParams<'/users/:id'>             → { id: string }
//    ExtractRouteParams<'/users/:userId/posts/:postId'> → { userId: string; postId: string }
//    ExtractRouteParams<'/health'>                → {}  (no params)
//
//    Hint: Use TypeScript template literal types and infer:
//    type ExtractRouteParams<T extends string> =
//      T extends `${infer _Start}:${infer Param}/${infer Rest}`
//        ? { [K in Param | keyof ExtractRouteParams<`/${Rest}`>]: string }
//        : T extends `${infer _Start}:${infer Param}`
//          ? { [K in Param]: string }
//          : {}
//
//    Study the above hint, understand it, then implement it yourself.
//
// 2. Build a typed Router class using this:
//    class TypedRouter {
//      get<Route extends string>(
//        path: Route,
//        handler: (params: ExtractRouteParams<Route>, query: Record<string, string>) => unknown
//      ): void
//    }
//
//    Usage:
//    router.get('/users/:id', ({ id }) => {
//      // id is typed as string ✓
//      // id.toUpperCase() works ✓
//    })
//
//    router.get('/users/:userId/posts/:postId', ({ userId, postId }) => {
//      // Both typed as string ✓
//    })
//
// 3. Extend to also type the request body for POST routes:
//    post<Route extends string, Body>(
//      path: Route,
//      handler: (params: ExtractRouteParams<Route>, body: Body) => unknown
//    ): void
//
//    router.post<'/users', CreateUserInput>('/users', (_, body) => {
//      body.email  // typed as string ✓
//      body.nonExistent  // Error ✓
//    })
//
// When you're done, ask yourself:
// - What are "template literal types"? What else can you do with them?
// - What does `infer` do in a conditional type?
// - This technique is used in libraries like tRPC. What problem does tRPC solve?

// your code here
