# 08 — Context API

## What is the problem Context solves?
**Prop drilling**: passing data through many layers of components that don't need it.

```
App (has user state)
  └── Layout
        └── Navbar
              └── UserAvatar  ← actually needs the user
```

Without context: user gets passed through Layout and Navbar just to reach UserAvatar.
With context: UserAvatar reads it directly from context.

## How to use context

```jsx
// 1. Create the context
const ThemeContext = createContext('light')   // default value

// 2. Provide it — wrap the tree that needs access
function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout />
    </ThemeContext.Provider>
  )
}

// 3. Consume it — anywhere in the tree
function UserAvatar() {
  const { theme } = useContext(ThemeContext)
  return <div className={theme}>...</div>
}
```

## When to use context vs props
- **Props**: data used by 1-2 levels, component is reusable across apps
- **Context**: data needed by many components (auth user, theme, language, cart)
- **Not a replacement for state management** — context rerenders all consumers when value changes

## Key questions
- What happens to all components that consume a context when its value changes?
- Why is it bad practice to put everything in a single global context?
- What is the difference between `createContext`, `Provider`, and `useContext`?

---

Go to `simple.jsx` when ready.
