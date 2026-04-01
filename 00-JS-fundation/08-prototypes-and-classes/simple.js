// PROTOTYPES AND CLASSES — Simple
// Create classes, use inheritance, understand instanceof

// ─────────────────────────────────────────────
// 1. Basic class
//    Create a `Rectangle` class:
//    - constructor(width, height)
//    - method area() → returns width * height
//    - method perimeter() → returns 2 * (width + height)
//
//    const r = new Rectangle(4, 6)
//    r.area()      → 24
//    r.perimeter() → 20

// your code here


// ─────────────────────────────────────────────
// 2. Class with a method using `this`
//    Create a `BankAccount` class:
//    - constructor(owner, balance)
//    - method deposit(amount) — adds to balance
//    - method toString() → "Alice: $150"
//
//    const acc = new BankAccount("Alice", 100)
//    acc.deposit(50)
//    acc.toString() → "Alice: $150"

// your code here


// ─────────────────────────────────────────────
// 3. Inheritance with extends
//    `Vehicle` has constructor(make, speed) and method describe()
//    `Car` extends `Vehicle`, adds `doors` in constructor
//    Car gets a honk() method → "Beep beep!"
//
//    const car = new Car("Toyota", 120, 4)
//    car.describe() → "Toyota at 120km/h"
//    car.honk()     → "Beep beep!"

// your code here


// ─────────────────────────────────────────────
// 4. super() — calling the parent constructor
//    Create `AdminUser` that extends `User`
//    User has constructor(name, email) and greet()
//    AdminUser adds a `permissions` array
//
//    const admin = new AdminUser("Alice", "alice@dev.com", ["read", "write"])
//    admin.greet()        → "Hi I'm Alice"
//    admin.permissions    → ["read", "write"]

// your code here


// ─────────────────────────────────────────────
// 5. instanceof checks
//    Given your Car and Vehicle classes above, predict THEN verify:
//    const car = new Car("Honda", 100, 2)
//    car instanceof Car      → ?
//    car instanceof Vehicle  → ?
//    car instanceof Object   → ?
//    typeof car              → ?

// predictions:
// your verification code here


// ─────────────────────────────────────────────
// 6. Static method
//    Add a static method `compare(r1, r2)` to Rectangle
//    It returns the rectangle with the bigger area, or "equal" if same
//
//    Rectangle.compare(new Rectangle(3,4), new Rectangle(2,7))
//    → returns the second Rectangle (area 14 vs 12)

// your code here (modify Rectangle from exercise 1 or redefine it)
