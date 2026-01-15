import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import TelegramAuth from './pages/TelegramAuth'
import BoshSahifa from './pages/BoshSahifa'
import StandartImtihon from './pages/StandartImtihon'
import RealImtihon from './pages/RealImtihon'
import Biletlar from './pages/Biletlar'
import BiletTest from './pages/BiletTest'
import TarixStatistika from './pages/TarixStatistika'
import ProVersiya from './pages/ProVersiya'
import Exam from './pages/Exam'
import ExamResults from './pages/ExamResults'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import About from './pages/About'
import { useAuthStore } from './store/authStore'

// Admin pages
import AdminLayout from './pages/admin/AdminLayout'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminQuestions from './pages/admin/AdminQuestions'
import AdminBilets from './pages/admin/AdminBilets'
import AdminPromoCodes from './pages/admin/AdminPromoCodes'
import AdminData from './pages/admin/AdminData'
import AdminSettings from './pages/admin/AdminSettings'

// Keep-alive ping to prevent Render.com free tier from sleeping
const API_URL = 'https://avtotest-8t98.onrender.com'

// Validate session on app load - auto logout if session is invalid
async function validateSession(): Promise<boolean> {
  const token = localStorage.getItem('authToken')
  if (!token) return false
  
  try {
    const response = await fetch(`${API_URL}/api/auth/verify-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    })
    
    if (!response.ok) {
      console.log('⚠️ Session invalid - logging out')
      return false
    }
    return true
  } catch {
    return false
  }
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  // Check localStorage directly for admin token
  const adminToken = localStorage.getItem('adminToken')
  return adminToken ? <>{children}</> : <Navigate to="/admin/login" />
}

function App() {
  const { logout, isAuthenticated } = useAuthStore()

  // Validate session on app load
  useEffect(() => {
    // Wake up server
    fetch(`${API_URL}/api/health`, { method: 'GET' })
      .then(() => console.log('✅ Server is awake'))
      .catch(() => console.log('⚠️ Server is waking up...'))
    
    // Validate session if user appears to be logged in
    if (isAuthenticated) {
      validateSession().then(isValid => {
        if (!isValid) {
          console.log('🔒 Session expired - auto logout')
          logout()
          // Show message to user
          alert('Sessiyangiz tugagan. Iltimos, qaytadan kiring.')
        }
      })
    }
  }, [isAuthenticated, logout])

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<TelegramAuth />} />
        
        {/* Exam pages - Full screen without sidebar */}
        <Route path="/exam/:examType" element={<Exam />} />
        <Route path="/exam-results" element={<ExamResults />} />
        
        {/* Main pages with sidebar - All PUBLIC */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<BoshSahifa />} />
                <Route path="/standart-imtihon" element={<StandartImtihon />} />
                <Route path="/real-imtihon" element={<RealImtihon />} />
                <Route path="/biletlar" element={<Biletlar />} />
                <Route path="/biletlar/:biletId" element={<BiletTest />} />
                <Route path="/tarix-statistika" element={<TarixStatistika />} />
                <Route path="/pro-versiya" element={<ProVersiya />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Layout>
          }
        />
        
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="questions" element={<AdminQuestions />} />
          <Route path="bilets" element={<AdminBilets />} />
          <Route path="promocodes" element={<AdminPromoCodes />} />
          <Route path="data" element={<AdminData />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
