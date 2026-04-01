# 02 — Props

## What are props?
Props are how you pass data into a component. They flow **down** — parent to child.

```jsx
// Passing props
<UserCard name="Gian" role="Developer" />

// Receiving props
function UserCard({ name, role }) {
  return <p>{name} — {role}</p>
}
```

## Rules
1. Props are **read-only** — never mutate them
2. You can pass any JS value: string, number, array, object, function, JSX
3. Destructure in the function signature — cleaner than `props.name`
4. Default values: `function Card({ title = "Untitled" })`

## Children prop

```jsx
<Card>
  <p>This is the card content</p>
</Card>

function Card({ children }) {
  return <div className="card">{children}</div>
}
```

`children` is just another prop — it's whatever you put between the tags.

## Key questions
- What is the difference between props and state?
- Can a child component change its own props?
- When would you use the `children` prop?

---

Go to `simple.jsx` when ready.
