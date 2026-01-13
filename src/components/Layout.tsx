import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useAuthStore } from '../store/authStore'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { syncUserFromServer, isAuthenticated } = useAuthStore()
  
  // Sync user data from server on mount (to get latest Pro status)
  useEffect(() => {
    if (isAuthenticated) {
      syncUserFromServer()
    }
  }, [isAuthenticated, syncUserFromServer])
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Sidebar />
      <main className="lg:ml-64 flex-1">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="lg:ml-64 bg-white border-t border-gray-200 mt-auto">
        <div className="px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
            <div>
              © 2026 Avtotest.uz
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="hover:text-blue-600 transition-colors">
                Sayt haqida
              </Link>
              <Link to="/privacy" className="hover:text-blue-600 transition-colors">
                Maxfiylik siyosati
              </Link>
              <Link to="/terms" className="hover:text-blue-600 transition-colors">
                Foydalanish shartlari
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
