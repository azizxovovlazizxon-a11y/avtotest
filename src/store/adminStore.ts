import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Question } from '../types'

// Total bilets count (not from local file since it's truncated for security)
const TOTAL_BILETS = 111
const QUESTIONS_PER_BILET = 10

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
  
  // Load questions from server
  loadQuestionsFromServer: () => Promise<void>
  isLoading: boolean
}

// Generate initial questions - empty, will be loaded from API
const generateInitialQuestions = (): AdminQuestion[] => {
  // Questions will be fetched from server API
  // This is just a placeholder - admin should fetch from /api/admin/questions
  return []
}

// Generate initial bilets based on real data (111 bilets, 10 questions each)
const generateInitialBilets = (): Bilet[] => {
  const bilets: Bilet[] = []
  for (let i = 1; i <= TOTAL_BILETS; i++) {
    // Each bilet has 10 questions
    const startId = (i - 1) * QUESTIONS_PER_BILET + 1
    bilets.push({
      id: i,
      name: `Bilet #${i}`,
      questionIds: Array.from({ length: QUESTIONS_PER_BILET }, (_, j) => startId + j),
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

      // Load questions from server API
      loadQuestionsFromServer: async () => {
        set({ isLoading: true })
        try {
          const adminToken = localStorage.getItem('adminToken')
          const response = await fetch('https://avtotest-8t98.onrender.com/api/admin/questions', {
            headers: {
              'Authorization': `Bearer ${adminToken}`
            }
          })
          
          if (response.ok) {
            const data = await response.json()
            const now = new Date().toISOString()
            const questions = data.questions.map((q: Question) => ({
              ...q,
              createdAt: now,
              updatedAt: now,
            }))
            set({ 
              questions,
              isLoading: false,
              nextQuestionId: Math.max(...questions.map((q: AdminQuestion) => q.id)) + 1
            })
            console.log(`✅ Loaded ${questions.length} questions from server`)
          } else {
            console.error('Failed to load questions from server')
            set({ isLoading: false })
          }
        } catch (error) {
          console.error('Error loading questions:', error)
          set({ isLoading: false })
        }
      },

      isLoading: false,
    }),
    {
      name: 'avtotest-admin-storage',
      version: 3, // Increment version to force reload from API
      migrate: (persistedState: unknown, version: number) => {
        // Force reload from API on version change
        if (version < 3) {
          return {
            questions: [],
            bilets: generateInitialBilets(),
            nextQuestionId: 2000,
            isLoading: false,
          }
        }
        return persistedState as AdminStore
      },
    }
  )
)
