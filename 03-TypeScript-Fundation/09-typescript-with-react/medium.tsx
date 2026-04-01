// 09 — TypeScript with React — Medium
// Goal: build typed hooks and data-fetching patterns

import { useState, useEffect, useCallback, useReducer } from 'react'

// ─────────────────────────────────────────────
// 1. Typed custom hook: useFetch
//    Write a useFetch<T>(url: string) hook that:
//    - Returns { data: T | null, loading: boolean, error: string | null }
//    - Fetches on mount
//    - Has a refetch() function to re-trigger manually
//    - Cancels the fetch if the component unmounts (use AbortController)
//    - Types the data based on T — callers decide what shape to expect

// your hook here

// Usage example (should be fully typed):
// const { data, loading, error } = useFetch<User[]>('http://localhost:3001/api/users')
// data is User[] | null — TypeScript knows the shape


// ─────────────────────────────────────────────
// 2. Typed useReducer — job board state

interface Job {
  id: number
  title: string
  company: string
  salary: { min: number; max: number }
  remote: boolean
  saved: boolean
}

// Define a discriminated union for actions — no string magic, no `any` payloads
type JobAction = never // replace with your discriminated union:
// | { type: 'LOAD_START' }
// | { type: 'LOAD_SUCCESS'; payload: Job[] }
// | { type: 'LOAD_ERROR'; payload: string }
// | { type: 'TOGGLE_SAVE'; payload: number }      ← job id
// | { type: 'FILTER_REMOTE'; payload: boolean }
// | { type: 'CLEAR_FILTERS' }

interface JobState {
  jobs: Job[]
  filteredJobs: Job[]
  loading: boolean
  error: string | null
  filters: { remote: boolean | null }
}

function jobReducer(state: JobState, action: JobAction): JobState {
  // TypeScript knows the exact shape of action.payload in each case
  // your code here
  return state
}

// Write a JobBoard component that uses useReducer with this typed reducer


// ─────────────────────────────────────────────
// 3. Context with TypeScript
//    Build a typed auth context.
//
//    AuthContext value:
//    {
//      user: User | null,
//      login: (email: string, password: string) => Promise<void>
//      logout: () => void
//      isAuthenticated: boolean
//    }
//
//    Rules:
//    - createContext requires a default value — use a sensible one or use null
//    - Write a useAuth() hook that throws if used outside AuthProvider
//    - Consumers should get full type safety — user.name autocompletes

interface AuthUser { id: number; name: string; email: string; role: string }

// your context + provider + useAuth hook here


// ─────────────────────────────────────────────
// 4. Typed form hook
//    Write useForm<T extends object>(initialValues: T) that returns:
//    {
//      values: T
//      errors: Partial<Record<keyof T, string>>
//      handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
//      setFieldError: (field: keyof T, error: string) => void
//      reset: () => void
//      isValid: boolean   ← true when errors object is empty
//    }
//
//    Test with a typed form:
//    const form = useForm({ email: '', password: '', name: '' })
//    form.values.email      // string ✓
//    form.values.nonexistent  // TypeScript error ✓

// your hook here

export {}
