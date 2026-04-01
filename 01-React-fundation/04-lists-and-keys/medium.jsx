// 04 — Lists and Keys — Medium
import { useState } from 'react'

// ─────────────────────────────────────────────
// 1. Searchable list
//    Render the job listings below.
//    Add a search input that filters by title or company (case-insensitive).
//    Show "No results for 'X'" when nothing matches.
//    The filter runs on every keystroke — no submit button.

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Acme Corp', location: 'Remote' },
  { id: 2, title: 'Backend Engineer', company: 'BuildFast', location: 'London' },
  { id: 3, title: 'Full Stack Developer', company: 'StartupXYZ', location: 'Manchester' },
  { id: 4, title: 'React Native Dev', company: 'MobileFirst', location: 'Remote' },
  { id: 5, title: 'DevOps Engineer', company: 'CloudOps', location: 'Edinburgh' },
]

function JobSearch() {
  // your code here
}


// ─────────────────────────────────────────────
// 2. Sortable list
//    Add sort buttons to the job list: "Sort by Title" and "Sort by Company"
//    Clicking the same button again reverses the sort direction (asc/desc)
//    Show an arrow ↑ or ↓ on the active sort button
//
//    Do not mutate the original jobs array.

function SortableJobs() {
  // your code here
}


// ─────────────────────────────────────────────
// 3. Combine: search + sort
//    Merge exercises 1 and 2 into one component.
//    Filter first, then sort the filtered results.

function JobBoard() {
  // your code here
}


export default JobBoard
