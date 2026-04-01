// 03 — State and Events — Hard
import { useState } from 'react'

// ─────────────────────────────────────────────
// Challenge: Build a Kanban board (mini Trello)
//
// Columns: "To Do", "In Progress", "Done"
// Each column shows its tasks.
//
// Requirements:
// 1. Add a task: input + button at the top of "To Do"
//    Task must have a non-empty title — validate before adding
// 2. Move a task: each task has "→" button to move it to the next column
//    Tasks in "Done" have no move button
// 3. Delete a task: "✕" button on each task
// 4. Show task count in each column header: "To Do (3)"
//
// State shape — think about this before coding:
//   Option A: one array with a `status` field per task
//   Option B: three separate arrays, one per column
//
//   Which is easier to move tasks between columns?
//   Write your answer in a comment before you start.
//
// No libraries. Plain React state.

// Answer: which state shape will you use and why?
// ...

// your code here


export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Kanban</h1>
      <KanbanBoard />
    </div>
  )
}
