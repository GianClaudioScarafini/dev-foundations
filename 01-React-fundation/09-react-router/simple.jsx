// 09 — React Router — Simple
// Run: npm install react-router-dom (if not already installed)
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'

// ─────────────────────────────────────────────
// 1. Basic routing
//    Set up routes for three pages: Home, About, Contact
//    Add a Navbar with Link components to each page
//    Add a 404 "Not Found" catch-all route

function Home() {
  return <h1>Home</h1>
}
function About() {
  return <h1>About</h1>
}
function Contact() {
  return <h1>Contact</h1>
}
function NotFound() {
  return <h1>404 — Page not found</h1>
}

function Navbar() {
  // your code here — use Link, not <a>
}

// your App with Routes here


// ─────────────────────────────────────────────
// 2. Dynamic route with useParams
//    Add a route /users/:id
//    UserPage reads the id from the URL and displays it
//    Add links to User 1, User 2, User 3 on the Home page

function UserPage() {
  const { id } = useParams()
  // your code here
}


// ─────────────────────────────────────────────
// 3. Programmatic navigation
//    Add a search input to the Home page.
//    When the user submits, navigate to /search?q=QUERY
//    On the Search page, read the query with useSearchParams and display it.
//
//    import { useSearchParams } from 'react-router-dom'
//    const [searchParams] = useSearchParams()
//    const q = searchParams.get('q')

function SearchPage() {
  // your code here
}


export default function App() {
  return (
    <BrowserRouter>
      {/* your routes here */}
    </BrowserRouter>
  )
}
