import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ExamResult, ExamSession, Question } from '../types'
import { fetchBiletQuestions, fetchRandomQuestions } from '../services/api'

interface ExamState {
  currentSession: ExamSession | null
  examHistory: ExamResult[]
  startExam: (examType: 'standard' | 'real' | 'bilet', questionCount: number, biletId?: number) => Promise<void>
  answerQuestion: (questionId: number, answer: number) => void
  nextQuestion: () => void
  previousQuestion: () => void
  goToQuestion: (index: number) => void
  finishExam: () => ExamResult
  clearSession: () => void
  getStatistics: () => {
    totalExams: number
    passedExams: number
    failedExams: number
    averageScore: number
    bestScore: number
    passRate: number
  }
  getBiletStatistics: () => Map<number, { attempts: number; lastScore: number; passed: boolean }>
}

export const useExamStore = create<ExamState>()(
  persist(
    (set, get) => ({
      currentSession: null,
      examHistory: [],

      startExam: async (examType, questionCount, biletId) => {
        try {
          let questions: Question[]
          
          if (examType === 'bilet' && biletId !== undefined) {
            // For bilet exams: fetch questions from API
            questions = await fetchBiletQuestions(biletId)
          } else {
            // For standard and real exams: fetch random questions
            questions = await fetchRandomQuestions(questionCount)
          }

          const session: ExamSession = {
            examType,
            biletId,
            questions,
            currentQuestionIndex: 0,
            answers: new Map(),
            startTime: new Date(),
            timeLimit: examType === 'real' ? 20 * 60 : undefined, // 20 minutes for real exam
            questionCount,
          }

          set({ currentSession: session })
        } catch (error) {
          console.error('Error starting exam:', error)
          throw error
        }
      },

      answerQuestion: (questionId, answer) => {
        const { currentSession } = get()
        if (currentSession) {
          const newAnswers = new Map(currentSession.answers)
          newAnswers.set(questionId, answer)
          set({
            currentSession: {
              ...currentSession,
              answers: newAnswers,
            },
          })
        }
      },

      nextQuestion: () => {
        const { currentSession } = get()
        if (currentSession && currentSession.currentQuestionIndex < currentSession.questions.length - 1) {
          set({
            currentSession: {
              ...currentSession,
              currentQuestionIndex: currentSession.currentQuestionIndex + 1,
            },
          })
        }
      },

      previousQuestion: () => {
        const { currentSession } = get()
        if (currentSession && currentSession.currentQuestionIndex > 0) {
          set({
            currentSession: {
              ...currentSession,
              currentQuestionIndex: currentSession.currentQuestionIndex - 1,
            },
          })
        }
      },

      goToQuestion: (index) => {
        const { currentSession } = get()
        if (currentSession && index >= 0 && index < currentSession.questions.length) {
          set({
            currentSession: {
              ...currentSession,
              currentQuestionIndex: index,
            },
          })
        }
      },

      finishExam: () => {
        const { currentSession, examHistory } = get()
        if (!currentSession) {
          throw new Error('Aktiv imtihon topilmadi')
        }

        const { questions, answers, startTime, examType, biletId } = currentSession
        const timeTaken = Math.floor((new Date().getTime() - new Date(startTime).getTime()) / 1000)

        let correctAnswers = 0
        const answerDetails: ExamResult['answers'] = []

        questions.forEach((question) => {
          const selectedAnswer = answers.get(question.id)
          const isCorrect = selectedAnswer === question.correctAnswer
          if (isCorrect) correctAnswers++

          answerDetails.push({
            questionId: question.id,
            selectedAnswer: selectedAnswer ?? -1,
            isCorrect,
          })
        })

        const percentage = Math.round((correctAnswers / questions.length) * 100)
        const passed = percentage >= 80

        const result: ExamResult = {
          id: Date.now().toString(),
          examType,
          biletId,
          totalQuestions: questions.length,
          correctAnswers,
          wrongAnswers: questions.length - correctAnswers,
          percentage,
          passed,
          timeTaken,
          completedAt: new Date().toISOString(),
          answers: answerDetails,
        }

        set({
          examHistory: [result, ...examHistory],
          currentSession: null,
        })

        return result
      },

      clearSession: () => {
        set({ currentSession: null })
      },

      getStatistics: () => {
        const { examHistory } = get()
        
        if (examHistory.length === 0) {
          return {
            totalExams: 0,
            passedExams: 0,
            failedExams: 0,
            averageScore: 0,
            bestScore: 0,
            passRate: 0,
          }
        }

        const totalExams = examHistory.length
        const passedExams = examHistory.filter((e) => e.passed).length
        const failedExams = totalExams - passedExams
        const averageScore = Math.round(
          examHistory.reduce((sum, e) => sum + e.percentage, 0) / totalExams
        )
        const bestScore = Math.max(...examHistory.map((e) => e.percentage))
        const passRate = Math.round((passedExams / totalExams) * 100)

        return {
          totalExams,
          passedExams,
          failedExams,
          averageScore,
          bestScore,
          passRate,
        }
      },

      getBiletStatistics: () => {
        const { examHistory } = get()
        const biletStats = new Map<number, { attempts: number; lastScore: number; passed: boolean }>()

        examHistory
          .filter((e) => e.examType === 'bilet' && e.biletId !== undefined)
          .forEach((exam) => {
            const biletId = exam.biletId!
            const existing = biletStats.get(biletId)

            if (!existing) {
              biletStats.set(biletId, {
                attempts: 1,
                lastScore: exam.percentage,
                passed: exam.passed,
              })
            } else {
              biletStats.set(biletId, {
                attempts: existing.attempts + 1,
                lastScore: exam.percentage,
                passed: existing.passed || exam.passed,
              })
            }
          })

        return biletStats
      },
    }),
    {
      name: 'avtotest-exam',
      partialize: (state) => ({ examHistory: state.examHistory }),
    }
  )
)
