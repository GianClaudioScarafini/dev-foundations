// 08 — Context API — Simple
import { createContext, useContext, useState } from 'react'

// ─────────────────────────────────────────────
// 1. Theme context
//    Create a ThemeContext that provides: { theme, toggleTheme }
//    theme is either 'light' or 'dark'
//
//    ThemeProvider wraps the app and owns the state.
//    ThemedBox reads the theme and applies it as a className.
//    ToggleButton calls toggleTheme from context — no props needed.
//
//    Test: clicking the button should toggle the theme visually.

// const ThemeContext = createContext(null)

// function ThemeProvider({ children }) {
//   your code here
// }

// function ThemedBox() {
//   your code here — reads from context
// }

// function ToggleButton() {
//   your code here — reads from context
// }

export default function App() {
  return (
    // <ThemeProvider>
    //   <ThemedBox>
    //     <h1>Hello</h1>
    //     <ToggleButton />
    //   </ThemedBox>
    // </ThemeProvider>
    <p>Uncomment after building the components above</p>
  )
}


// ─────────────────────────────────────────────
// 2. Spot the mistake
//    Why does UserAvatar below always show "Guest" even though App passes a user?
//    Fix it with a comment explaining what was wrong.

const UserContext = createContext({ name: 'Guest' })

function UserAvatar() {
  const user = useContext(UserContext)
  return <p>Hello, {user.name}</p>
}

function BrokenApp() {
  const [user] = useState({ name: 'Gian' })
  return (
    // Bug: missing Provider — UserAvatar reads the default context value
    <div>
      <UserAvatar />
    </div>
  )
}
// Fix BrokenApp here:
