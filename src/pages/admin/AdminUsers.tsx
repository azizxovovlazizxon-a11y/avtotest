import { useState, useEffect } from 'react'
import { Users, Search, Crown, Calendar, Phone } from 'lucide-react'

interface User {
  id: string
  telegramId: string
  phone: string
  name: string
  isPro: boolean
  proExpiresAt?: Date
  createdAt: Date
  lastLoginAt: Date
}

export default function AdminUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'pro' | 'free'>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch users from backend API
    // For now, showing example data structure
    setLoading(false)
    
    // Example data - replace with actual API call
    const exampleUsers: User[] = [
      {
        id: '1',
        telegramId: '123456789',
        phone: '+998901234567',
        name: 'Test User',
        isPro: true,
        proExpiresAt: new Date('2026-02-01'),
        createdAt: new Date('2026-01-01'),
        lastLoginAt: new Date('2026-01-11'),
      }
    ]
    setUsers(exampleUsers)
  }, [])

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery) ||
      user.telegramId.includes(searchQuery)
    
    const matchesFilter = 
      filter === 'all' ||
      (filter === 'pro' && user.isPro) ||
      (filter === 'free' && !user.isPro)
    
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: users.length,
    pro: users.filter(u => u.isPro).length,
    free: users.filter(u => !u.isPro).length,
    newThisMonth: users.filter(u => {
      const monthAgo = new Date()
      monthAgo.setMonth(monthAgo.getMonth() - 1)
      return u.createdAt > monthAgo
    }).length
  }

  const toggleProStatus = async (userId: string) => {
    // TODO: Implement API call to toggle pro status
    const user = users.find(u => u.id === userId)
    if (!user) return

    const newProStatus = !user.isPro
    const proExpiresAt = newProStatus ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) : undefined

    setUsers(users.map(u => 
      u.id === userId 
        ? { ...u, isPro: newProStatus, proExpiresAt }
        : u
    ))

    alert(`Foydalanuvchi ${newProStatus ? 'Pro' : 'Free'} statusiga o'zgartirildi`)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Foydalanuvchilar</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-blue-500" size={24} />
            <span className="text-sm text-slate-500">Jami</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{stats.total}</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Crown className="text-yellow-500" size={24} />
            <span className="text-sm text-slate-500">Pro</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{stats.pro}</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-green-500" size={24} />
            <span className="text-sm text-slate-500">Free</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{stats.free}</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="text-purple-500" size={24} />
            <span className="text-sm text-slate-500">Bu oy</span>
          </div>
          <p className="text-3xl font-bold text-slate-800">{stats.newThisMonth}</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Ism, telefon yoki Telegram ID bo'yicha qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Barchasi
            </button>
            <button
              onClick={() => setFilter('pro')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'pro'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Pro
            </button>
            <button
              onClick={() => setFilter('free')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'free'
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Free
            </button>
          </div>
        </div>
      </div>

      {/* Users table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <p className="text-slate-500">Yuklanmoqda...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="p-8 text-center">
            <Users className="mx-auto mb-4 text-slate-400" size={48} />
            <p className="text-slate-500">Foydalanuvchilar topilmadi</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left p-4 font-medium text-slate-600">Foydalanuvchi</th>
                  <th className="text-left p-4 font-medium text-slate-600">Telefon</th>
                  <th className="text-left p-4 font-medium text-slate-600">Status</th>
                  <th className="text-left p-4 font-medium text-slate-600">Ro'yxatdan o'tgan</th>
                  <th className="text-left p-4 font-medium text-slate-600">Oxirgi kirish</th>
                  <th className="text-right p-4 font-medium text-slate-600">Amallar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-slate-800">{user.name}</p>
                        <p className="text-sm text-slate-500">ID: {user.telegramId}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Phone size={16} />
                        <span>{user.phone}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {user.isPro ? (
                        <div>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                            <Crown size={14} />
                            Pro
                          </span>
                          {user.proExpiresAt && (
                            <p className="text-xs text-slate-500 mt-1">
                              {new Date(user.proExpiresAt).toLocaleDateString('uz-UZ')} gacha
                            </p>
                          )}
                        </div>
                      ) : (
                        <span className="inline-flex px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                          Free
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-slate-600">
                      {new Date(user.createdAt).toLocaleDateString('uz-UZ')}
                    </td>
                    <td className="p-4 text-slate-600">
                      {new Date(user.lastLoginAt).toLocaleDateString('uz-UZ')}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => toggleProStatus(user.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          user.isPro
                            ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                        }`}
                      >
                        {user.isPro ? 'Pro ni bekor qilish' : 'Pro qilish'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Info box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-800">
          <strong>Eslatma:</strong> Hozirda bu sahifa misol ma'lumotlarini ko'rsatmoqda. 
          Backend API bilan integratsiya qilish kerak. Foydalanuvchi ma'lumotlari backend 
          serverdan yuklanadi va barcha o'zgarishlar backend orqali saqlanadi.
        </p>
      </div>
    </div>
  )
}
