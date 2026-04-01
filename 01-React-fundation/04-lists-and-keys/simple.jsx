// 04 — Lists and Keys — Simple

// ─────────────────────────────────────────────
// 1. Spot the bug
//    This list works but has a key problem that will cause bugs.
//    Identify it and fix it with a comment explaining why.

function BuggyList() {
  const fruits = ['apple', 'banana', 'cherry']
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  )
}
// What is the bug?
// When would it cause a visible problem?


// ─────────────────────────────────────────────
// 2. Render a list of cards
//    Map over the users array and render a UserCard for each.
//    UserCard shows: name, email, and role.

const users = [
  { id: 1, name: 'Alice Martin', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Chen', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer' },
]

function UserCard({ user }) {
  // your code here
}

function UserList() {
  // your code here
}


// ─────────────────────────────────────────────
// 3. Filter before render
//    Render only the users with role "Admin" or "Editor"
//    Add a <p> showing how many users are displayed: "Showing 2 of 3 users"

function FilteredList() {
  // your code here
}


// ─────────────────────────────────────────────
// 4. Nested lists
//    Render a menu with sections. Each section has a title and items.
//    Both the sections and their items need keys.

const menu = [
  { id: 'main', title: 'Main', items: ['Home', 'About', 'Work'] },
  { id: 'social', title: 'Social', items: ['GitHub', 'LinkedIn', 'Twitter'] },
  { id: 'legal', title: 'Legal', items: ['Privacy', 'Terms'] },
]

function SiteMenu() {
  // your code here
}


export default UserList
