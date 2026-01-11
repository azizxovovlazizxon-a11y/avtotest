import { useState, useEffect } from 'react'
import { Tag, Plus, Trash2, Calendar, Users, CheckCircle, XCircle } from 'lucide-react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

interface PromoCode {
  _id?: string
  code: string
  durationMonths: number
  maxUses: number
  usedCount: number
  isActive: boolean
  createdAt?: string
  expiresAt?: string
}

export default function AdminPromoCodes() {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newPromo, setNewPromo] = useState({
    code: '',
    durationMonths: 1,
    maxUses: 10,
    expiresInDays: 30
  })

  useEffect(() => {
    fetchPromoCodes()
  }, [])

  const fetchPromoCodes = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await axios.get(`${API_URL}/api/admin/promocodes`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setPromoCodes(response.data.promoCodes || [])
    } catch (error) {
      console.error('Failed to fetch promocodes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreatePromoCode = async () => {
    if (!newPromo.code.trim()) {
      alert('Promokod kiriting')
      return
    }

    try {
      const token = localStorage.getItem('adminToken')
      await axios.post(
        `${API_URL}/api/admin/promocodes`,
        newPromo,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      alert('Promokod yaratildi!')
      setShowCreateForm(false)
      setNewPromo({ code: '', durationMonths: 1, maxUses: 10, expiresInDays: 30 })
      fetchPromoCodes()
    } catch (error: any) {
      alert(error.response?.data?.message || 'Xatolik yuz berdi')
    }
  }

  const handleDeletePromoCode = async (id: string) => {
    if (!confirm('Promokodni o\'chirmoqchimisiz?')) return

    try {
      const token = localStorage.getItem('adminToken')
      await axios.delete(`${API_URL}/api/admin/promocodes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      alert('Promokod o\'chirildi')
      fetchPromoCodes()
    } catch (error) {
      alert('Xatolik yuz berdi')
    }
  }

  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      const token = localStorage.getItem('adminToken')
      await axios.patch(
        `${API_URL}/api/admin/promocodes/${id}`,
        { isActive: !isActive },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      fetchPromoCodes()
    } catch (error) {
      alert('Xatolik yuz berdi')
    }
  }

  if (loading) {
    return <div className="text-center py-8">Yuklanmoqda...</div>
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Tag className="text-purple-600" size={28} />
          <h1 className="text-3xl font-bold text-slate-800">Promokodlar</h1>
        </div>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          <Plus size={20} />
          Yangi Promokod
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-4">Yangi Promokod Yaratish</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Promokod
              </label>
              <input
                type="text"
                value={newPromo.code}
                onChange={(e) => setNewPromo({ ...newPromo, code: e.target.value.toUpperCase() })}
                placeholder="PROMO2024"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none uppercase"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Muddat (oylar)
              </label>
              <input
                type="number"
                value={newPromo.durationMonths}
                onChange={(e) => setNewPromo({ ...newPromo, durationMonths: parseInt(e.target.value) })}
                min="1"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Maksimal foydalanish
              </label>
              <input
                type="number"
                value={newPromo.maxUses}
                onChange={(e) => setNewPromo({ ...newPromo, maxUses: parseInt(e.target.value) })}
                min="1"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Amal qilish muddati (kunlar)
              </label>
              <input
                type="number"
                value={newPromo.expiresInDays}
                onChange={(e) => setNewPromo({ ...newPromo, expiresInDays: parseInt(e.target.value) })}
                min="1"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleCreatePromoCode}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              Yaratish
            </button>
            <button
              onClick={() => setShowCreateForm(false)}
              className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}

      {/* Promo Codes List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Kod</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Muddat</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Foydalanish</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Amal qiladi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {promoCodes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Promokodlar yo'q
                  </td>
                </tr>
              ) : (
                promoCodes.map((promo) => (
                  <tr key={promo._id} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <span className="font-mono font-bold text-purple-600">{promo.code}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Calendar size={16} />
                        {promo.durationMonths} oy
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Users size={16} />
                        {promo.usedCount} / {promo.maxUses}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {promo.expiresAt
                        ? new Date(promo.expiresAt).toLocaleDateString('uz-UZ')
                        : 'Cheksiz'}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleActive(promo._id!, promo.isActive)}
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          promo.isActive
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {promo.isActive ? (
                          <>
                            <CheckCircle size={14} />
                            Faol
                          </>
                        ) : (
                          <>
                            <XCircle size={14} />
                            Nofaol
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeletePromoCode(promo._id!)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
