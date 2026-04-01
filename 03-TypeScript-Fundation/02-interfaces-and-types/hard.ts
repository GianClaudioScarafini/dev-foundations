// 02 — Interfaces and Type Aliases — Hard
// Goal: use TypeScript's type system to enforce business rules at compile time

// ─────────────────────────────────────────────
// Challenge: Type a state machine
//
// A task in your project management tool follows strict state transitions.
// You cannot go from 'done' back to 'todo'. You cannot skip states.
// Enforce this with TypeScript — not with if/else at runtime.
//
// Allowed transitions:
//   backlog → todo
//   todo → in_progress
//   in_progress → in_review | todo (send back)
//   in_review → done | in_progress (send back)
//   done → (nothing — terminal state)
//
// Requirements:
//
// 1. Define the TaskStatus type as a union of string literals.
//
// 2. Define a type TransitionMap that maps each status to the statuses it can move to.
//    Use a mapped type or a plain object type — your choice.
//    The key insight: TransitionMap[S] should only contain VALID next statuses for S.
//
// 3. Write a function transition<S extends TaskStatus>(
//      task: Task,
//      nextStatus: TransitionMap[S]
//    ): Task
//
//    It should return a new task with the updated status.
//    TypeScript should make it impossible to pass an invalid transition.
//
// 4. Demonstrate that these compile:
//    transition(task, 'todo')         // backlog → todo ✓
//    transition(task, 'in_progress')  // todo → in_progress ✓
//
//    And these are TYPE ERRORS (comment them out after confirming):
//    transition(task, 'done')         // todo → done not allowed ✗
//    transition(task, 'backlog')      // can't go backwards ✗
//
// 5. BONUS: Write a type guard function isValidTransition(from, to) that
//    TypeScript narrows the type of 'to' based on 'from'.
//
// When you're done, ask yourself:
// - What is a "mapped type"? What does `{ [K in SomeUnion]: ... }` do?
// - Could you enforce this same rule with a plain JS object at runtime? What's different about doing it with types?
// - What is "type narrowing"? Give two examples you've seen already.

// your code here
