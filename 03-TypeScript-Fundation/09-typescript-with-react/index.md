# 09 — TypeScript with React

## Setup

```bash
npm create vite@latest my-app -- --template react-ts
```

This gives you a React + TypeScript project with the right config out of the box.

## Typing component props

```tsx
// Type props with an interface
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
  children?: React.ReactNode  // anything React can render
}

function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={`btn-${variant}`}>
      {label}
    </button>
  )
}
```

## Typing hooks

```tsx
// useState — TypeScript usually infers from initial value
const [count, setCount] = useState(0)          // inferred: number
const [user, setUser] = useState<User | null>(null)  // explicit: can't infer User

// useRef
const inputRef = useRef<HTMLInputElement>(null)  // type the DOM element

// Custom hook with typed return
function useCounter(initial: number): [number, () => void, () => void] {
  const [count, setCount] = useState(initial)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)
  return [count, increment, decrement]
}
```

## Typing events

```tsx
function SearchInput() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.clientX, e.clientY)
  }

  return <input onChange={handleChange} />
}
```

## Typing children

```tsx
// ReactNode — anything React can render (string, number, element, array, null)
interface CardProps { children: React.ReactNode }

// ReactElement — must be a React element (not string/number)
interface WrapperProps { children: React.ReactElement }

// FC (FunctionComponent) — includes children automatically (avoid in modern React)
const Card: React.FC<CardProps> = ({ children }) => <div>{children}</div>
```

## Key questions to answer before coding
- What is `React.ReactNode` vs `React.ReactElement`?
- How do you type a `useState` that starts as `null` but will hold an object?
- What is the type of an `onChange` event on an `<input>`?
- What does `useRef<HTMLInputElement>(null)` produce?

---

Go to `simple.tsx` when ready.
