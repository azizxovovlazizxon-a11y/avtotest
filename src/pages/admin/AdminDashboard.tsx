import { FileQuestion, BookOpen, Users, TrendingUp } from 'lucide-react'
import { useAdminStore } from '../../store/adminStore'

export default function AdminDashboard() {
  const { questions, bilets } = useAdminStore()

  const stats = [
    {
      label: 'Jami savollar',
      value: questions.length,
      icon: FileQuestion,
      color: 'bg-blue-500',
    },
    {
      label: 'Faol biletlar',
      value: bilets.filter(b => b.isActive).length,
      icon: BookOpen,
      color: 'bg-green-500',
    },
    {
      label: 'Rasmli savollar',
      value: questions.filter(q => q.imageUrl).length,
      icon: Users,
      color: 'bg-purple-500',
    },
    {
      label: 'Kategoriyalar',
      value: new Set(questions.map(q => q.category)).size,
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ]

  const categories = Array.from(new Set(questions.map(q => q.category)))
  const categoryStats = categories.map(cat => ({
    name: cat,
    count: questions.filter(q => q.category === cat).length,
  })).sort((a, b) => b.count - a.count)

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h1>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Category breakdown */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Kategoriyalar bo'yicha savollar</h2>
        <div className="space-y-3">
          {categoryStats.map((cat) => (
            <div key={cat.name} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">{cat.name}</span>
                  <span className="text-sm text-slate-500">{cat.count} ta</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 rounded-full"
                    style={{ width: `${(cat.count / questions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent questions */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 mb-4">So'nggi qo'shilgan savollar</h2>
        <div className="space-y-3">
          {questions.slice(-5).reverse().map((q) => (
            <div key={q.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center text-xs font-bold text-slate-600">
                {q.id}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 truncate">{q.text}</p>
                <p className="text-xs text-slate-500">{q.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
