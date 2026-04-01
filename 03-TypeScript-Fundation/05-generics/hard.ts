// 05 — Generics — Hard
// Goal: use advanced generics to build type-safe APIs

// ─────────────────────────────────────────────
// Challenge: Type-safe query builder
//
// Build a fluent query builder where TypeScript tracks what you've selected.
//
// Requirements:
//
// 1. Start with a base table type:
//    type UsersTable = {
//      id: number
//      name: string
//      email: string
//      role: 'admin' | 'user'
//      createdAt: string
//      age: number
//    }
//
// 2. Build a QueryBuilder<Table, Selected extends keyof Table = keyof Table> class.
//    The Selected generic parameter tracks which columns are selected.
//
//    .select<K extends keyof Table>(...cols: K[]): QueryBuilder<Table, K>
//    .where(col: keyof Table, op: '=' | '>' | '<' | 'LIKE', value: unknown): this
//    .orderBy(col: keyof Table, dir?: 'ASC' | 'DESC'): this
//    .limit(n: number): this
//    .offset(n: number): this
//    .build(): string   ← returns the SQL string
//    .execute(): Pick<Table, Selected>[]  ← returns typed results!
//
// 3. The magic: after .select(), the return type of .execute() should only
//    contain the selected columns:
//
//    const results = new QueryBuilder(users)
//      .select('id', 'name', 'email')
//      .where('role', '=', 'admin')
//      .limit(10)
//      .execute()
//
//    results[0].name   // string ✓
//    results[0].age    // Error — age was not selected ✓
//
// 4. The .build() method should generate real SQL:
//    "SELECT id, name, email FROM users WHERE role = 'admin' LIMIT 10"
//
// When you're done, ask yourself:
// - What does Pick<Table, Selected> do here?
// - How does TypeScript track the Selected type across method calls?
// - This pattern (fluent builder with accumulating type state) is used in
//   libraries like Drizzle ORM and Prisma. What would make a real ORM harder?

// your code here
