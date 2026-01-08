import { BarChart3, Calendar, CheckCircle, XCircle, TrendingUp, Award, Activity } from 'lucide-react'
import { useExamStore } from '../store/examStore'

export default function TarixStatistika() {
  const { examHistory, getStatistics } = useExamStore()
  const stats = getStatistics()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('uz-UZ', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getExamTypeName = (type: string) => {
    switch (type) {
      case 'standard':
        return 'Standart Imtihon'
      case 'real':
        return 'Real Imtihon'
      case 'bilet':
        return 'Bilet'
      default:
        return type
    }
  }

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <BarChart3 className="text-slate-700" size={28} />
        <h1 className="text-3xl font-bold text-slate-800">Tarix va Statistika</h1>
      </div>
      <p className="text-slate-500 mb-6">
        Imtihon natijalaringiz va o'sish dinamikangiz
      </p>

      {/* Statistics cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Jami imtihonlar</p>
            <Calendar className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{stats.totalExams}</p>
          <p className="text-xs text-slate-500">Barcha topshirilgan imtihonlar</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Muvaffaqiyatli</p>
            <CheckCircle className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-emerald-600">{stats.passedExams}</p>
          <p className="text-xs text-slate-500">O'tgan imtihonlar</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Muvaffaqiyatsiz</p>
            <XCircle className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-red-500">{stats.failedExams}</p>
          <p className="text-xs text-slate-500">O'ta olmagan imtihonlar</p>
        </div>
      </div>

      {/* More stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">O'rtacha ball</p>
            <TrendingUp className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-slate-800">{stats.averageScore}%</p>
          <p className="text-xs text-slate-500">O'rtacha natija</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">Eng yaxshi</p>
            <Award className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-amber-500">{stats.bestScore}%</p>
          <p className="text-xs text-slate-500">Eng yuqori natija</p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <p className="text-sm text-slate-600">O'tish foizi</p>
            <Activity className="text-slate-400" size={20} />
          </div>
          <p className="text-3xl font-bold text-teal-500">{stats.passRate}%</p>
          <p className="text-xs text-slate-500">Muvaffaqiyat ko'rsatkichi</p>
        </div>
      </div>

      {/* History table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800">Imtihonlar Tarixi</h2>
        </div>

        {examHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left text-sm font-medium text-slate-600 px-5 py-3">Imtihon turi</th>
                  <th className="text-left text-sm font-medium text-slate-600 px-5 py-3">Sana</th>
                  <th className="text-left text-sm font-medium text-slate-600 px-5 py-3">Savollar</th>
                  <th className="text-left text-sm font-medium text-slate-600 px-5 py-3">To'g'ri</th>
                  <th className="text-left text-sm font-medium text-slate-600 px-5 py-3">Noto'g'ri</th>
                  <th className="text-left text-sm font-medium text-slate-600 px-5 py-3">Ball</th>
                  <th className="text-left text-sm font-medium text-slate-600 px-5 py-3">Vaqt</th>
                  <th className="text-left text-sm font-medium text-slate-600 px-5 py-3">Natija</th>
                </tr>
              </thead>
              <tbody>
                {examHistory.map((exam) => (
                  <tr key={exam.id} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <span className="font-medium text-slate-800">
                        {getExamTypeName(exam.examType)}
                        {exam.biletId && ` #${exam.biletId}`}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{formatDate(exam.completedAt)}</td>
                    <td className="px-5 py-4 text-slate-600">{exam.totalQuestions}</td>
                    <td className="px-5 py-4 text-emerald-600 font-medium">{exam.correctAnswers}</td>
                    <td className="px-5 py-4 text-red-500 font-medium">{exam.wrongAnswers}</td>
                    <td className="px-5 py-4">
                      <span className={`font-bold ${
                        exam.percentage >= 80 ? 'text-emerald-600' : 'text-red-500'
                      }`}>
                        {exam.percentage}%
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{formatTime(exam.timeTaken)}</td>
                    <td className="px-5 py-4">
                      {exam.passed ? (
                        <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
                          <CheckCircle size={14} />
                          O'tdi
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-red-500 bg-red-50 px-3 py-1 rounded-full text-sm font-medium">
                          <XCircle size={14} />
                          O'tmadi
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center">
            <BarChart3 className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-500">Hali imtihon topshirmadingiz</p>
            <p className="text-slate-400 text-sm mt-1">
              Birinchi imtihonni topshirib, natijalaringizni ko'ring
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
