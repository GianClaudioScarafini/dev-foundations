# 03 — State and Events

## What is state?
State is data that changes over time and causes the UI to re-render.

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)   // [currentValue, setter]

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}
```

## Rules of state
1. Never mutate state directly: `count++` is wrong, `setCount(count + 1)` is right
2. State updates are async — don't read state right after setting it
3. When new state depends on old state, use the function form:
   `setCount(prev => prev + 1)`
4. State lives in a component — to share it, lift it up to the common parent

## Events
```jsx
// Inline arrow function (fine for simple cases)
<button onClick={() => doSomething()}>Click</button>

// Named handler (cleaner for complex logic)
function handleClick() { ... }
<button onClick={handleClick}>Click</button>

// With event object
function handleInput(e) {
  console.log(e.target.value)
}
<input onChange={handleInput} />
```

## Key questions
- What happens to child components when parent state updates?
- What is "lifting state up" and when do you need it?
- Why is `setCount(prev => prev + 1)` safer than `setCount(count + 1)`?

---

Go to `simple.jsx` when ready.
