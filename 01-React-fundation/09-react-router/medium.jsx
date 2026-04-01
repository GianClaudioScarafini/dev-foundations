// 09 — React Router — Medium
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, Navigate } from 'react-router-dom'
import { createContext, useContext, useState } from 'react'

// ─────────────────────────────────────────────
// Build a Job Board with routing
//
// Routes:
//   /              → JobList (all jobs)
//   /jobs/:id      → JobDetail (single job)
//   /login         → LoginPage
//   /apply/:id     → ApplicationForm (protected — must be logged in)
//
// Requirements:
// 1. JobList: shows all jobs, each is a Link to /jobs/:id
//
// 2. JobDetail: reads :id from URL, finds job in the jobs array,
//    shows full details, has "Apply Now" button that navigates to /apply/:id
//
// 3. ProtectedRoute: if not logged in, redirect to /login
//    After login, redirect back to the original URL
//    Hint: useLocation + navigate(location.state?.from || '/')
//
// 4. LoginPage: fake login — any email + "password" works
//    On success: navigate to the page they came from
//
// 5. ApplicationForm: shows job title, simple form (name + cover note)
//    On submit: show a success message

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Acme Corp', location: 'Remote', salary: '£50k', description: 'Build great UIs with React and TypeScript.' },
  { id: 2, title: 'Backend Engineer', company: 'BuildFast', location: 'London', salary: '£65k', description: 'Design and build REST APIs with Node.js.' },
  { id: 3, title: 'Full Stack Developer', company: 'StartupXYZ', location: 'Manchester', salary: '£55k', description: 'Own features end to end across the stack.' },
]

// AuthContext (you can copy from 08 or rebuild small here)
const AuthContext = createContext(null)

// your code here


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* your routes */}
      </BrowserRouter>
    </AuthProvider>
  )
}
