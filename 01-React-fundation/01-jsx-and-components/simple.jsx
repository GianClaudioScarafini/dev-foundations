// 01 — JSX and Components — Simple
// Goal: get comfortable writing JSX and function components

// ─────────────────────────────────────────────
// 1. Fix the JSX errors — there are 4 bugs below
//    Run it mentally first, then fix.

function BrokenCard() {
  return (
    <div class="card">
      <img src="photo.jpg">
      <h2>John Doe</h2>
      <p>Software Developer</p>
    </div>
    <button>Follow</button>
  )
}


// ─────────────────────────────────────────────
// 2. Write a Greeting component
//    - Shows an <h1> with "Hello, World!"
//    - Shows a <p> with today's date (use new Date().toLocaleDateString())
//    - Uses a fragment <> instead of a div wrapper

// your code here


// ─────────────────────────────────────────────
// 3. Embed JavaScript in JSX
//    Complete the component so it renders:
//    "5 + 3 = 8"
//    All three values must come from JS expressions inside {}

function MathResult() {
  const a = 5
  const b = 3
  return (
    <p>
      {/* your code here */}
    </p>
  )
}


// ─────────────────────────────────────────────
// 4. Conditional rendering
//    Complete UserStatus so it renders:
//    - <span>Online</span>  when isOnline is true
//    - <span>Offline</span> when isOnline is false
//    Use a ternary. Do not use if/else.

function UserStatus({ isOnline }) {
  return (
    <div>
      {/* your code here */}
    </div>
  )
}


// ─────────────────────────────────────────────
// 5. Compose components
//    Write a Badge component that renders a coloured label.
//    Then render three badges inside an App component:
//    "React", "Node.js", "TypeScript"
//    Each badge should be wrapped in a <span> with className="badge"

// your code here


export default BrokenCard
