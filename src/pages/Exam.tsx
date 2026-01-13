import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  AlertCircle,
  CheckCircle,
  XCircle,
  Flag,
  X
} from 'lucide-react'
import { useExamStore } from '../store/examStore'
import { YandexAdPlaceholder } from '../components/YandexAd'
import { fetchImageWithAuth } from '../services/api'

export default function Exam() {
  const { examType } = useParams<{ examType: string }>()
  const navigate = useNavigate()
  const { 
    currentSession, 
    answerQuestion, 
    nextQuestion, 
    previousQuestion,
    goToQuestion,
    finishExam,
    clearSession
  } = useExamStore()

  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [showExitModal, setShowExitModal] = useState(false)
  const [showFeedback, setShowFeedback] = useState<{
    isCorrect: boolean
    correctAnswer: number
  } | null>(null)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
  const [imageCache, setImageCache] = useState<Map<string, string>>(new Map())
  const [imageLoading, setImageLoading] = useState(false)
  const autoAdvanceTimer = useRef<number | null>(null)

  // Initialize timer for real exam
  useEffect(() => {
    if (currentSession?.timeLimit) {
      setTimeLeft(currentSession.timeLimit)
    }
  }, [currentSession?.timeLimit])

  const handleFinishExam = useCallback(() => {
    const result = finishExam()
    navigate('/exam-results', { state: { result } })
  }, [finishExam, navigate])

  // Timer countdown for real exam
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer)
          handleFinishExam()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, handleFinishExam])

  // No session - redirect
  if (!currentSession) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="mx-auto text-slate-400 mb-4" size={48} />
          <p className="text-slate-600 mb-4">Aktiv imtihon topilmadi</p>
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

  const { questions, currentQuestionIndex, answers } = currentSession
  const currentQuestion = questions[currentQuestionIndex]
  const selectedAnswer = answers.get(currentQuestion.id)
  const isRealExam = examType === 'real'

  // Load image with authentication when question changes
  useEffect(() => {
    if (currentQuestion.imageUrl && !imageCache.has(currentQuestion.imageUrl)) {
      const authToken = localStorage.getItem('authToken')
      
      // If no auth token, use original image path directly (no watermark)
      if (!authToken) {
        console.log('⚠️ No auth token, using original image')
        setImageCache(prev => new Map(prev).set(currentQuestion.imageUrl!, currentQuestion.imageUrl!))\n        return
      }
      
      console.log('🖼️ Loading image:', currentQuestion.imageUrl)
      
      setImageLoading(true)
      fetchImageWithAuth(currentQuestion.imageUrl)
        .then(blobUrl => {
          console.log('✅ Watermarked image loaded:', blobUrl)
          setImageCache(prev => new Map(prev).set(currentQuestion.imageUrl!, blobUrl))
          setImageLoading(false)
        })
        .catch(err => {
          console.error('❌ Failed to load watermarked image:', err)
          // Fallback to original image if watermarking fails
          setImageCache(prev => new Map(prev).set(currentQuestion.imageUrl!, currentQuestion.imageUrl!))
          setImageLoading(false)
        })
    } else if (currentQuestion.imageUrl) {
      console.log('📦 Using cached image for:', currentQuestion.imageUrl)
    }
  }, [currentQuestion.imageUrl, imageCache])

  // Get cached image URL - never use original directly
  const getImageSrc = (imageUrl: string | undefined) => {
    if (!imageUrl) return ''
    const cached = imageCache.get(imageUrl)
    // Return cached version or empty string if not loaded yet
    return cached || ''
  }

  // Restore or clear feedback when question changes
  useEffect(() => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current)
      autoAdvanceTimer.current = null
    }
    
    // If this question has been answered, restore feedback
    const answer = answers.get(currentQuestion.id)
    if (answer !== undefined) {
      const isCorrect = answer === currentQuestion.correctAnswer
      setShowFeedback({
        isCorrect,
        correctAnswer: currentQuestion.correctAnswer,
      })
    } else {
      setShowFeedback(null)
    }
  }, [currentQuestionIndex, currentQuestion, answers])

  // Keyboard navigation with arrow keys
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        // Next question
        if (currentQuestionIndex < questions.length - 1) {
          handleNext()
        }
      } else if (event.key === 'ArrowLeft') {
        // Previous question
        if (currentQuestionIndex > 0) {
          handlePrevious()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentQuestionIndex, questions.length])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswer = (answerIndex: number) => {
    // Prevent changing answer if already answered
    if (selectedAnswer !== undefined) {
      return
    }
    
    answerQuestion(currentQuestion.id, answerIndex)
    
    // Clear any existing auto-advance timer
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current)
      autoAdvanceTimer.current = null
    }
    
    // Show feedback for both standard and real exams
    const isCorrect = answerIndex === currentQuestion.correctAnswer
    setShowFeedback({
      isCorrect,
      correctAnswer: currentQuestion.correctAnswer,
    })
  }

  const handleNext = () => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current)
      autoAdvanceTimer.current = null
    }
    setShowFeedback(null)
    nextQuestion()
  }

  const handlePrevious = () => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current)
      autoAdvanceTimer.current = null
    }
    setShowFeedback(null)
    previousQuestion()
  }

  const handleExit = () => {
    clearSession()
    navigate('/')
  }

  const getQuestionStatus = (index: number) => {
    const question = questions[index]
    const answer = answers.get(question.id)
    
    if (index === currentQuestionIndex) return 'current'
    if (answer !== undefined) {
      const isCorrect = answer === question.correctAnswer
      return isCorrect ? 'correct' : 'incorrect'
    }
    return 'unanswered'
  }

  const answeredCount = answers.size
  const unansweredCount = questions.length - answeredCount

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex gap-4 max-w-[1600px] mx-auto">
        {/* Left Advertisement Sidebar */}
        <div className="hidden xl:block w-40 flex-shrink-0 pt-4">
          <div className="sticky top-4">
            <p className="text-xs text-slate-400 mb-2 text-center">Reklama</p>
            <div className="bg-white rounded-xl shadow-sm p-4">
              {/* <YandexAd blockId="R-A-XXXXXX-1" type="vertical" /> */}
              <YandexAdPlaceholder type="vertical" />
            </div>
          </div>
        </div>

        {/* Main Exam Content */}
        <div className="flex-1 min-w-0">
      {/* Full screen exam container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6">
        {/* Header card */}
        <div className="bg-white rounded-2xl shadow-sm mb-6">
          {/* Top header with close, title, and timer */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowExitModal(true)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={24} className="text-slate-600" />
              </button>
              <div>
                <h2 className="font-bold text-slate-800">
                  {examType === 'standard' && 'Standart Imtihon'}
                  {examType === 'real' && 'Real Imtihon'}
                  {examType === 'bilet' && `Bilet #${currentSession.biletId}`}
                </h2>
                <p className="text-sm text-slate-500">
                  Savol {currentQuestionIndex + 1} / {questions.length}
                </p>
              </div>
            </div>

            {/* Timer for real exam */}
            {isRealExam && timeLeft !== null && (
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                timeLeft < 60 
                  ? 'border-red-200 bg-red-50 text-red-600' 
                  : 'border-slate-200 bg-white text-slate-700'
              }`}>
                <Clock size={18} />
                <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
              </div>
            )}

            {/* Progress for standard exam */}
            {!isRealExam && (
              <div className="flex items-center gap-4 text-sm">
                <span className="text-emerald-600 font-medium">
                  ✓ {answeredCount} javob berildi
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-500">
                  {unansweredCount} qoldi
                </span>
              </div>
            )}
          </div>

          {/* Question numbers navigation */}
          <div className="p-4 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {questions.map((_, index) => {
                const status = getQuestionStatus(index)
                return (
                  <button
                    key={index}
                    onClick={() => goToQuestion(index)}
                    className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${
                      status === 'current'
                        ? 'bg-teal-500 text-white shadow-md'
                        : status === 'correct'
                        ? 'bg-emerald-500 text-white border border-emerald-600'
                        : status === 'incorrect'
                        ? 'bg-red-500 text-white border border-red-600'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>
            {/* Progress bar under numbers */}
            <div className="mt-3 h-1 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-teal-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          {/* Question image */}
          {currentQuestion.imageUrl && (
            <div className="mb-6 bg-slate-100 rounded-xl p-6 flex items-center justify-center relative">
              {imageLoading && !imageCache.has(currentQuestion.imageUrl) ? (
                <div className="flex flex-col items-center justify-center py-24">
                  <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-slate-500 text-sm">Rasm yuklanmoqda...</p>
                </div>
              ) : getImageSrc(currentQuestion.imageUrl) ? (
                <img 
                  src={getImageSrc(currentQuestion.imageUrl)} 
                  alt="Savol rasmi"
                  className="max-w-full max-h-96 rounded-lg object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setFullscreenImage(getImageSrc(currentQuestion.imageUrl!))}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="py-24 text-slate-400">
                  <p>Rasm yuklanmadi</p>
                </div>
              )}
            </div>
          )}

          {/* Question text */}
          <h3 className="text-lg font-medium text-slate-800 mb-6">
            {currentQuestionIndex + 1}. {currentQuestion.text}
          </h3>

          {/* Answer options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrectAnswer = showFeedback && index === showFeedback.correctAnswer
              const isWrongSelected = showFeedback && isSelected && !showFeedback.isCorrect
              const letter = String.fromCharCode(65 + index)

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== undefined}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    isCorrectAnswer
                      ? 'border-emerald-500 bg-emerald-50'
                      : isWrongSelected
                      ? 'border-red-500 bg-red-50'
                      : isSelected
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  } ${selectedAnswer !== undefined ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm flex-shrink-0 ${
                      isCorrectAnswer
                        ? 'bg-emerald-500 text-white'
                        : isWrongSelected
                        ? 'bg-red-500 text-white'
                        : isSelected
                        ? 'bg-teal-500 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {isCorrectAnswer ? (
                        <CheckCircle size={20} />
                      ) : isWrongSelected ? (
                        <XCircle size={20} />
                      ) : (
                        letter
                      )}
                    </span>
                    <span className={`text-base ${
                      isCorrectAnswer ? 'text-emerald-700 font-medium' :
                      isWrongSelected ? 'text-red-700' :
                      isSelected ? 'text-teal-700' : 'text-slate-700'
                    }`}>
                      {option}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Explanation box - only shown when answer is wrong */}
          {showFeedback && !showFeedback.isCorrect && currentQuestion.explanation && (
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle className="text-white" size={18} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 mb-2">Tushuntirish</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Feedback message for real exam */}
          {showFeedback && (
            <div className={`mt-6 p-4 rounded-xl ${
              showFeedback.isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center gap-2">
                {showFeedback.isCorrect ? (
                  <>
                    <CheckCircle className="text-emerald-500" size={20} />
                    <span className="font-medium text-emerald-700">To'g'ri javob!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-500" size={20} />
                    <span className="font-medium text-red-700">Noto'g'ri javob</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              currentQuestionIndex === 0
                ? 'text-slate-400 cursor-not-allowed'
                : 'text-slate-600 hover:bg-white hover:shadow-sm'
            }`}
          >
            <ChevronLeft size={20} />
            Oldingi
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleFinishExam}
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-md"
            >
              <Flag size={18} />
              Yakunlash
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-md"
            >
              Keyingi
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Exit Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full animate-fadeIn">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Imtihonni tark etmoqchimisiz?
            </h3>
            <p className="text-slate-600 mb-6">
              Agar hozir chiqsangiz, javoblaringiz saqlanmaydi va urinish ishlatilib bo'lingan deb hisoblanadi.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 rounded-xl transition-colors"
              >
                Davom etish
              </button>
              <button
                onClick={handleExit}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl transition-colors"
              >
                Chiqish
              </button>
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Right Advertisement Sidebar */}
      <div className="hidden xl:block w-40 flex-shrink-0 pt-4">
        <div className="sticky top-4">
          <p className="text-xs text-slate-400 mb-2 text-center">Reklama</p>
          <div className="bg-white rounded-xl shadow-sm p-4">
            {/* <YandexAd blockId="R-A-XXXXXX-2" type="vertical" /> */}
            <YandexAdPlaceholder type="vertical" />
          </div>
        </div>
      </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-colors z-10"
            aria-label="Yopish"
          >
            <X size={24} className="text-white" />
          </button>
          
          {/* Image */}
          <img
            src={fullscreenImage}
            alt="To'liq ekranda rasm"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
