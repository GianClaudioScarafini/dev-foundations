# 06 — useEffect and Data Fetching

## What is useEffect?
Side effects are things that happen *outside* the render: fetching data, timers, subscriptions, DOM manipulation.

```jsx
import { useEffect } from 'react'

useEffect(() => {
  // runs after render
}, [dependency])
```

## Dependency array — this is the most important thing to understand

| Dependency array | When it runs |
|-----------------|--------------|
| omitted | After every render |
| `[]` | Once — after the first render only |
| `[value]` | After first render + whenever `value` changes |

## Fetching data — the standard pattern

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/users/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => setUser(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [userId])   // re-fetch when userId changes

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return <p>{user.name}</p>
}
```

## Cleanup
Some effects need cleanup (timers, subscriptions, abort controllers):

```jsx
useEffect(() => {
  const controller = new AbortController()
  fetch(url, { signal: controller.signal })
    .then(...)

  return () => controller.abort()  // cleanup on unmount or re-run
}, [url])
```

## Key questions
- What happens if you omit the dependency array entirely?
- Why can't you make the useEffect callback itself async?
- What is a race condition in data fetching and how does AbortController fix it?

---

Go to `simple.jsx` when ready.
