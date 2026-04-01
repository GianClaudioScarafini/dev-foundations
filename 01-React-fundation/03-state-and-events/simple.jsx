// 03 — State and Events — Simple
import { useState } from 'react'

// ─────────────────────────────────────────────
// 1. Fix the broken counter
//    This counter doesn't update. Find and fix the bug.

function BrokenCounter() {
  let count = 0
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => count++}>Increment</button>
    </div>
  )
}


// ─────────────────────────────────────────────
// 2. Toggle visibility
//    Build a component with a button that shows/hides a paragraph of text.
//    Button label should change: "Show" when hidden, "Hide" when visible.

function ToggleText() {
  // your code here
}


// ─────────────────────────────────────────────
// 3. Input controlled component
//    Build an input that shows a live character count below it.
//    Example: "Hello" → "5 / 100 characters"
//    Max length: 100. Show remaining in red when under 20 chars left.

function CharCounter() {
  // your code here
}


// ─────────────────────────────────────────────
// 4. Colour picker
//    Three buttons: Red, Green, Blue.
//    Clicking a button changes the background colour of a <div> below.
//    The active button should look visually different (add/remove a CSS class or inline style).

function ColourPicker() {
  // your code here
}


// ─────────────────────────────────────────────
// 5. Why does this break? Fix it.
//    Predict what's wrong before running.

function BrokenList() {
  const [items, setItems] = useState(['one', 'two', 'three'])

  function addItem() {
    items.push('four')        // bug here
    setItems(items)
  }

  return (
    <div>
      <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
      <button onClick={addItem}>Add</button>
    </div>
  )
}
// Explanation of the bug: ?
// Fix:


export default ColourPicker
