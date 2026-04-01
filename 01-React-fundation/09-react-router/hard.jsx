// 09 — React Router — Hard
// This exercise bridges frontend routing and a real backend.
// You will build the frontend. The backend exercise is in 10-full-stack-mini-project.

import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, Navigate, Outlet } from 'react-router-dom'

// ─────────────────────────────────────────────
// Challenge: Build a full routing structure for a dashboard app
//
// Route structure:
//   /login                   → public
//   /                        → redirect to /dashboard (if logged in)
//   /dashboard               → protected layout (persistent sidebar + header)
//     /dashboard/            → Overview page (index route)
//     /dashboard/jobs        → Job listings
//     /dashboard/jobs/:id    → Job detail (nested inside jobs layout? your call)
//     /dashboard/profile     → User profile (editable form)
//     /dashboard/settings    → Settings (theme toggle, notifications toggle)
//   *                        → 404
//
// Requirements:
// 1. Layout route: DashboardLayout uses <Outlet /> for nested content
//    Sidebar links use NavLink (shows active state automatically)
//    import { NavLink } from 'react-router-dom'
//
// 2. Index route: /dashboard shows a welcome card + 3 stat cards
//    (hardcoded numbers: 12 jobs saved, 3 applications sent, 2 interviews)
//
// 3. Breadcrumbs: show current path as "Dashboard / Jobs / Frontend Developer"
//    Hint: useLocation + split the pathname
//
// 4. Persist scroll position: when navigating back to /dashboard/jobs,
//    restore the user's scroll position
//    Hint: store scrollY in a ref or session state
//
// 5. 404 inside dashboard: navigating to /dashboard/unknown
//    shows an inline "Page not found" inside the dashboard layout
//    (not the public 404 page)
//
// This is what a real app looks like. Take your time.

// your code here


export default function App() {
  return (
    <BrowserRouter>
      {/* your routes */}
    </BrowserRouter>
  )
}
