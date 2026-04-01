// 05 — Forms — Simple
import { useState } from 'react'

// ─────────────────────────────────────────────
// 1. Controlled input
//    Wire up this input so the text below updates as you type.
//    When the input is empty, show "Start typing..."

function LivePreview() {
  const [text, setText] = useState('')
  return (
    <div>
      <input type="text" {/* your props here */} />
      <p>{/* your code here */}</p>
    </div>
  )
}


// ─────────────────────────────────────────────
// 2. Login form
//    Build a form with email and password fields.
//    On submit: prevent default, log the values to the console.
//    Use a single `form` state object and a single `handleChange` function.

function LoginForm() {
  // your code here
}


// ─────────────────────────────────────────────
// 3. Checkbox and select
//    Build a preferences form with:
//    - A checkbox: "Subscribe to newsletter" (boolean)
//    - A select: "Experience level" with options: Junior, Mid, Senior
//    - A submit button that logs both values

function PreferencesForm() {
  // your code here
}


// ─────────────────────────────────────────────
// 4. Reset a form
//    Add a "Clear" button to LoginForm that resets both fields to empty strings.
//    The Clear button should NOT submit the form.
//    Hint: type="button" prevents accidental submit

// update your LoginForm above to add this


export default LoginForm
