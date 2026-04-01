// 01 — Types and Annotations — Hard
// Goal: use TypeScript to catch real bugs at compile time

// ─────────────────────────────────────────────
// Challenge: Type-safe event system
//
// No starter code. Design the types from scratch.
//
// Context: you're building a typed event emitter.
// In JavaScript, event emitters are untyped — you can emit "foo" and listen for "bar"
// and no one tells you the mismatch. TypeScript can fix this.
//
// Requirements:
//
// 1. Define an EventMap type that maps event names to their payload shapes:
//    {
//      'user:created':  { id: number; name: string; email: string }
//      'user:deleted':  { id: number }
//      'post:published': { postId: number; authorId: number; title: string }
//      'error':         { code: string; message: string; stack?: string }
//    }
//
// 2. Write a typed EventEmitter class with:
//    on<K extends keyof EventMap>(event: K, handler: (payload: EventMap[K]) => void): void
//    emit<K extends keyof EventMap>(event: K, payload: EventMap[K]): void
//    off<K extends keyof EventMap>(event: K, handler: (payload: EventMap[K]) => void): void
//
//    TypeScript should:
//    - Prevent emitting an event that doesn't exist in EventMap
//    - Prevent emitting an event with the wrong payload shape
//    - Autocomplete event names in on() and emit()
//
// 3. Demonstrate it works and TypeScript catches mistakes:
//    const emitter = new EventEmitter()
//
//    // This should work:
//    emitter.on('user:created', (payload) => {
//      console.log(payload.name)  // TypeScript knows payload has .name
//    })
//    emitter.emit('user:created', { id: 1, name: 'Alice', email: 'a@b.com' })
//
//    // These should be TYPE ERRORS (comment them out after confirming):
//    emitter.emit('user:created', { id: 1 })              // missing name + email
//    emitter.emit('nonexistent', { id: 1 })               // event doesn't exist
//    emitter.on('user:deleted', (p) => console.log(p.name))  // deleted has no .name
//
// When you're done, ask yourself:
// - What is `K extends keyof EventMap` doing? Why is extends needed here?
// - This is called a "generic constraint" — when would you use this pattern in real code?
// - What JavaScript does this compile to? Is there any runtime type checking?

// your code here
