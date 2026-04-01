// 05 — Forms — Hard
import { useState } from 'react'

// ─────────────────────────────────────────────
// Challenge: Multi-step form (wizard)
//
// Build a 3-step job application form.
// This pattern appears in onboarding flows, checkout, wizards everywhere.
//
// Step 1 — Personal Info
//   - Full name (required)
//   - Email (required, valid format)
//   - Phone (optional, numbers only if provided)
//
// Step 2 — Experience
//   - Years of experience (number, 0–50)
//   - Current role (text, required)
//   - Skills (comma-separated input that builds a tag list)
//     Same behaviour as TagManager from 04-hard
//
// Step 3 — Review and Submit
//   - Show a summary of all entered data
//   - "Edit" button per section that jumps back to that step
//   - "Submit" button that logs all data and shows a success screen
//
// Requirements:
// - Validate each step before advancing to the next
// - Show step indicator: "Step 2 of 3"
// - Back button on steps 2 and 3
// - Preserve data when navigating between steps (don't reset on back)
//
// Design your state shape before writing any JSX.
// Write it here as a comment:
//
// State:
// ...

function JobApplicationForm() {
  // your code here
}


export default function App() {
  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Apply</h1>
      <JobApplicationForm />
    </div>
  )
}
