import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Question } from '../types'
import { questions as realQuestions, getTotalBilets } from '../data/questions'

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

// Generate initial questions from real extracted data
const generateInitialQuestions = (): AdminQuestion[] => {
  const now = new Date().toISOString()
  return realQuestions.map(q => ({
    ...q,
    createdAt: now,
    updatedAt: now,
  }))
}

// Generate initial bilets based on real data (111 bilets, 10 questions each)
const generateInitialBilets = (): Bilet[] => {
  const bilets: Bilet[] = []
  const totalBilets = getTotalBilets()
  for (let i = 1; i <= totalBilets; i++) {
    // Each bilet has 10 questions
    const startId = (i - 1) * 10 + 1
    bilets.push({
      id: i,
      name: `Bilet #${i}`,
      questionIds: Array.from({ length: 10 }, (_, j) => startId + j),
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
      nextQuestionId: 2000, // Start after existing questions (1110 total)

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
      version: 2, // Increment version to force localStorage reset with real questions
      migrate: (persistedState: unknown, version: number) => {
        // If old version, discard old data and use fresh real questions
        if (version < 2) {
          return {
            questions: generateInitialQuestions(),
            bilets: generateInitialBilets(),
            nextQuestionId: 2000,
          }
        }
        return persistedState as AdminStore
      },
    }
  )
)
