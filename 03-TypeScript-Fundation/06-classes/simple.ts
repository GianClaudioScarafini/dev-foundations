// 06 — Classes — Simple
// Run with: npx ts-node simple.ts

// ─────────────────────────────────────────────
// 1. Add TypeScript access modifiers and types to this class.
//    Rules:
//    - id should be readonly
//    - balance should be private (only modified through methods)
//    - owner's name should be public
//    - transactionHistory should be private
//    - Use constructor shorthand where possible

class BankAccount {
  id
  ownerName
  balance
  transactionHistory

  constructor(id, ownerName, initialBalance) {
    this.id = id
    this.ownerName = ownerName
    this.balance = initialBalance
    this.transactionHistory = []
  }

  deposit(amount) {
    if (amount <= 0) throw new Error('Amount must be positive')
    this.balance += amount
    this.transactionHistory.push({ type: 'deposit', amount, at: new Date().toISOString() })
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error('Amount must be positive')
    if (amount > this.balance) throw new Error('Insufficient funds')
    this.balance -= amount
    this.transactionHistory.push({ type: 'withdrawal', amount, at: new Date().toISOString() })
  }

  getBalance() {
    return this.balance
  }

  getStatement() {
    return this.transactionHistory
  }
}


// ─────────────────────────────────────────────
// 2. Implement an interface with a class
//    Define this interface, then write a class that implements it.

interface Logger {
  log(level: 'info' | 'warn' | 'error', message: string): void
  getLogs(): Array<{ level: string; message: string; timestamp: string }>
  clear(): void
}

// Write a ConsoleLogger class that:
// - Stores all logs in a private array
// - Prefixes console output with the level: "[INFO] message"
// - Uses timestamp from new Date().toISOString()
// TypeScript will error if you miss any method from the interface.

// your code here


// ─────────────────────────────────────────────
// 3. Abstract class — shapes
//    Write an abstract Shape class with:
//    - abstract area(): number
//    - abstract perimeter(): number
//    - concrete describe(): string → "Circle: area=78.54, perimeter=31.42"
//
//    Then implement: Circle, Rectangle, Triangle
//    All dimensions passed via constructor.

// your code here

// Test:
// const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 4, 5)]
// shapes.forEach(s => console.log(s.describe()))


// ─────────────────────────────────────────────
// 4. Static members
//    Add a static counter to BankAccount (from question 1) that:
//    - Increments each time a new account is created
//    - Is accessible as BankAccount.totalAccounts
//    - Is NOT on individual account instances
//
//    Also add a static factory method:
//    BankAccount.create(ownerName: string): BankAccount
//    That generates the id automatically (e.g. ACC-001, ACC-002)

// modify your BankAccount class above (or rewrite it below)
