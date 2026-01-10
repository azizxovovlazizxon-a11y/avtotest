import { useNavigate } from 'react-router-dom'
import { FileText, Target, BookOpen } from 'lucide-react'
import { TestCard } from '../components/Cards'
import { useExamStore } from '../store/examStore'

export default function BoshSahifa() {
  const navigate = useNavigate()
  const { examHistory } = useExamStore()

  // Calculate exam-specific stats
  const standardExams = examHistory.filter(e => e.examType === 'standard')
  const realExams = examHistory.filter(e => e.examType === 'real')

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Test Paperlari</h1>
        <p className="text-slate-500">
          O'zbekiston Respublikasi yo'l harakati qoidalari bo'yicha test sinovlari
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button className="px-4 py-2 bg-slate-800 text-white rounded-full text-sm font-medium flex items-center gap-2">
          Barcha testlar
          <span className="bg-white text-slate-800 text-xs px-2 py-0.5 rounded-full">4</span>
        </button>
        <button className="px-4 py-2 bg-white text-slate-600 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors flex items-center gap-2">
          Yangi testlar
          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">2</span>
        </button>
        <button className="px-4 py-2 bg-white text-slate-600 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors flex items-center gap-2">
          Bepul testlar
          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">4</span>
        </button>
        <button className="px-4 py-2 bg-white text-slate-600 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors flex items-center gap-2">
          Yakunlanganlar
          <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">{examHistory.length}</span>
        </button>
      </div>

      {/* Test cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Standart Imtihon */}
        <TestCard
          title="Standart Imtihon"
          gradient="card-gradient-blue"
          icon={<FileText size={24} className="text-slate-700" />}
          tags={[
            { label: 'Tavsiya etilgan', type: 'recommended' },
            { label: 'BEPUL', type: 'free' },
          ]}
          stats={[
            { label: 'Sizning urinishlaringiz:', value: standardExams.length },
            { label: 'Sizning natijangiz:', value: standardExams.length > 0 ? `${standardExams[0].percentage}%` : '0%' },
          ]}
          buttonText="Testni boshlash"
          buttonAction={() => navigate('/standart-imtihon')}
        />

        {/* Real Imtihon */}
        <TestCard
          title="Real Imtihon"
          gradient="card-gradient-green"
          icon={<Target size={24} className="text-slate-700" />}
          tags={[
            { label: 'Eng ommabop', type: 'popular' },
            { label: 'BEPUL', type: 'free' },
          ]}
          stats={[
            { label: 'Sizning urinishlaringiz:', value: realExams.length },
            { label: 'Sizning natijangiz:', value: realExams.length > 0 ? `${realExams[0].percentage}%` : 'Hali yechilmagan' },
          ]}
          buttonText="Testni boshlash"
          buttonAction={() => navigate('/real-imtihon')}
        />

        {/* Biletlar */}
        <TestCard
          title="Biletlar (111 ta)"
          gradient="card-gradient-purple"
          icon={<BookOpen size={24} className="text-slate-700" />}
          tags={[
            { label: "O'quv rejimi", type: 'study' },
            { label: 'BEPUL', type: 'free' },
          ]}
          stats={[
            { label: 'Yakunlangan biletlar:', value: `${examHistory.filter(e => e.examType === 'bilet').length} / 111` },
            { label: 'Jami savollar:', value: '1110 ta' },
          ]}
          buttonText="Biletlarni ko'rish"
          buttonAction={() => navigate('/biletlar')}
        />
      </div>

      {/* Advertisement Banner */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <div className="text-center">
          <p className="text-xs text-slate-400 mb-2">Reklama</p>
          <div className="bg-slate-100 rounded-xl flex items-center justify-center" style={{ minHeight: '250px' }}>
            <div className="text-center text-slate-400">
              <div className="text-4xl mb-2">📢</div>
              <p className="text-sm font-medium">Reklama banneri</p>
              <p className="text-xs">728x90 yoki 970x250</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
