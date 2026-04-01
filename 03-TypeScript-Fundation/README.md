# TypeScript Fundamentals — Exercise Track

Goal: stop writing "JS with type annotations" and start thinking in TypeScript.

TypeScript is not just "add types to JavaScript". It changes how you design code.
By the end of this track, you will write TypeScript that catches bugs before you run anything.

---

## How to navigate

Each folder = one concept.
Each folder has:
- `index.md` — what to learn before you code
- `simple.ts` — syntax and basic usage
- `medium.ts` — realistic usage in an app context
- `hard.ts` — design problems, generics, type-level thinking

Work in order. Do not skip ahead.

---

## Track overview

| # | Topic | Why it matters |
|---|-------|----------------|
| 01 | Types and Annotations | The foundation — primitives, arrays, objects |
| 02 | Interfaces and Type Aliases | How you model your data |
| 03 | Functions | Typed params, return types, overloads |
| 04 | Union and Intersection Types | Modelling "either/or" and "both" — used everywhere |
| 05 | Generics | The hardest concept — and the most powerful |
| 06 | Classes and Access Modifiers | OOP with TypeScript's safety |
| 07 | Utility Types | TS ships Partial, Pick, Omit, Required — use them |
| 08 | TypeScript with Node/Express | Type your API layer |
| 09 | TypeScript with React | Typed components, props, hooks, events |

---

## Setup

```bash
npm install -D typescript ts-node @types/node
npx tsc --init
```

Run a single file without compiling first:
```bash
npx ts-node simple.ts
```

Or compile and run:
```bash
npx tsc simple.ts && node simple.js
```

---

## Where TypeScript fits in your stack

```
00-JS-fundation     → the language core (done)
03-TypeScript       → type layer on top (you are here)
02-Nodejs-Fundation → backend (redo in TS after this track)
01-React-fundation  → frontend (redo in TS after this track)
04-Projects         → combine everything with TypeScript throughout
```

---

## What job-ready looks like

By the end of this track you will be able to:
- Type any JavaScript code you've already written
- Design data models with interfaces and avoid runtime errors
- Write generic utility functions that work on any type safely
- Understand and write typed Express routes
- Write React components with full type safety on props and state
- Read TypeScript errors and fix them without guessing
