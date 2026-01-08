import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HelpCircle, Clock, Target, CheckCircle, Info, Play, Lock } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useExamStore } from '../store/examStore'

export default function StandartImtihon() {
  const [questionCount, setQuestionCount] = useState<20 | 50>(20)
  const navigate = useNavigate()
  const { user, canTakeExam, incrementFreeAttempt, isAuthenticated } = useAuthStore()
  const { startExam } = useExamStore()

  const canStartExam = canTakeExam()

  const handleStartExam = () => {
    if (!canStartExam) {
      // Redirect to Pro version or auth page
      if (!isAuthenticated) {
        navigate('/auth', { state: { from: { pathname: '/standart-imtihon' } } })
      } else {
        navigate('/pro-versiya')
      }
      return
    }

    startExam('standard', questionCount)
    
    // Track free attempt usage if not authenticated or not premium
    if (!isAuthenticated) {
      incrementFreeAttempt()
    }

    navigate('/exam/standard')
  }

  return (
    <div className="animate-fadeIn flex justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="w-full max-w-xl">
        {/* Exam card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Standart Imtihon</h1>
            <p className="text-slate-500">
              Vaqt cheklovisiz mashq qiling. Javoblar darhol ko'rsatiladi.
            </p>
          </div>

          {/* Stats icons */}
          <div className="flex justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <HelpCircle className="text-blue-500" size={24} />
              </div>
              <p className="text-2xl font-bold text-slate-800">{questionCount}</p>
              <p className="text-xs text-slate-500 uppercase">Savollar</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="text-orange-500" size={24} />
              </div>
              <p className="text-2xl font-bold text-slate-800">∞</p>
              <p className="text-xs text-slate-500 uppercase">Daqiqa</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="text-green-500" size={24} />
              </div>
              <p className="text-2xl font-bold text-slate-800">80%</p>
              <p className="text-xs text-slate-500 uppercase">O'tish bali</p>
            </div>
          </div>

          {/* Access notice */}
          {!isAuthenticated && !canStartExam && (
            <div className="rounded-xl p-4 mb-6 bg-red-50 border border-red-200">
              <div className="flex items-start gap-3">
                <Lock className="text-red-500 mt-0.5" size={20} />
                <div>
                  <p className="font-medium text-red-700">
                    Bepul urinish tugadi
                  </p>
                  <p className="text-sm text-red-600">
                    Davom etish uchun Telegram orqali kirish yoki Premium sotib oling
                  </p>
                </div>
              </div>
            </div>
          )}

          {!isAuthenticated && canStartExam && (
            <div className="rounded-xl p-4 mb-6 bg-blue-50 border border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="text-blue-500 mt-0.5" size={20} />
                <div>
                  <p className="font-medium text-blue-700">
                    1 ta bepul urinish mavjud
                  </p>
                  <p className="text-sm text-blue-600">
                    Ko'proq imtihon topshirish uchun Telegram orqali kiring
                  </p>
                </div>
              </div>
            </div>
          )}

          {isAuthenticated && !user?.isPremium && (
            <div className="rounded-xl p-4 mb-6 bg-green-50 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-0.5" size={20} />
                <div>
                  <p className="font-medium text-green-700">
                    Cheksiz imtihonlar
                  </p>
                  <p className="text-sm text-green-600">
                    Siz hisobingizga kirgansiz - cheksiz imtihon topshiring!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Question count selector */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-slate-500 font-medium">#</span>
              <span className="text-slate-700 font-medium">Savollar sonini tanlang</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setQuestionCount(20)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  questionCount === 20
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className={`text-2xl font-bold ${
                  questionCount === 20 ? 'text-teal-600' : 'text-slate-700'
                }`}>20</p>
                <p className="text-xs text-slate-500 uppercase">Savol</p>
              </button>
              <button
                onClick={() => setQuestionCount(50)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  questionCount === 50
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <p className={`text-2xl font-bold ${
                  questionCount === 50 ? 'text-teal-600' : 'text-slate-700'
                }`}>50</p>
                <p className="text-xs text-slate-500 uppercase">Savol</p>
              </button>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-green-700">
                <CheckCircle size={16} className="text-green-500" />
                Har bir savolga faqat bitta to'g'ri javob
              </li>
              <li className="flex items-center gap-2 text-green-700">
                <CheckCircle size={16} className="text-green-500" />
                Javoblarni oxirida tekshirishingiz mumkin
              </li>
              <li className="flex items-center gap-2 text-green-700">
                <CheckCircle size={16} className="text-green-500" />
                Vaqt tugashi bilan imtihon yakunlanadi
              </li>
            </ul>
          </div>

          {/* Start button */}
          <button
            onClick={handleStartExam}
            disabled={!canStartExam && !user?.isPremium}
            className="w-full btn-primary py-4 text-lg"
          >
            <Play size={20} />
            Imtihonni Boshlash
          </button>
        </div>
      </div>
    </div>
  )
}
