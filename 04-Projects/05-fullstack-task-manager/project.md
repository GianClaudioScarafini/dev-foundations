# Project 05 — Full-Stack Task Manager

**Difficulty:** Hard  
**Stack:** React + Express + TypeScript + SQLite + JWT  
**Time estimate:** 5–8 sessions  

---

## What you're building

A full-stack project management tool — think a simplified Linear or Asana. This is the project you demo in interviews. It has a real React frontend talking to a real Express backend, both in TypeScript, with auth, and real data.

**This should be a separate GitHub repository. Deploy it.**

---

## What it does

### Auth
- Register / Login
- JWT-based sessions (access + refresh)
- Persistent login (refresh token stored in httpOnly cookie)

### Projects
- Create and manage projects
- Each project has a name, description, and colour
- Projects belong to a user

### Tasks
- Create tasks within projects
- Task fields: title, description, priority (low/medium/high/urgent), status, assignee, due date, tags
- Status board view: Backlog → Todo → In Progress → In Review → Done
- Drag-and-drop between columns (use `@dnd-kit/core`)
- Filter tasks by priority, assignee, tag, due date

### Team
- Invite users to projects by email
- Roles: owner, admin, member
- Members can be assigned tasks

---

## Architecture

```
fullstack-task-manager/
├── server/                    ← Express + TypeScript API
│   ├── src/
│   │   ├── index.ts
│   │   ├── app.ts
│   │   ├── config.ts
│   │   ├── db/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── types/
│   ├── tsconfig.json
│   └── package.json
│
├── client/                    ← React + TypeScript + Vite
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── api/               ← typed API client functions
│   │   ├── hooks/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── types/
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

---

## Shared types — the key challenge

Both the server and client need to agree on data shapes.
Create a `shared/` folder with types used by both:

```ts
// shared/types.ts
export interface Task { ... }
export interface Project { ... }
export interface User { ... }
export type TaskStatus = 'backlog' | 'todo' | 'in_progress' | 'in_review' | 'done'
export type Priority = 'low' | 'medium' | 'high' | 'urgent'
```

Reference it in both tsconfigs using path aliases.
When the server changes a type, the client breaks at compile time — not at runtime.

---

## API layer in the client

Don't scatter `fetch()` calls through components. Build a typed API client:

```ts
// client/src/api/tasks.ts
export async function getTasks(projectId: number, filters?: TaskFilters): Promise<Task[]> { ... }
export async function createTask(data: CreateTaskInput): Promise<Task> { ... }
export async function updateTask(id: number, data: UpdateTaskInput): Promise<Task> { ... }
export async function moveTask(id: number, status: TaskStatus): Promise<Task> { ... }
```

This means API shapes are defined once, shared between layers, and changing the API updates TypeScript errors everywhere that uses it.

---

## Requirements

**Server:**
- [ ] Strict TypeScript throughout
- [ ] Full auth (JWT + httpOnly cookie for refresh token)
- [ ] Role-based access per project (owner/admin/member)
- [ ] `PATCH /api/tasks/:id/status` — move task to new status (validated transition)
- [ ] Soft delete on tasks and projects
- [ ] `GET /api/projects/:id/tasks` supports filtering + sorting

**Client:**
- [ ] Strict TypeScript throughout
- [ ] Typed API client — no raw fetch in components
- [ ] AuthContext with typed user
- [ ] Kanban board with drag-and-drop (`@dnd-kit/core`)
- [ ] Optimistic updates — board updates instantly, API call happens in background
- [ ] Form validation with typed errors

**Both:**
- [ ] Shared type definitions
- [ ] Zero `any` types

---

## Stretch goals

- [ ] Real-time updates using Server-Sent Events (SSE) — when a teammate moves a task, your board updates
- [ ] Activity log — every change to a task is recorded and displayed
- [ ] Due date notifications — tasks due today highlighted in red
- [ ] Comments on tasks with markdown support
- [ ] Deploy server to Railway, client to Vercel
- [ ] Write a README that explains the architecture — with a diagram

---

## What to say in an interview

> "I built a full-stack task manager — React frontend, Express backend, both in TypeScript. The interesting part was sharing type definitions between the two: when I change the server's API response shape, the client breaks at compile time instead of at runtime. I implemented a Kanban board with drag-and-drop and optimistic updates, and JWT auth with refresh tokens stored in httpOnly cookies to prevent XSS. It's deployed and I can walk you through the code."

---

## This is your portfolio project

By the time you finish this, you have something real:
- A live URL
- A GitHub repo with a clean README
- Code you can explain in depth
- A story you can tell in an interview

Don't wait until it's perfect. Ship it when it works.
