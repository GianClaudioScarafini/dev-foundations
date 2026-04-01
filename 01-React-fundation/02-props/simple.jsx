// 02 — Props — Simple
// Goal: pass and receive props correctly

// ─────────────────────────────────────────────
// 1. Fix the broken component
//    The component below doesn't display the name or age.
//    Fix it without changing the App component.

function Broken(props) {
  return (
    <p>Name: {name}, Age: {age}</p>
  )
}

function App1() {
  return <Broken name="Gian" age={30} />
}


// ─────────────────────────────────────────────
// 2. Add a default prop
//    Greeting should say "Hello, Guest!" when no name is passed.
//    Fix it using a default value in the destructuring — not a ternary.

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>
}

// These should both work:
// <Greeting name="Gian" />   → Hello, Gian!
// <Greeting />               → Hello, Guest!


// ─────────────────────────────────────────────
// 3. Pass different types as props
//    Complete ProductCard to display all the info passed to it.
//    Props: name (string), price (number), inStock (boolean), tags (array)
//    - Show tags as a comma-separated string: "React, Node.js, TypeScript"
//    - Show "In Stock" or "Out of Stock" based on inStock

function ProductCard({ name, price, inStock, tags }) {
  return (
    <div>
      {/* your code here */}
    </div>
  )
}

function App3() {
  return (
    <ProductCard
      name="React Course"
      price={49}
      inStock={true}
      tags={["React", "Node.js", "TypeScript"]}
    />
  )
}


// ─────────────────────────────────────────────
// 4. Children prop
//    Make Panel render a box with a title and whatever children you pass it.

function Panel({ title, children }) {
  // your code here
}

function App4() {
  return (
    <Panel title="My Panel">
      <p>This is the body text.</p>
      <button>Click me</button>
    </Panel>
  )
}


export default App3
