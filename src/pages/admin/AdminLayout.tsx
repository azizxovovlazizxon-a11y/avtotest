import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { 
  LayoutDashboard, 
  FileQuestion, 
  BookOpen, 
  ArrowLeft,
  Settings,
  Database,
  LogOut,
  Users,
  Tag
} from 'lucide-react'

const adminMenuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Users, label: 'Foydalanuvchilar', path: '/admin/users' },
  { icon: FileQuestion, label: 'Savollar', path: '/admin/questions' },
  { icon: BookOpen, label: 'Biletlar', path: '/admin/bilets' },
  { icon: Tag, label: 'Promokodlar', path: '/admin/promocodes' },
  { icon: Database, label: 'Ma\'lumotlar', path: '/admin/data' },
  { icon: Settings, label: 'Sozlamalar', path: '/admin/settings' },
]

export default function AdminLayout() {
  const navigate = useNavigate()

  // Check if admin is logged in
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken')
    if (!adminToken) {
      navigate('/admin/login')
    }
  }, [navigate])

  const handleLogout = async () => {
    if (confirm('Admin paneldan chiqmoqchimisiz?')) {
      const adminToken = localStorage.getItem('adminToken')
      
      // Call logout API
      try {
        await fetch('https://avtotest-8t98.onrender.com/api/admin/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${adminToken}`
          }
        })
      } catch (error) {
        console.error('Logout error:', error)
      }
      
      // Clear local storage
      localStorage.removeItem('adminToken')
      localStorage.removeItem('adminUsername')
      navigate('/admin/login')
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top header */}
      <header className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Asosiy saytga</span>
          </button>
          <div className="w-px h-6 bg-slate-600" />
          <h1 className="text-xl font-bold">AvtoTest Admin Panel</h1>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-slate-700"
        >
          <LogOut size={20} />
          <span>Chiqish</span>
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-64px)]">
          <nav className="p-4">
            {adminMenuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/admin'}
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
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
