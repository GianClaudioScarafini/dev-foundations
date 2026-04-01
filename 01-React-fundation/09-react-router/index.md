# 09 — React Router

## Setup
```bash
npm install react-router-dom
```

## Core concepts

```jsx
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Dynamic routes and params

```jsx
// URL: /users/42
function UserProfile() {
  const { id } = useParams()   // id = "42" (always a string)
  // fetch user with id...
}
```

## Programmatic navigation

```jsx
function LoginForm() {
  const navigate = useNavigate()

  function handleSubmit() {
    // after login...
    navigate('/dashboard')
  }
}
```

## Protected routes
A pattern — not a built-in feature:

```jsx
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? children : <Navigate to="/login" />
}
```

## Key questions
- What is the difference between `Link` and `<a href>`?
- What does `useParams` return and why are the values always strings?
- How do you pass data between routes without using state?

---

Go to `simple.jsx` when ready.
