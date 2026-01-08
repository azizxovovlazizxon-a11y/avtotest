import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useExamStore } from '../store/examStore'

export default function BiletTest() {
  const { biletId } = useParams()
  const navigate = useNavigate()
  const { currentSession, startExam } = useExamStore()

  useEffect(() => {
    // If no session, start one
    if (!currentSession && biletId) {
      startExam('bilet', 20, parseInt(biletId))
    }
  }, [biletId, currentSession, startExam])

  useEffect(() => {
    // Redirect to exam page
    if (currentSession) {
      navigate('/exam/bilet')
    }
  }, [currentSession, navigate])

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-600">Bilet yuklanmoqda...</p>
      </div>
    </div>
  )
}
