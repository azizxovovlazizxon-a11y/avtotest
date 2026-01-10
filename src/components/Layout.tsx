import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
