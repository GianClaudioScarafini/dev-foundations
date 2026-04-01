# 07 — Custom Hooks

## What is a custom hook?
A function that starts with `use` and calls other hooks.
It lets you extract stateful logic so multiple components can share it.

```jsx
// Before: logic trapped inside the component
function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  // ... 20 more lines of fetch logic
}

// After: logic lives in a hook
function useSearch(endpoint) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  // ... fetch logic
  return { query, setQuery, results, loading }
}

function SearchPage() {
  const { query, setQuery, results, loading } = useSearch('/api/jobs')
  // clean component, just JSX
}
```

## Rules of hooks (apply to custom hooks too)
1. Only call hooks at the top level — not inside loops, conditions, or nested functions
2. Only call hooks from React function components or other hooks

## When to extract a custom hook
- The same stateful logic appears in 2+ components
- A component has too much logic and the JSX is hard to find
- You want to test the logic separately from the UI

## Key questions
- What is the difference between a custom hook and a utility function?
- Can two components share a custom hook and share the same state?
- Can you call a custom hook conditionally?

---

Go to `simple.jsx` when ready.
