// PROTOTYPES AND CLASSES
// Classes are syntactic sugar over JS prototype chains.
// Understanding both helps you read older code and know what's happening under the hood.

// ─────────────────────────────────────────────
// 1. Create a class
//    Create an `Animal` class with:
//    - constructor that takes `name` and `sound`
//    - a `speak()` method → "Dog says: Woof"
//    Expected:
//      const dog = new Animal("Dog", "Woof")
//      dog.speak() → "Dog says: Woof"

// your code here


// ─────────────────────────────────────────────
// 2. Inheritance
//    Create a `Dog` class that extends `Animal`
//    - Constructor takes only `name` (sound is always "Woof")
//    - Add a `fetch()` method → "Rex fetches the ball!"
//    Expected:
//      const rex = new Dog("Rex")
//      rex.speak()  → "Rex says: Woof"
//      rex.fetch()  → "Rex fetches the ball!"

// your code here


// ─────────────────────────────────────────────
// 3. Override a method
//    Create a `Cat` class that extends `Animal`
//    - Override `speak()` to return "...meow" (cats are aloof)
//    Expected:
//      const cat = new Cat("Luna")
//      cat.speak() → "...meow"

// your code here


// ─────────────────────────────────────────────
// 4. Static method
//    Add a static method `describe()` to `Animal`
//    Animal.describe() → "Animals make sounds"
//    Note: static methods are called on the class, not instances

// your code here


// ─────────────────────────────────────────────
// 5. Prototype check
//    Given your Dog class above, answer these without running the code first:
//    const rex = new Dog("Rex")
//    console.log(rex instanceof Dog)     // → ?
//    console.log(rex instanceof Animal)  // → ?
//    console.log(typeof rex)             // → ?
//    Write your predictions as comments, then verify

// your predictions here


// ─────────────────────────────────────────────
// 6. Class with getter
//    Create a `Circle` class:
//    - constructor takes `radius`
//    - getter `area` returns π * r²  (use Math.PI)
//    Expected:
//      const c = new Circle(5)
//      c.area → 78.539...

// your code here
