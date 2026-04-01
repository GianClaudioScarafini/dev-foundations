// 06 — useEffect and Data Fetching — Simple
import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────
// 1. Predict the output
//    Write the order of console.log messages as a comment, then verify.

function PredictMe() {
  console.log('render')

  useEffect(() => {
    console.log('effect — no deps')
  })

  useEffect(() => {
    console.log('effect — empty array')
  }, [])

  return <p>Check the console</p>
}

// Order prediction:
// 1.
// 2.
// 3.
// What happens if you click a button that triggers a re-render?


// ─────────────────────────────────────────────
// 2. Document title
//    Build a component with a counter.
//    Every time the count changes, update document.title to "Count: X".
//    Reset the title to "React App" when the component unmounts.
//    Hint: the cleanup function runs on unmount.

function TitleUpdater() {
  const [count, setCount] = useState(0)
  // your useEffect here

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}


// ─────────────────────────────────────────────
// 3. Fetch on mount
//    Fetch a user from this public API (no auth needed):
//    https://jsonplaceholder.typicode.com/users/1
//
//    Show loading state, error state, and the user's name + email when loaded.

function UserProfile() {
  // your code here
}


// ─────────────────────────────────────────────
// 4. Fetch when prop changes
//    UserById fetches a different user based on the `id` prop.
//    The fetch should re-run when id changes.
//    Parent lets you switch between user IDs 1–5.

function UserById({ id }) {
  // your code here — fetch https://jsonplaceholder.typicode.com/users/{id}
}

export default function App() {
  const [userId, setUserId] = useState(1)
  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map(id => (
          <button key={id} onClick={() => setUserId(id)}
            style={{ fontWeight: userId === id ? 'bold' : 'normal', marginRight: 8 }}>
            User {id}
          </button>
        ))}
      </div>
      <UserById id={userId} />
    </div>
  )
}
