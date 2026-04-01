# 01 — JSX and Components

## What is JSX?
JSX is JavaScript that looks like HTML. It compiles to `React.createElement()` calls.

```jsx
// JSX
const el = <h1>Hello</h1>

// What it compiles to
const el = React.createElement('h1', null, 'Hello')
```

## Rules you must know
1. Return a single root element (use `<>...</>` fragment if needed)
2. Use `className` not `class`
3. JavaScript inside JSX lives in `{}`
4. Self-closing tags must close: `<img />` not `<img>`
5. Components must start with a capital letter: `MyCard` not `mycard`

## Two kinds of components

```jsx
// Function component — this is what you will write 99% of the time
function Greeting() {
  return <h1>Hello, world</h1>
}

// Arrow function variant — same thing
const Greeting = () => <h1>Hello, world</h1>
```

## Key questions to answer before coding
- What is the difference between a component and an element?
- Why must component names be capitalised?
- What happens if you return two sibling elements without a wrapper?

---

Go to `simple.jsx` when ready.
