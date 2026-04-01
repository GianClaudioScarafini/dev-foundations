// 01 — JSX and Components — Hard
// Goal: think in components — break a UI into the right pieces

// ─────────────────────────────────────────────
// Challenge: Build a Job Board Card
//
// Design a single JobCard component that renders a realistic job listing.
// No starter code. You decide the structure.
//
// Requirements:
// 1. Shows: job title, company name, location, salary range, posted date
// 2. Shows a list of 3 tech tags (e.g. "React", "Node.js", "PostgreSQL")
//    Each tag is its own Tag component — not inline HTML
// 3. Shows a "Apply Now" button and a "Save" button
// 4. "Save" button toggles between "Save" and "Saved ✓"
//    For now: hardcode the saved state as a variable (you'll do real state in 03)
//    const isSaved = false  ← change this manually to test both states
// 5. The posted date should display as "X days ago"
//    Write a getDaysAgo(dateString) helper function outside the component
//    Example: getDaysAgo("2024-03-25") → "7 days ago"
//
// Hardcode one realistic job listing as a const object above the component.
// No props yet — you'll refactor this in the props exercise.
//
// When done, ask yourself:
// - Which pieces of this UI are reusable?
// - What would change if you had 10 job listings?
// - What data would need to come from an API?

// your code here


export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }}>
      <JobCard />
    </div>
  )
}
