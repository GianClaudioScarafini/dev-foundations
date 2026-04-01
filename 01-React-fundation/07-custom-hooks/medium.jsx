// 07 — Custom Hooks — Medium
import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────
// 1. useFetch
//    Extract the data fetching pattern into a reusable hook.
//    useFetch(url) → { data, loading, error }
//    - Re-fetches when url changes
//    - Includes AbortController cleanup
//
// Then use useFetch in TWO separate components:
// - PostList: fetches https://jsonplaceholder.typicode.com/posts?_limit=5
// - UserList: fetches https://jsonplaceholder.typicode.com/users?_limit=5
//
// Both should work with zero fetch logic inside the components.

// function useFetch(url) {
//   your code here
// }


// ─────────────────────────────────────────────
// 2. useForm
//    Extract form state management into a hook.
//    useForm(initialValues) → { values, errors, handleChange, setErrors, reset }
//
//    - handleChange works for text inputs, selects, checkboxes
//      Tip: check e.target.type === 'checkbox', use e.target.checked
//    - reset() restores initialValues
//
// Use it to rebuild the RegistrationForm from 05-medium
// The component should only contain JSX — no handleChange or reset logic.

// function useForm(initialValues) {
//   your code here
// }


export default function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '2rem' }}>
      {/* <PostList /> */}
      {/* <UserList /> */}
    </div>
  )
}
