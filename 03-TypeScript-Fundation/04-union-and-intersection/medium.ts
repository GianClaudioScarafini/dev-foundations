// 04 — Union and Intersection Types — Medium
// Goal: model real async states and API patterns with discriminated unions

// ─────────────────────────────────────────────
// 1. RemoteData — a real pattern for async state in React
//    Every API call goes through these states:
//    idle → loading → success (with data) OR failure (with error)
//
//    Model this as a discriminated union:
//    type RemoteData<T> =
//      | { status: 'idle' }
//      | { status: 'loading' }
//      | { status: 'success'; data: T; fetchedAt: string }
//      | { status: 'failure'; error: string; code: number }
//
//    Write these helper functions:
//    isIdle<T>(d: RemoteData<T>): d is { status: 'idle' }
//    isLoading<T>(d: RemoteData<T>): boolean
//    isSuccess<T>(d: RemoteData<T>): d is { status: 'success'; data: T; fetchedAt: string }
//    isFailure<T>(d: RemoteData<T>): boolean
//    getData<T>(d: RemoteData<T>): T | null   ← return data if success, null otherwise
//    fold<T, R>(d: RemoteData<T>, handlers: {
//      idle: () => R
//      loading: () => R
//      success: (data: T) => R
//      failure: (error: string, code: number) => R
//    }): R
//
//    fold() is like a switch statement but as a function.
//    Use it to render different UI states without if/else chains.

// your code here


// ─────────────────────────────────────────────
// 2. Result type — replace try/catch with explicit return values
//    This pattern is common in Go and Rust. TypeScript handles it well.
//
//    type Result<T, E = string> =
//      | { ok: true; value: T }
//      | { ok: false; error: E }
//
//    Write:
//    ok<T>(value: T): Result<T, never>
//    err<E>(error: E): Result<never, E>
//    map<T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E>
//    flatMap<T, U, E>(result: Result<T, E>, fn: (value: T) => Result<U, E>): Result<U, E>
//    getOrDefault<T, E>(result: Result<T, E>, fallback: T): T
//
//    Then wrap these in Result:
//    parseJSON(raw: string): Result<unknown, string>
//    parseInt(raw: string): Result<number, string>
//
//    Chain them:
//    const result = flatMap(parseJSON('{"age":"30"}'), data =>
//      map(validateAge(data), age => ({ age }))
//    )

// your code here


// ─────────────────────────────────────────────
// 3. Union of API errors
//    Model typed API errors as a discriminated union so callers
//    know exactly what went wrong and can handle each case:
//
//    type ApiError =
//      | { type: 'validation'; fields: { field: string; message: string }[] }
//      | { type: 'not_found'; resource: string; id: string | number }
//      | { type: 'unauthorized'; reason: 'missing_token' | 'expired_token' | 'invalid_token' }
//      | { type: 'forbidden'; requiredRole: string; userRole: string }
//      | { type: 'server_error'; message: string; requestId: string }
//
//    Write formatError(error: ApiError): string that gives a human-readable message for each.
//    Write httpStatus(error: ApiError): number that returns the right HTTP status code.
//    Make sure your switch is exhaustive.

// your code here
