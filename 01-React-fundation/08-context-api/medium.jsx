// 08 — Context API — Medium
import { createContext, useContext, useState } from 'react'

// ─────────────────────────────────────────────
// Build an Auth context — the most common real-world use of context
//
// AuthContext provides:
//   {
//     user,         // null or { id, name, email, role }
//     login,        // (credentials) => void — fake it, no real API
//     logout,       // () => void
//     isLoggedIn,   // boolean derived value
//   }
//
// Components:
//
// 1. LoginForm — email + password fields
//    On submit: call login() with hardcoded user data (pretend it worked)
//    Fake user: { id: 1, name: 'Gian Claudio', email: 'gian@example.com', role: 'admin' }
//
// 2. Navbar — shows:
//    - App name on the left
//    - "Login" link when logged out
//    - User's name + "Logout" button when logged in
//    Reads from AuthContext — no props from parent
//
// 3. Dashboard — shows a welcome message with the user's name
//    If not logged in, renders <LoginForm /> instead
//
// 4. App — wraps everything in AuthProvider, renders Navbar + Dashboard
//
// No routing yet — just conditional rendering based on auth state.

// your code here


export default function App() {
  return (
    // <AuthProvider>
    //   <Navbar />
    //   <main style={{ padding: '2rem' }}>
    //     <Dashboard />
    //   </main>
    // </AuthProvider>
    <p>Build the components above, then uncomment</p>
  )
}
