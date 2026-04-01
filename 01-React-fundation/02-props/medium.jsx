// 02 — Props — Medium
// Goal: design a real component API using props

// ─────────────────────────────────────────────
// 1. Refactor JobCard from the hard exercise in 01
//    Take your hardcoded JobCard and make it accept a `job` prop.
//    The parent (App) passes the data down.
//
//    job shape:
//    {
//      title: "Frontend Developer",
//      company: "Acme Corp",
//      location: "Remote",
//      salary: "£50k–£65k",
//      postedAt: "2024-03-20",
//      tags: ["React", "TypeScript", "GraphQL"]
//    }
//
//    JobCard should only render — no logic for generating data.

const jobs = [
  {
    title: "Frontend Developer",
    company: "Acme Corp",
    location: "Remote",
    salary: "£50k–£65k",
    postedAt: "2024-03-20",
    tags: ["React", "TypeScript", "GraphQL"]
  },
  {
    title: "Backend Engineer",
    company: "BuildFast Ltd",
    location: "London",
    salary: "£60k–£80k",
    postedAt: "2024-03-22",
    tags: ["Node.js", "PostgreSQL", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Manchester",
    salary: "£45k–£60k",
    postedAt: "2024-03-24",
    tags: ["React", "Node.js", "MongoDB"]
  }
]

// Write JobCard here — receives a `job` prop


// ─────────────────────────────────────────────
// 2. Render all three jobs
//    Map over the `jobs` array above and render a JobCard for each.
//    Don't forget the key prop — what should you use as the key here?

export default function App() {
  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* your code here */}
    </div>
  )
}


// ─────────────────────────────────────────────
// 3. Button component with variants
//    Build a Button component that accepts:
//    - children: the label
//    - variant: "primary" | "secondary" | "danger"
//    - onClick: a function
//    - disabled: boolean (default false)
//
//    Map variant to a className. When disabled, show 50% opacity.
//    The component should NOT define any onClick logic — it just passes it through.

// your code here
