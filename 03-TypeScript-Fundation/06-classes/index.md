# 06 — Classes and Access Modifiers

## TypeScript adds to JS classes

```ts
class User {
  readonly id: number          // can only be set in constructor
  public name: string          // accessible everywhere (default)
  private email: string        // only accessible inside this class
  protected role: string       // accessible in this class and subclasses

  constructor(id: number, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
    this.role = 'user'
  }

  // Getter — access like a property, computed on the fly
  get displayName(): string {
    return `${this.name} (${this.role})`
  }
}

const u = new User(1, "Gian", "g@b.com")
u.name             // ✓
u.email            // Error — private ✓
u.id = 99          // Error — readonly ✓
```

## Constructor shorthand

```ts
// Instead of declaring fields + assigning in constructor:
class User {
  constructor(
    public readonly id: number,
    public name: string,
    private email: string,
    protected role: string = 'user'
  ) {}
}
// TypeScript generates the field declarations and assignments automatically
```

## Implementing interfaces

```ts
interface Serialisable {
  toJSON(): string
  toCSV(): string
}

class Product implements Serialisable {
  constructor(public id: number, public name: string, public price: number) {}

  toJSON(): string { return JSON.stringify(this) }
  toCSV(): string { return `${this.id},${this.name},${this.price}` }
}
// If you forget to implement toCSV(), TypeScript errors immediately
```

## Abstract classes

```ts
abstract class Shape {
  abstract area(): number     // must be implemented by subclasses
  abstract perimeter(): number

  describe(): string {        // shared implementation
    return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`
  }
}

class Circle extends Shape {
  constructor(public radius: number) { super() }
  area(): number { return Math.PI * this.radius ** 2 }
  perimeter(): number { return 2 * Math.PI * this.radius }
}
```

## Key questions to answer before coding
- What is the difference between `private` and `#privateField` (JS private fields)?
- When would you use an abstract class vs an interface?
- What does `readonly` on a class property guarantee?
- Can a class implement multiple interfaces?

---

Go to `simple.ts` when ready.
