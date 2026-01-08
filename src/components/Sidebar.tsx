import { NavLink, useNavigate } from 'react-router-dom'
import { 
  Home, 
  FileText, 
  Target, 
  BookOpen, 
  BarChart3, 
  Crown,
  LogOut,
  Menu,
  X,
  LogIn
} from 'lucide-react'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore'

const menuItems = [
  { icon: Home, label: 'Bosh Sahifa', path: '/' },
  { icon: FileText, label: 'Standart Imtihon', path: '/standart-imtihon' },
  { icon: Target, label: 'Real Imtihon', path: '/real-imtihon' },
  { icon: BookOpen, label: 'Biletlar', path: '/biletlar', badge: 40 },
  { icon: BarChart3, label: 'Tarix va Statistika', path: '/tarix-statistika' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { logout, user, isAuthenticated } = useAuthStore()

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  const handleLogin = () => {
    navigate('/auth')
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-slate-800 text-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-200 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-6">
            <div className="w-8 h-8 text-slate-700">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-800">AvtoTest</span>
          </div>

          {/* Menu label */}
          <div className="px-6 py-3">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">MENU</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-slate-700 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Pro version button */}
          <div className="px-3 mb-4">
            <button
              onClick={() => {
                navigate('/pro-versiya')
                setIsOpen(false)
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200"
            >
              <Crown size={20} />
              Pro versiyaga o'tish
            </button>
          </div>

          {/* User info / Login button */}
          <div className="border-t border-slate-200 p-4">
            {isAuthenticated && user ? (
              <>
                <div className="flex items-center gap-3 mb-3 px-2">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">{user.name}</p>
                    <p className="text-xs text-slate-500 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-red-500 hover:bg-slate-100 py-2 px-3 rounded-lg transition-colors"
                >
                  <LogOut size={18} />
                  <span className="text-sm">Chiqish</span>
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
              >
                <LogIn size={20} />
                Kirish
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
