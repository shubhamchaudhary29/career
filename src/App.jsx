import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login.jsx'
import SignupPage from './pages/Signup.jsx'
import HomePage from './pages/HomePage.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
