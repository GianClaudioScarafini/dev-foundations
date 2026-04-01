# 05 — Forms

## Controlled vs uncontrolled inputs

**Controlled** — React owns the value via state. This is the standard approach.

```jsx
function Form() {
  const [name, setName] = useState('')

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}
```

**Uncontrolled** — the DOM owns the value. Used with `useRef`. Rare.

## Handling a full form

```jsx
function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()   // ← ALWAYS prevent default on form submit
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  )
}
```

## Validation
Validate on submit (not on every keystroke, it's annoying).
Store errors in a separate state object: `{ email: 'Required', password: '' }`

## Key questions
- Why do we call `e.preventDefault()` in a form submit handler?
- What is `e.target.name` and how does it let one handler manage multiple inputs?
- What is the difference between `onChange` and `onBlur`?

---

Go to `simple.jsx` when ready.
