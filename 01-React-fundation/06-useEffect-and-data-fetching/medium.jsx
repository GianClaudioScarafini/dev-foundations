// 06 — useEffect and Data Fetching — Medium
import { useState, useEffect } from 'react'

// Public API used in these exercises: https://jsonplaceholder.typicode.com

// ─────────────────────────────────────────────
// 1. Posts list with user names
//    Fetch posts from /posts (returns 100 posts)
//    For each post, the `userId` field links to /users/{userId}
//
//    Strategy: fetch all posts, then fetch the unique users.
//    Show: post title + author name.
//    Show a loading spinner (just text "Loading...") while fetching.
//    Limit to first 10 posts to keep it manageable.

function PostsWithAuthors() {
  // your code here
}


// ─────────────────────────────────────────────
// 2. Search with debounce
//    Input field that searches posts by title.
//    Fetch posts from /posts, filter client-side.
//
//    Add debounce: only filter 300ms after the user stops typing.
//    Without debounce: every keystroke triggers a filter (expensive with real APIs).
//
//    Implement the debounce with useEffect + setTimeout + cleanup.
//    Do NOT use a library.

function DebouncedSearch() {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [posts, setPosts] = useState([])

  // Effect 1: fetch all posts once on mount
  // your code here

  // Effect 2: debounce the query
  // your code here — set debouncedQuery 300ms after query changes
  // return a cleanup that clears the timeout

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  )

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search posts..."
      />
      <p>{filtered.length} results</p>
      <ul>
        {filtered.slice(0, 10).map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  )
}


export default DebouncedSearch
