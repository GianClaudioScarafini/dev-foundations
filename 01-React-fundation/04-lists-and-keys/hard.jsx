// 04 — Lists and Keys — Hard
import { useState } from 'react'

// ─────────────────────────────────────────────
// Challenge: Build a Tag Manager
//
// This is a real UI pattern used in CMS tools, issue trackers, email clients.
//
// Requirements:
// 1. Display a list of tags as pills (styled spans)
// 2. Each tag has a "✕" to remove it
// 3. An input + "Add" button to add new tags
//    - Trim whitespace before adding
//    - Do not allow duplicates (case-insensitive)
//    - Do not allow empty tags
//    - Show an error message for each of these violations
// 4. Tags are sorted alphabetically (always, automatically)
// 5. Show "No tags" when the list is empty
// 6. "Clear all" button — only visible when there is at least one tag
//
// Start with these tags pre-loaded:
const initialTags = ['React', 'Node.js', 'TypeScript', 'PostgreSQL']

// Design your state before writing JSX.
// What state do you need? How many useState calls?

function TagManager() {
  // your code here
}


export default function App() {
  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Tag Manager</h1>
      <TagManager />
    </div>
  )
}
