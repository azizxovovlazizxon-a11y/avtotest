import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Layers, CheckCircle, ThumbsUp, TrendingUp } from 'lucide-react'
import { BiletCard } from '../components/Cards'
import { useAuthStore } from '../store/authStore'
import { useExamStore } from '../store/examStore'
import { getBiletInfo, BiletInfo, getTotalBilets } from '../data/questions'

type FilterType = 'all' | 'new' | 'passed' | 'failed'

export default function Biletlar() {
  const [filter, setFilter] = useState<FilterType>('all')
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const { getBiletStatistics, startExam } = useExamStore()
  
  const bilets = getBiletInfo()
  const biletStats = getBiletStatistics()
  const totalBilets = getTotalBilets()
  
  // Check if user has active premium (isPremium and not expired)
  const isPremiumActive = user?.isPremium && (
    !user?.proExpiresAt || new Date(user.proExpiresAt) > new Date()
  )

  // Calculate statistics
  const completedBilets = Array.from(biletStats.values()).length
  const passedBilets = Array.from(biletStats.values()).filter(s => s.passed).length
  const progress = Math.round((passedBilets / totalBilets) * 100)

  // Filter bilets
  const filteredBilets = bilets.filter((bilet: BiletInfo) => {
    const stats = biletStats.get(bilet.id)
    switch (filter) {
      case 'new':
        return !stats
      case 'passed':
        return stats?.passed
      case 'failed':
        return stats && !stats.passed
      default:
        return true
    }
  })

  // Count for each filter
  const counts = {
    all: totalBilets,
    new: bilets.filter((b: BiletInfo) => !biletStats.get(b.id)).length,
    passed: passedBilets,
    failed: completedBilets - passedBilets,
  }

  const getGradient = (index: number) => {
    const gradients = [
      'card-gradient-blue',
      'card-gradient-green',
      'card-gradient-purple',
      'card-gradient-yellow',
      'card-gradient-orange',
      'card-gradient-pink',
    ]
    return gradients[index % gradients.length]
  }

  const handleStartBilet = (biletId: number) => {
    const bilet = bilets.find((b: BiletInfo) => b.id === biletId)
    if (!bilet) return

    if (!bilet.isFree && !isPremiumActive) {
      navigate('/pro-versiya')
      return
    }

    startExam('bilet', 10, biletId)
    navigate(`/biletlar/${biletId}`)
  }

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <BookOpen className="text-slate-700" size={28} />
        <h1 className="text-3xl font-bold text-slate-800">Biletlar</h1>
      </div>
      <p className="text-slate-500 mb-6">
        {totalBilets} ta bilet. Har bir biletda 10 ta savol. Biletni tanlang va mashq qiling.
      </p>

      {/* Statistics cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Jami</p>
            <Layers className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{totalBilets}</p>
          <p className="text-xs text-slate-500">Barcha biletlar soni</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Yakunlangan</p>
            <CheckCircle className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{completedBilets}</p>
          <p className="text-xs text-slate-500">Tugallangan biletlar</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Muvaffaqiyatli</p>
            <ThumbsUp className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{passedBilets}</p>
          <p className="text-xs text-slate-500">O'tgan biletlar</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Progress</p>
            <TrendingUp className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{progress}%</p>
          <p className="text-xs text-slate-500">Umumiy o'sish ko'rsatkichi</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
            filter === 'all'
              ? 'bg-slate-800 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          Barcha biletlar
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            filter === 'all' ? 'bg-white text-slate-800' : 'bg-slate-100 text-slate-600'
          }`}>{counts.all}</span>
        </button>
        <button
          onClick={() => setFilter('new')}
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
            filter === 'new'
              ? 'bg-slate-800 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          Yangi
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            filter === 'new' ? 'bg-white text-slate-800' : 'bg-slate-100 text-slate-600'
          }`}>{counts.new}</span>
        </button>
        <button
          onClick={() => setFilter('passed')}
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
            filter === 'passed'
              ? 'bg-slate-800 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          O'tilgan
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            filter === 'passed' ? 'bg-white text-slate-800' : 'bg-slate-100 text-slate-600'
          }`}>{counts.passed}</span>
        </button>
        <button
          onClick={() => setFilter('failed')}
          className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
            filter === 'failed'
              ? 'bg-slate-800 text-white'
              : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          O'tilmagan
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            filter === 'failed' ? 'bg-white text-slate-800' : 'bg-slate-100 text-slate-600'
          }`}>{counts.failed}</span>
        </button>
      </div>

      {/* Bilet cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBilets.map((bilet: BiletInfo, index: number) => {
          const stats = biletStats.get(bilet.id)
          return (
            <BiletCard
              key={bilet.id}
              biletId={bilet.id}
              gradient={getGradient(index)}
              isFree={bilet.isFree}
              isPremium={isPremiumActive ?? false}
              attempts={stats?.attempts ?? 0}
              lastScore={stats?.lastScore}
              onStart={() => handleStartBilet(bilet.id)}
            />
          )
        })}
      </div>

      {filteredBilets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">Bu kategoriyada biletlar topilmadi</p>
        </div>
      )}
    </div>
  )
}
