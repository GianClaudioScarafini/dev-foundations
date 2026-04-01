// 07 — Custom Hooks — Hard
import { useState, useEffect, useCallback } from 'react'

// ─────────────────────────────────────────────
// Challenge: usePaginatedFetch
//
// Build a hook that handles paginated API requests.
// This is what you'd actually build and use at work.
//
// API: https://jsonplaceholder.typicode.com/posts
//   Use query params: ?_page=1&_limit=10
//   The API returns all matching posts (no total count in headers here,
//   so hardcode total = 100 or detect end-of-data when results < limit)
//
// Hook signature:
//   usePaginatedFetch(baseUrl, limit)
//
// Returns:
//   {
//     data,          // current page results
//     loading,
//     error,
//     page,          // current page number
//     totalPages,
//     goToPage,      // (pageNumber) => void
//     nextPage,      // () => void
//     prevPage,      // () => void
//     hasNext,       // boolean
//     hasPrev,       // boolean
//   }
//
// Requirements:
// 1. Fetch the correct page when `page` changes
// 2. goToPage should clamp to valid range (1 to totalPages)
// 3. Include AbortController cleanup
// 4. The component using this hook should contain ONLY layout and JSX

// function usePaginatedFetch(baseUrl, limit = 10) {
//   your code here
// }

function PostsPage() {
  // const { data: posts, loading, error, page, totalPages, nextPage, prevPage, goToPage, hasNext, hasPrev }
  //   = usePaginatedFetch('https://jsonplaceholder.typicode.com/posts', 10)

  // your JSX here — no fetch logic in this component
}


export default PostsPage
