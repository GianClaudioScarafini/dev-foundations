// 01 — JSX and Components — Medium
// Goal: build real-looking components from scratch

// ─────────────────────────────────────────────
// 1. Profile Card component
//    Build a ProfileCard component that renders:
//    - Avatar: a div with className="avatar" containing the user's initials
//    - Name: full name in an <h2>
//    - Role: job title in a <p>
//    - A "View Profile" <button>
//
//    Hardcode this data for now (you'll learn props next):
//    name: "Gian Claudio", role: "Full Stack Developer"
//
//    The initials should be computed from the name (first letter of each word)
//    Hint: split, map, join

// your code here


// ─────────────────────────────────────────────
// 2. Stat Bar component
//    Build a StatBar that shows three stats for a GitHub-like profile:
//    repos: 12, followers: 340, following: 89
//
//    Each stat is a <div> with:
//    - a <strong> showing the number
//    - a <span> showing the label
//
//    Wrap all three in a <div className="stat-bar">

// your code here


// ─────────────────────────────────────────────
// 3. Alert component
//    Build an Alert component that renders a styled box.
//    It receives a `type` prop with values: "success" | "warning" | "error"
//    Map the type to a className: "alert-success", "alert-warning", "alert-error"
//    Render a hardcoded message per type:
//    - success  → "Changes saved successfully"
//    - warning  → "You are about to delete this item"
//    - error    → "Something went wrong"
//
//    Use an object map to look up the message, not a chain of ternaries.

// your code here


// ─────────────────────────────────────────────
// 4. Compose everything
//    Build a Page component that renders:
//    1. ProfileCard
//    2. StatBar
//    3. Three Alerts — one of each type
//    in a <main className="page"> wrapper

// your code here


export default function App() {
  return <Page />
}
