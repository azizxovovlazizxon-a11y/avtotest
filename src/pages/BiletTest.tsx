import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useExamStore } from '../store/examStore'

export default function BiletTest() {
  const { biletId } = useParams()
  const navigate = useNavigate()
  const { currentSession, startExam } = useExamStore()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // If no session, start one
    if (!currentSession && biletId) {
      setLoading(true)
      setError(null)
      
      startExam('bilet', 20, parseInt(biletId))
        .then(() => {
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          setError(err.message || 'Biletni yuklashda xatolik')
        })
    }
  }, [biletId, currentSession, startExam])

  useEffect(() => {
    // Redirect to exam page
    if (currentSession && !loading) {
      navigate('/exam/bilet')
    }
  }, [currentSession, loading, navigate])

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">❌</div>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/biletlar')}
            className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          >
            Biletlarga qaytish
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600">Bilet yuklanmoqda...</p>
      </div>
    </div>
  )
}
