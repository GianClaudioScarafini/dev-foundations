# 04 — Lists and Keys

## Rendering lists

```jsx
const users = ['Alice', 'Bob', 'Carol']

// map returns an array of JSX elements
function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user}>{user}</li>
      ))}
    </ul>
  )
}
```

## The key prop
- React uses `key` to track which items changed, added, or removed
- Must be **unique among siblings**
- Use a stable ID from your data — not the array index
- Never use `Math.random()` as a key

```jsx
// BAD — index changes when items reorder
items.map((item, i) => <li key={i}>{item}</li>)

// GOOD — stable ID from the data
items.map(item => <li key={item.id}>{item.name}</li>)
```

## Filtering and transforming

```jsx
// Filter then map
users
  .filter(u => u.active)
  .map(u => <UserCard key={u.id} user={u} />)
```

## Key questions
- When is it acceptable to use the index as a key?
- What visual bug can happen when you use index as key with reorderable lists?
- Why can't you put a key on a fragment shorthand `<>`?

---

Go to `simple.jsx` when ready.
