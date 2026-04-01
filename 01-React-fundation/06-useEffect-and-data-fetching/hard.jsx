// 06 — useEffect and Data Fetching — Hard
import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────
// Challenge: Build a paginated data table with abort controller
//
// Fetch posts from: https://jsonplaceholder.typicode.com/posts
// The API returns all 100 posts — paginate them client-side.
//
// Requirements:
// 1. Show 10 posts per page
// 2. Pagination controls: Previous / Next / page numbers
//    Disable Previous on page 1, Next on last page
// 3. Show "Page X of Y" and "Showing X–Y of 100"
// 4. Each post shows: title (bold) + body (truncated to 100 chars)
// 5. Clicking a post opens a detail view (same page, not a new route)
//    Detail view fetches /posts/{id}/comments and shows the comment count
//    and each comment's name + body
// 6. Add an AbortController to the comments fetch:
//    if the user clicks a different post before the first fetch completes,
//    the first fetch should be cancelled
//    Add a console.log to verify cancellation is working
// 7. "Back to list" button returns to the paginated view
//    and restores the user's last page position

// Your state shape (fill this in before coding):
// const [posts, setPosts] = ...
// const [page, setPage] = ...
// const [selectedPost, setSelectedPost] = ...
// ...

function PostsApp() {
  // your code here
}


export default PostsApp
