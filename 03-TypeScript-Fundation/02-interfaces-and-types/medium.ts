// 02 — Interfaces and Type Aliases — Medium
// Goal: model a real domain with clean type hierarchies

// ─────────────────────────────────────────────
// Context: type the data layer for a project management tool.
// Think of it as a simplified Jira or Trello.

// ─────────────────────────────────────────────
// 1. Core domain model
//    Design interfaces for all entities. Think about:
//    - What fields are always required vs optional?
//    - What should be readonly after creation?
//    - What relationships exist between entities?
//
//    Entities:
//    - Workspace: { id, name, slug, ownerId, members: WorkspaceMember[] }
//    - WorkspaceMember: { userId, role: 'owner' | 'admin' | 'member' }
//    - Project: { id, workspaceId, name, description?, status: 'active' | 'archived' }
//    - Task: { id, projectId, title, description?, assigneeId?, priority, status, dueDate?, createdAt }
//      priority: 'low' | 'medium' | 'high' | 'urgent'
//      status: 'backlog' | 'todo' | 'in_progress' | 'in_review' | 'done'
//    - Comment: { id, taskId, authorId, body, createdAt, editedAt? }
//    - User: { id, name, email, avatarUrl? }

// your interfaces here


// ─────────────────────────────────────────────
// 2. Input types — what the API accepts for creation/update
//    Create input types derived from your domain models.
//    These have no id, createdAt, or server-set fields.
//
//    - CreateTaskInput
//    - UpdateTaskInput (all fields optional except you need at least one)
//    - CreateProjectInput
//
//    Tip: use Omit<Task, 'id' | 'createdAt'> to derive from your existing type.

// your types here


// ─────────────────────────────────────────────
// 3. Write typed functions that use your models
//
//    a) getOverdueTasks(tasks: Task[]): Task[]
//       Returns tasks where dueDate is in the past and status is not 'done'
//
//    b) groupTasksByStatus(tasks: Task[]): Record<Task['status'], Task[]>
//       Returns an object where each key is a status and value is array of tasks
//       Tip: Record<K, V> is a built-in type alias for { [K]: V }
//
//    c) getWorkloadByAssignee(tasks: Task[]): Map<number, { total: number, overdue: number }>
//       Returns a Map where key is assigneeId and value is their task count
//       (skip unassigned tasks)

// your code here


// ─────────────────────────────────────────────
// 4. Interface for a repository pattern
//    The repository pattern separates data access from business logic.
//    Define a generic interface IRepository<T, CreateInput> with:
//      findById(id: number): T | null
//      findAll(filters?: Partial<T>): T[]
//      create(data: CreateInput): T
//      update(id: number, data: Partial<T>): T | null
//      delete(id: number): boolean
//
//    Then write a concrete TaskRepository class that implements IRepository<Task, CreateTaskInput>.
//    Use an in-memory array as the store.
//    TypeScript will enforce that you implement every method.

// your code here
