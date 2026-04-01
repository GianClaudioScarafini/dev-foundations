// 07 — Custom Hooks — Simple
import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────
// 1. useToggle
//    Extract toggle logic into a reusable hook.
//    useToggle(initialValue) → [value, toggle]

// function useToggle(initial) {
//   your code here
// }

// Use it in two components:
// - ShowHide: toggles visibility of a paragraph
// - DarkMode: toggles a dark/light class on a box


// ─────────────────────────────────────────────
// 2. useLocalStorage
//    Like useState, but persists to localStorage.
//    useLocalStorage(key, defaultValue) → [value, setValue]
//
//    On mount: read from localStorage, fall back to defaultValue
//    On every update: write the new value to localStorage
//    Tip: JSON.stringify / JSON.parse because localStorage only stores strings

// function useLocalStorage(key, defaultValue) {
//   your code here
// }

// Test it with a name input — the value should survive page refresh.
function PersistentInput() {
  // const [name, setName] = useLocalStorage('username', '')
  // your code here
}


// ─────────────────────────────────────────────
// 3. useWindowSize
//    Returns the current window dimensions and updates on resize.
//    { width: number, height: number }
//    Don't forget to remove the event listener on cleanup.

// function useWindowSize() {
//   your code here
// }

function WindowInfo() {
  // const { width, height } = useWindowSize()
  // render width x height
}


export default PersistentInput
