# React Fundamentals — Exercise Track

Goal: go from "I know JS" to "I can build and ship a full-stack React app".

---

## How to navigate

Each folder = one concept.
Each folder has:
- `index.md` — what to learn before you code (short, no fluff)
- `simple.jsx` — warm-up: syntax and basic usage
- `medium.jsx` — apply the concept in a realistic component
- `hard.jsx` — combine concepts, handle edge cases, think like a dev

Work in order. Do not skip ahead.

---

## Track overview

| # | Topic | Why it matters |
|---|-------|----------------|
| 01 | JSX and Components | Everything in React is a component |
| 02 | Props | How components talk to each other |
| 03 | State and Events | How UIs respond to the user |
| 04 | Lists and Keys | Rendering real data |
| 05 | Forms | Every real app has inputs |
| 06 | useEffect and Data Fetching | Connecting to the real world |
| 07 | Custom Hooks | Reusable logic — this is what separates juniors from seniors |
| 08 | Context API | Shared state without prop drilling |
| 09 | React Router | Multi-page apps |
| 10 | Full-Stack Mini Project | Tie everything together with a Node/Express backend |

---

## Session rules (same as JS track)
1. You attempt first, always
2. 15 min stuck → check docs → ask Claude
3. Commit to GitHub at end of every session
4. Copilot OFF during exercises

---

## Setup

Each exercise is a standalone component. To run them:

```bash
npm create vite@latest react-exercises -- --template react
cd react-exercises
npm install
npm run dev
```

Copy the exercise component into `src/App.jsx` and replace the default export.

---

## What job-ready looks like

By the end of this track you will be able to:
- Build a component tree with shared state
- Fetch data from an API and handle loading/error states
- Handle forms with validation
- Set up client-side routing
- Wire a React frontend to a Node/Express backend
- Explain your code in an interview
