// 06 — Classes — Hard
// Goal: dependency injection, decorators concept, and testable class design

// ─────────────────────────────────────────────
// Challenge: Build a testable Express service layer
//
// No starter code. Design the architecture.
//
// The key principle: your service classes should not care how data is stored.
// You inject the storage. In tests you inject a fake. In production you inject the real DB.
//
// Requirements:
//
// 1. Define interfaces for your repositories (not classes):
//    IUserRepository with: findById, findByEmail, findAll, create, update, delete
//    IPostRepository with: findById, findByAuthor, findAll, create, update, delete
//
// 2. Write two implementations for each:
//    InMemoryUserRepository implements IUserRepository  (for dev/testing)
//    InMemoryPostRepository implements IPostRepository
//    (You could also write a SQLiteUserRepository later)
//
// 3. Write service classes that depend on the interfaces, not the implementations:
//    UserService(userRepo: IUserRepository)
//    PostService(postRepo: IPostRepository, userRepo: IUserRepository)
//
//    PostService.createPost needs userRepo to verify the author exists.
//    It should NOT import InMemoryUserRepository directly.
//
// 4. Write a simple DI container class:
//    class Container {
//      private bindings: Map<string, unknown>
//      register<T>(token: string, instance: T): void
//      resolve<T>(token: string): T
//    }
//
//    Wire everything up:
//    const container = new Container()
//    container.register('userRepo', new InMemoryUserRepository())
//    container.register('postRepo', new InMemoryPostRepository())
//    container.register('userService', new UserService(container.resolve('userRepo')))
//    container.register('postService', new PostService(
//      container.resolve('postRepo'),
//      container.resolve('userRepo')
//    ))
//
// 5. Write a "test" to verify the services work correctly — not a real test framework,
//    just a function runTests() that calls service methods and asserts results.
//    If an assertion fails, throw an Error with a descriptive message.
//
//    Test:
//    - Register a user → check it's returned without passwordHash
//    - Create a post → check it's linked to the user
//    - Try creating a post with nonexistent authorId → should throw
//    - Get all posts by author → should return only that user's posts
//
// When you're done, ask yourself:
// - What is "dependency injection" in one sentence?
// - Why is it easier to test UserService when IUserRepository is an interface?
// - What would a real IoC (Inversion of Control) container like NestJS add on top of this?

// your code here
