// 05 — Forms — Medium
import { useState } from 'react'

// ─────────────────────────────────────────────
// Build a Registration form with validation
//
// Fields:
// - Full name (required, min 2 characters)
// - Email (required, must contain @ and .)
// - Password (required, min 8 characters)
// - Confirm password (must match password)
// - Role: select with options "Developer", "Designer", "Manager"
//
// Validation rules:
// - Validate on submit, not on every keystroke
// - Show an error message below each invalid field
// - Do NOT submit if there are errors
// - On successful submit, show a success message and reset the form
//
// Error state shape:
// { name: '', email: '', password: '', confirmPassword: '' }
//
// Tips:
// - Write a validate() function that returns the errors object
// - A field has an error if its error string is non-empty

function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Developer',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    // your code here
  }

  function validate() {
    // your code here — return an errors object
  }

  function handleSubmit(e) {
    e.preventDefault()
    // your code here
  }

  if (submitted) {
    return <p>Registration successful! Welcome, {form.name}.</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* your fields here */}
    </form>
  )
}


export default function App() {
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Register</h1>
      <RegistrationForm />
    </div>
  )
}
