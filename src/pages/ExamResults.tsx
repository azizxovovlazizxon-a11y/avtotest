import { useLocation, useNavigate } from 'react-router-dom'
import { 
  CheckCircle, 
  XCircle, 
  Trophy, 
  Clock, 
  Target,
  Home,
  RotateCcw,
  BarChart3
} from 'lucide-react'
import type { ExamResult } from '../types'

export default function ExamResults() {
  const location = useLocation()
  const navigate = useNavigate()
  const result = location.state?.result as ExamResult | undefined

  if (!result) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="mx-auto text-slate-400 mb-4" size={48} />
          <p className="text-slate-600 mb-4">Natijalar topilmadi</p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    )
  }

  const getExamTypeName = (type: string) => {
    switch (type) {
      case 'standard':
        return 'Standart Imtihon'
      case 'real':
        return 'Real Imtihon'
      case 'bilet':
        return `Bilet #${result.biletId}`
      default:
        return type
    }
  }

  const getRetryPath = () => {
    switch (result.examType) {
      case 'standard':
        return '/standart-imtihon'
      case 'real':
        return '/real-imtihon'
      case 'bilet':
        return '/biletlar'
      default:
        return '/'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Result card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className={`p-8 text-center ${
            result.passed 
              ? 'bg-gradient-to-br from-emerald-400 to-teal-500' 
              : 'bg-gradient-to-br from-red-400 to-rose-500'
          }`}>
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {result.passed ? (
                <Trophy className="text-white" size={40} />
              ) : (
                <XCircle className="text-white" size={40} />
              )}
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {result.passed ? 'Tabriklaymiz!' : 'Afsuski...'}
            </h1>
            <p className="text-white/90">
              {result.passed 
                ? "Siz imtihondan muvaffaqiyatli o'tdingiz!" 
                : "Siz imtihondan o'ta olmadingiz. Qaytadan urinib ko'ring!"
              }
            </p>
          </div>

          {/* Score */}
          <div className="p-8">
            {/* Main score */}
            <div className="text-center mb-8">
              <div className={`text-7xl font-bold ${
                result.passed ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {result.percentage}%
              </div>
              <p className="text-slate-500 mt-2">Sizning ballingiz</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <Target className="mx-auto text-slate-400 mb-2" size={24} />
                <p className="text-2xl font-bold text-slate-800">{result.totalQuestions}</p>
                <p className="text-xs text-slate-500">Jami savollar</p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <CheckCircle className="mx-auto text-emerald-500 mb-2" size={24} />
                <p className="text-2xl font-bold text-emerald-600">{result.correctAnswers}</p>
                <p className="text-xs text-slate-500">To'g'ri javoblar</p>
              </div>

              <div className="bg-red-50 rounded-xl p-4 text-center">
                <XCircle className="mx-auto text-red-500 mb-2" size={24} />
                <p className="text-2xl font-bold text-red-500">{result.wrongAnswers}</p>
                <p className="text-xs text-slate-500">Noto'g'ri javoblar</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <Clock className="mx-auto text-blue-500 mb-2" size={24} />
                <p className="text-2xl font-bold text-blue-600">
                  {Math.floor(result.timeTaken / 60)}:{(result.timeTaken % 60).toString().padStart(2, '0')}
                </p>
                <p className="text-xs text-slate-500">Sarflangan vaqt</p>
              </div>
            </div>

            {/* Exam info */}
            <div className="bg-slate-50 rounded-xl p-4 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-500">Imtihon turi</p>
                  <p className="font-medium text-slate-800">{getExamTypeName(result.examType)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">O'tish bali</p>
                  <p className="font-medium text-slate-800">80%</p>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Natija</span>
                <span className={`font-medium ${
                  result.passed ? 'text-emerald-600' : 'text-red-500'
                }`}>
                  {result.passed ? 'O\'tdi' : 'O\'tmadi'}
                </span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    result.passed ? 'bg-emerald-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${result.percentage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>0%</span>
                <span className="text-slate-600 font-medium">80% (o'tish bali)</span>
                <span>100%</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate('/')}
                className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-4 rounded-xl transition-colors"
              >
                <Home size={20} />
                Bosh sahifa
              </button>
              <button
                onClick={() => navigate(getRetryPath())}
                className="flex-1 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-4 rounded-xl transition-colors"
              >
                <RotateCcw size={20} />
                Qaytadan urinish
              </button>
            </div>
          </div>
        </div>

        {/* Tips */}
        {!result.passed && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
            <h3 className="font-bold text-amber-800 mb-2">Tavsiyalar</h3>
            <ul className="space-y-2 text-amber-700 text-sm">
              <li>• Yo'l belgilari va ularning ma'nolarini takrorlang</li>
              <li>• Biletlarni birma-bir yechib chiqing</li>
              <li>• Xato qilgan savollaringizni qayta ko'rib chiqing</li>
              <li>• Real imtihon rejimida mashq qiling</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
