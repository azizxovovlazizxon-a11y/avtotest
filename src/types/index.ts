export interface User {
  id: string
  name: string
  email: string
  isPremium: boolean
  premiumExpiresAt?: string
  proExpiresAt?: string | null
  freeStandardAttempts: number
  freeRealAttempts: number
  createdAt: string
}

export interface Question {
  id: number
  biletId?: number
  text: string
  imageUrl?: string
  options: string[]
  correctAnswer: number
  explanation?: string
  category?: string
}

export interface ExamResult {
  id: string
  examType: 'standard' | 'real' | 'bilet'
  biletId?: number
  totalQuestions: number
  correctAnswers: number
  wrongAnswers: number
  percentage: number
  passed: boolean
  timeTaken: number
  completedAt: string
  answers: {
    questionId: number
    selectedAnswer: number
    isCorrect: boolean
  }[]
}

export interface ExamSession {
  examType: 'standard' | 'real' | 'bilet'
  biletId?: number
  questions: Question[]
  currentQuestionIndex: number
  answers: Map<number, number>
  startTime: Date
  timeLimit?: number
  questionCount: number
}

export interface BiletInfo {
  id: number
  questionsCount: number
  attemptCount: number
  lastScore?: number
  isPassed: boolean
  isFree: boolean
}

export interface SubscriptionPlan {
  id: string
  name: string
  duration: number
  price: number
  features: string[]
  isPopular?: boolean
  discount?: number
}
