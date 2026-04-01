// 02 — Props — Hard
// Goal: design a flexible component API

// ─────────────────────────────────────────────
// Challenge: Build a reusable DataTable component
//
// No starter code. Design the props API yourself.
//
// Requirements:
// 1. DataTable accepts:
//    - `columns`: array of column definitions
//      Each column: { key: string, label: string, render?: (value) => JSX }
//    - `data`: array of row objects
//    - `emptyMessage`: string shown when data is empty (default: "No data")
//
// 2. Renders a proper <table> with <thead> and <tbody>
//
// 3. The `render` function on a column is optional.
//    If provided, call it to render the cell. If not, show the raw value.
//    This is how real component libraries work (e.g. Ant Design, TanStack Table)
//
// 4. Accepts an optional `onRowClick` prop — a function called with the row object
//    when a row is clicked. If not provided, rows are not clickable.
//
// Test it with the data below.
//
// When done, ask yourself:
// - Is this component "dumb" (presentational) or "smart" (has logic)?
// - How would you add sorting to this table without changing the component API?

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', render: (val) => (
    <span style={{ color: val === 'Active' ? 'green' : 'red' }}>{val}</span>
  )},
  { key: 'joined', label: 'Joined' },
]

const data = [
  { id: 1, name: 'Gian Claudio', role: 'Full Stack Developer', status: 'Active', joined: '2024-01-15' },
  { id: 2, name: 'Alice Smith', role: 'Product Manager', status: 'Active', joined: '2024-02-01' },
  { id: 3, name: 'Bob Jones', role: 'Designer', status: 'Inactive', joined: '2023-11-20' },
]

// Write DataTable here


export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Team</h1>
      <DataTable
        columns={columns}
        data={data}
        onRowClick={(row) => console.log('Clicked:', row.name)}
      />
      <hr />
      <h2>Empty state</h2>
      <DataTable columns={columns} data={[]} emptyMessage="No team members found" />
    </div>
  )
}
