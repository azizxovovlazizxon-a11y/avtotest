import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Question } from '../types'

interface AdminQuestion extends Question {
  createdAt: string
  updatedAt: string
}

interface Bilet {
  id: number
  name: string
  questionIds: number[] // Fixed questions for this bilet
  isActive: boolean
}

interface AdminStore {
  questions: AdminQuestion[]
  bilets: Bilet[]
  nextQuestionId: number
  
  // Question operations
  addQuestion: (question: Omit<AdminQuestion, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateQuestion: (id: number, updates: Partial<AdminQuestion>) => void
  deleteQuestion: (id: number) => void
  getQuestionById: (id: number) => AdminQuestion | undefined
  
  // Bilet operations
  updateBilet: (id: number, questionIds: number[]) => void
  getBiletQuestions: (biletId: number) => AdminQuestion[]
  
  // Exam operations
  getRandomQuestions: (count: number) => AdminQuestion[]
  getQuestionsForBilet: (biletId: number) => AdminQuestion[]
  
  // Bulk operations
  importQuestions: (questions: Omit<AdminQuestion, 'id' | 'createdAt' | 'updatedAt'>[]) => void
}

// Generate initial questions - starts empty, admin can add questions
const generateInitialQuestions = (): AdminQuestion[] => {
  return []
}

// Generate initial bilets
const generateInitialBilets = (): Bilet[] => {
  const bilets: Bilet[] = []
  for (let i = 1; i <= 40; i++) {
    const startId = (i - 1) * 25 + 1
    bilets.push({
      id: i,
      name: `Bilet #${i}`,
      questionIds: Array.from({ length: 20 }, (_, j) => startId + j), // First 20 questions of each bilet
      isActive: true,
    })
  }
  return bilets
}

export const useAdminStore = create<AdminStore>()(
  persist(
    (set, get) => ({
      questions: generateInitialQuestions(),
      bilets: generateInitialBilets(),
      nextQuestionId: 1001,

      addQuestion: (question) => {
        const id = get().nextQuestionId
        const now = new Date().toISOString()
        set((state) => ({
          questions: [
            ...state.questions,
            {
              ...question,
              id,
              createdAt: now,
              updatedAt: now,
            },
          ],
          nextQuestionId: id + 1,
        }))
      },

      updateQuestion: (id, updates) => {
        set((state) => ({
          questions: state.questions.map((q) =>
            q.id === id
              ? { ...q, ...updates, updatedAt: new Date().toISOString() }
              : q
          ),
        }))
      },

      deleteQuestion: (id) => {
        set((state) => ({
          questions: state.questions.filter((q) => q.id !== id),
          bilets: state.bilets.map((b) => ({
            ...b,
            questionIds: b.questionIds.filter((qId) => qId !== id),
          })),
        }))
      },

      getQuestionById: (id) => {
        return get().questions.find((q) => q.id === id)
      },

      updateBilet: (id, questionIds) => {
        set((state) => ({
          bilets: state.bilets.map((b) =>
            b.id === id ? { ...b, questionIds } : b
          ),
        }))
      },

      getBiletQuestions: (biletId) => {
        const { questions, bilets } = get()
        const bilet = bilets.find((b) => b.id === biletId)
        if (!bilet) return []
        return bilet.questionIds
          .map((qId) => questions.find((q) => q.id === qId))
          .filter((q): q is AdminQuestion => q !== undefined)
      },

      getRandomQuestions: (count) => {
        const { questions } = get()
        // Shuffle and pick random questions
        const shuffled = [...questions].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, count)
      },

      getQuestionsForBilet: (biletId) => {
        return get().getBiletQuestions(biletId)
      },

      importQuestions: (newQuestions) => {
        let nextId = get().nextQuestionId
        const now = new Date().toISOString()
        const questionsToAdd = newQuestions.map((q) => ({
          ...q,
          id: nextId++,
          createdAt: now,
          updatedAt: now,
        }))
        set((state) => ({
          questions: [...state.questions, ...questionsToAdd],
          nextQuestionId: nextId,
        }))
      },
    }),
    {
      name: 'avtotest-admin-storage',
    }
  )
)
