# Project 01 — CLI Budget Tracker

**Difficulty:** Beginner  
**Stack:** Node.js + TypeScript  
**Time estimate:** 1–2 sessions  

---

## What you're building

A command-line tool to track income and expenses. Run it from your terminal, all data saved to a JSON file. No frameworks, no HTTP — just Node, TypeScript, and the file system.

This is your first TypeScript project. Keep it simple. Focus on getting the types right.

---

## What it does

```bash
# Add income
node dist/index.js add income 2500 "Monthly salary"

# Add expense
node dist/index.js add expense 120 "Grocery run"
node dist/index.js add expense 45 "Netflix and Spotify"

# View summary
node dist/index.js summary
# Output:
# === Budget Summary ===
# Income:   £2,500.00
# Expenses: £165.00
# Balance:  £2,335.00

# List all transactions
node dist/index.js list
node dist/index.js list --type expense
node dist/index.js list --month 2024-01

# Delete a transaction
node dist/index.js delete 3
```

---

## Data model

```ts
interface Transaction {
  id: number
  type: 'income' | 'expense'
  amount: number
  description: string
  date: string   // ISO string
}

interface BudgetData {
  transactions: Transaction[]
  nextId: number
}
```

---

## File structure

```
01-cli-budget-tracker/
├── src/
│   ├── index.ts        ← entry point, parse CLI args
│   ├── commands.ts     ← command implementations
│   ├── storage.ts      ← read/write budget.json
│   ├── formatter.ts    ← display helpers (table, summary)
│   └── types.ts        ← shared interfaces
├── budget.json         ← auto-created on first run (add to .gitignore)
├── tsconfig.json
├── package.json
└── README.md
```

---

## Requirements

- [ ] TypeScript strict mode on (`"strict": true` in tsconfig)
- [ ] All functions have explicit return types
- [ ] `storage.ts` uses `fs/promises` with proper error handling
- [ ] CLI args parsed from `process.argv` — no external libraries
- [ ] Amounts stored as integers in pence/cents (never use floats for money)
- [ ] Formatted output: amounts as `£2,500.00`, dates as `15 Jan 2024`
- [ ] `budget.json` in `.gitignore`

---

## Stretch goals (do these if the basics feel too easy)

- [ ] Categories (food, transport, entertainment) with filter by category
- [ ] Monthly budget limits — warn when you exceed 80%
- [ ] Export to CSV: `node dist/index.js export > report.csv`
- [ ] Colour output using ANSI codes (red for expenses, green for income)
- [ ] Interactive mode using `readline` — no args, prompts you instead

---

## Skills used

- TypeScript types and interfaces
- Node.js `process.argv`
- `fs/promises` file system
- Command pattern (each command = a function)
- Data formatting and presentation

---

## What to say in an interview

> "I built a CLI budget tracker in TypeScript. It reads and writes to a JSON file, handles command-line arguments manually without any library, and uses strict TypeScript throughout. It taught me how to structure a Node project before adding frameworks on top."
