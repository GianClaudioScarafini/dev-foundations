# 07 — REST API Design

## What makes an API RESTful?

REST is a set of conventions for designing HTTP APIs. An interviewer will ask you this. Know it cold.

### Resources and URLs

A REST API is built around **resources** (nouns, not verbs):

```
✅ GET /users           ← collection of users
✅ GET /users/42        ← single user
✅ POST /users          ← create a user
✅ PUT /users/42        ← replace a user
✅ PATCH /users/42      ← update part of a user
✅ DELETE /users/42     ← delete a user

❌ GET /getUsers        ← verb in URL
❌ POST /createUser     ← verb in URL
❌ GET /deleteUser/42   ← wrong method for delete
```

### HTTP methods map to CRUD

| Method | CRUD | Description |
|--------|------|-------------|
| GET | Read | Safe, idempotent — never changes data |
| POST | Create | Creates a new resource |
| PUT | Replace | Replaces entire resource |
| PATCH | Update | Updates only the provided fields |
| DELETE | Delete | Removes the resource |

### Status codes — know these

| Code | Meaning | Use when |
|------|---------|---------|
| 200 | OK | Successful GET, PUT, PATCH |
| 201 | Created | POST that created a resource |
| 204 | No Content | DELETE that succeeded |
| 400 | Bad Request | Validation failed, malformed body |
| 401 | Unauthorised | Not logged in |
| 403 | Forbidden | Logged in but not allowed |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Duplicate — email already exists |
| 422 | Unprocessable Entity | Data format ok but semantically invalid |
| 500 | Server Error | Unexpected crash |

### Nested resources

```
GET /users/42/posts          ← posts belonging to user 42
POST /users/42/posts         ← create a post for user 42
GET /users/42/posts/7        ← post 7 belonging to user 42
```

Only nest one level deep. Beyond that, use query params or separate routes.

### Consistent error format

Always return errors in a consistent shape:
```json
{
  "error": "Validation failed",
  "details": [
    { "field": "email", "message": "must be a valid email" },
    { "field": "name",  "message": "is required" }
  ]
}
```

## Key questions to answer before coding
- What is the difference between PUT and PATCH?
- When do you return 401 vs 403?
- What is an idempotent request? Which methods are idempotent?
- Why should URLs contain nouns, not verbs?

---

Go to `simple.js` when ready.
