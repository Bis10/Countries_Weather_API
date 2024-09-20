import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import ErrorPage from './components/ErrorPage'
import Countries from './components/Countries'
import Home from './components/Home'
import CountrySingle from './components/CountrySingle'
import Register from './components/Register'
import Login from './components/Login'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './auth/firebase'
import ProtectedRoute from './auth/ProtectedRoute'





function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route>
            {/* This is where other routes will go to allow layout to be visible */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/countries" element={<Countries />} />
              <Route path="/countries/:single" element={<CountrySingle />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
