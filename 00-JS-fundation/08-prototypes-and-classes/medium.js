// PROTOTYPES AND CLASSES — Medium
// Getters/setters, method overriding, static factories, toString

// ─────────────────────────────────────────────
// 1. Getter and setter
//    Create a `Temperature` class:
//    - Stores temperature in Celsius internally
//    - getter `fahrenheit` → converts to F on the fly
//    - setter `fahrenheit` → accepts F and converts to C internally
//
//    const t = new Temperature(0)
//    t.fahrenheit     → 32
//    t.fahrenheit = 212
//    t.celsius        → 100  (the internal value updated)

// your code here


// ─────────────────────────────────────────────
// 2. Override a parent method + call super
//    Create `Animal` with speak() → "..."
//    Create `Dog` that overrides speak() → "Woof!"
//    Create `PoliceDog` that extends Dog and overrides speak()
//    → calls super.speak() and appends " (on duty)"
//    → "Woof! (on duty)"

// your code here


// ─────────────────────────────────────────────
// 3. Static factory method
//    Add a static `fromString` method to `Color`
//    that parses "255,128,0" and returns a new Color instance
//
//    class Color { constructor(r, g, b) {...} }
//    Color.fromString("255,128,0")  → new Color(255, 128, 0)
//    Color.fromString("0,0,255").b  → 255

// your code here


// ─────────────────────────────────────────────
// 4. toString and valueOf
//    Implement `toString` and `valueOf` on a `Money` class
//    - toString() → "£49.99"
//    - valueOf()  → the numeric amount (so math works)
//
//    const price = new Money(49.99, "£")
//    `${price}`     → "£49.99"
//    price + 10.01  → 60  (uses valueOf)

// your code here


// ─────────────────────────────────────────────
// 5. Private fields (#)
//    Use private class fields to protect `_balance`
//    Nobody should be able to set account.#balance directly
//
//    class SecureAccount {
//      #balance
//      constructor(initial) { this.#balance = initial }
//      deposit(n) { ... }
//      withdraw(n) { ... throws if insufficient ... }
//      get balance() { return this.#balance }
//    }
//
//    const acc = new SecureAccount(100)
//    acc.deposit(50)
//    acc.withdraw(30)
//    acc.balance  → 120
//    acc.#balance → SyntaxError (good)

// your code here


// ─────────────────────────────────────────────
// 6. Mixin pattern
//    JS doesn't support multiple inheritance, but you can mix in behavior.
//    Apply `Serializable` and `Validatable` mixins to `User`.
//
//    const Serializable = (Base) => class extends Base {
//      serialize() { return JSON.stringify(this) }
//    }
//
//    const Validatable = (Base) => class extends Base {
//      validate() { return Object.keys(this).every(k => this[k] !== null) }
//    }
//
//    class User { constructor(name, email) {...} }
//    class RichUser extends Serializable(Validatable(User)) {}
//
//    const u = new RichUser("Alice", "alice@dev.com")
//    u.serialize()  → '{"name":"Alice","email":"alice@dev.com"}'
//    u.validate()   → true

// your code here
