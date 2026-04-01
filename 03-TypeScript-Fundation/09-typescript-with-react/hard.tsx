// 09 — TypeScript with React — Hard
// Goal: type-safe component architecture used in production apps

// ─────────────────────────────────────────────
// Challenge: Fully typed data table component
//
// No starter code. Design the types and component.
//
// Build a generic DataTable<T> component where TypeScript enforces:
// - Columns are defined relative to T's shape
// - Sorting only works on valid keys of T
// - Cell renderers receive the correctly typed value for that column
// - Selecting rows returns T[] (not any[])
//
// Requirements:
//
// 1. Define a ColumnDef<T> type:
//    {
//      key: keyof T                          ← must be a real key of T
//      header: string
//      sortable?: boolean
//      render?: (value: T[keyof T], row: T) => React.ReactNode
//    }
//
// 2. DataTable<T> props:
//    {
//      data: T[]
//      columns: ColumnDef<T>[]
//      onSort?: (key: keyof T, direction: 'asc' | 'desc') => void
//      selectable?: boolean
//      onSelectionChange?: (selected: T[]) => void
//      rowKey: keyof T                       ← which field is the unique key
//      emptyMessage?: string
//    }
//
// 3. The render function in ColumnDef should be typed so that:
//    render: (value, row) => ...
//    value is T[keyof T] — not unknown, not any
//
//    Ideally, make it even stricter:
//    For a column with key: 'name', value should be T['name'] — the exact type
//    This requires a more advanced generic: ColumnDef<T, K extends keyof T>
//
// 4. Write the component with working sort and selection.
//    Use useReducer for internal sort/selection state.
//
// 5. Test it with two different data shapes:
//    <DataTable<User> data={users} columns={userColumns} rowKey="id" />
//    <DataTable<Job> data={jobs} columns={jobColumns} rowKey="id" />
//
//    TypeScript should prevent:
//    - Passing a column key that doesn't exist on User
//    - Accessing .name on a cell value when the column is numeric
//
// When you're done, ask yourself:
// - What is the most complex generic you wrote here? Break it down in a comment.
// - What tradeoffs did you make between type safety and usability?
// - How does this compare to a library like TanStack Table?

// your code here

export {}
