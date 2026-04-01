// 10 — Full Stack Mini Project — React App
// Phase 2: Build this after the backend is running
//
// Run backend first:  cd server && node server.js
// Run frontend:       cd client && npm run dev
//
// All API calls go to http://localhost:3001/api

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages — build these one by one in the pages/ folder
// import JobList from './pages/JobList'
// import JobDetail from './pages/JobDetail'
// import ApplyPage from './pages/ApplyPage'
// import LoginPage from './pages/LoginPage'
// import Dashboard from './pages/Dashboard'

// Context
// import { AuthProvider } from './context/AuthContext'

// Components
// import Navbar from './components/Navbar'
// import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    // <AuthProvider>
    //   <BrowserRouter>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<JobList />} />
    //       <Route path="/jobs/:id" element={<JobDetail />} />
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/apply/:id" element={
    //         <ProtectedRoute>
    //           <ApplyPage />
    //         </ProtectedRoute>
    //       } />
    //       <Route path="/dashboard" element={
    //         <ProtectedRoute>
    //           <Dashboard />
    //         </ProtectedRoute>
    //       } />
    //     </Routes>
    //   </BrowserRouter>
    // </AuthProvider>
    <div style={{ padding: '2rem' }}>
      <h1>Job Board</h1>
      <p>Start by building the server, then uncomment the routes above.</p>
    </div>
  )
}
