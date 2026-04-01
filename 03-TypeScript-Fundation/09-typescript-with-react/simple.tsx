// 09 — TypeScript with React — Simple
// Goal: type props, state, and events in React components
// Add to a Vite React TS project to run

import { useState, useRef } from 'react'

// ─────────────────────────────────────────────
// 1. Add prop types to these components.
//    Do NOT change the JSX or logic. Only add the interface and type the props.

// a) Badge — shows a label with a colour variant
function Badge({ label, variant }) {
  const colours = { success: 'green', warning: 'orange', error: 'red', info: 'blue' }
  return <span style={{ color: colours[variant] }}>{label}</span>
}

// b) Avatar — shows user initials or an image
function Avatar({ name, imageUrl, size }) {
  const initials = name.split(' ').map(w => w[0]).join('')
  if (imageUrl) return <img src={imageUrl} alt={name} width={size} height={size} />
  return <div style={{ width: size, height: size }}>{initials}</div>
}

// c) List — renders any array of items using a render prop
function List({ items, renderItem, emptyMessage }) {
  if (items.length === 0) return <p>{emptyMessage}</p>
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item)}</li>)}</ul>
}


// ─────────────────────────────────────────────
// 2. Type these hooks correctly

// a) Fix the useState types — TypeScript should know the shape of selectedUser
interface User { id: number; name: string; email: string }

function UserPicker({ users }: { users: User[] }) {
  const [selectedUser, setSelectedUser] = useState(null)  // fix this
  //     ↑ TypeScript doesn't know this will be User | null

  return (
    <div>
      {users.map(u => (
        <button key={u.id} onClick={() => setSelectedUser(u)}>
          {u.name}
        </button>
      ))}
      {selectedUser && <p>Selected: {selectedUser.name}</p>}
    </div>
  )
}

// b) Fix the useRef type — inputRef.current should be HTMLInputElement
function SearchBox() {
  const inputRef = useRef(null)  // fix this

  const focus = () => {
    inputRef.current?.focus()  // TypeScript doesn't know .focus() exists yet
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button onClick={focus}>Focus</button>
    </div>
  )
}


// ─────────────────────────────────────────────
// 3. Type event handlers
//    These event handlers have implicit any. Fix them.

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleNameChange = (e) => setName(e.target.value)      // fix e
  const handleEmailChange = (e) => setEmail(e.target.value)    // fix e
  const handleSubmit = (e) => {                                  // fix e
    e.preventDefault()
    console.log({ name, email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={handleNameChange} />
      <input value={email} onChange={handleEmailChange} />
      <button type="submit">Submit</button>
    </form>
  )
}


// ─────────────────────────────────────────────
// 4. Generic component
//    Write a typed Select<T> component that works with any type of option.
//
//    Props:
//    - options: T[]
//    - value: T | null
//    - onChange: (value: T) => void
//    - getLabel: (option: T) => string   ← how to display each option
//    - getKey: (option: T) => string | number  ← unique key for each option
//
//    Test it with User options and also with string options.
//    TypeScript should prevent passing a string option to a User-typed Select.

// your code here

export default ContactForm
