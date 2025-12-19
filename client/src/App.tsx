import { BrowserRouter, Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/Home'
import Login from './components/auth/Login'
import CustomerLogin from './components/auth/CustomerLogin'
import Register from './components/auth/Register'
import AdminDashboard from './components/super-admin/dashboard/AdminDashboard'
import CustomerDashboard from './components/Customer/CustomerDashboard'
import { ROUTES, STORAGE_KEYS } from './utils/constants'
import type { User } from './types/auth'
import './App.css'

function AuthCallback() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const success = searchParams.get('success')
    const userParam = searchParams.get('user')
    const error = searchParams.get('error')

    if (success === 'true' && userParam) {
      try {
        const user: User = JSON.parse(decodeURIComponent(userParam))
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
        // Route based on user role
        if (user.roles && user.roles.includes('Customer')) {
          navigate(ROUTES.DASHBOARD) // Customer dashboard
        } else {
          navigate(ROUTES.ADMIN) // Admin dashboard
        }
      } catch {
        navigate(`${ROUTES.LOGIN}?error=${encodeURIComponent('Failed to parse user data')}`)
      }
    } else if (error) {
      navigate(`${ROUTES.LOGIN}?error=${encodeURIComponent(error)}`)
    } else {
      navigate(ROUTES.LOGIN)
    }
  }, [searchParams, navigate])

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      fontSize: '1.2rem',
      color: '#667eea'
    }}>
      Processing authentication...
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<CustomerLogin />} />
        <Route path={ROUTES.ADMIN_LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.DASHBOARD} element={<CustomerDashboard />} />
        <Route path={ROUTES.ADMIN} element={<AdminDashboard />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
