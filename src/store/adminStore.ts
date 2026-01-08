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

// Generate initial 1000 questions
const generateInitialQuestions = (): AdminQuestion[] => {
  const categories = [
    'Yo\'l belgilari',
    'Yo\'l harakati qoidalari',
    'Texnik xizmat',
    'Tibbiy yordam',
    'Jarimalar',
    'Haydovchi majburiyatlari',
    'Yo\'l chiziqlari',
    'Svetofor signallari',
  ]

  const sampleQuestions = [
    { q: 'Avtomagistralda ruxsat etilgan tezlik qancha?', answers: ['110 km/soat', '90 km/soat', '130 km/soat', '100 km/soat'], correct: 0, explanation: 'O\'zbekiston Respublikasida avtomagistrallarda maksimal tezlik chegarasi 110 km/soat ga teng. Bu xavfsizlik chorasi bo\'lib, yo\'l hodisalarining oldini olish uchun belgilangan.' },
    { q: 'Qaysi hollarda haydovchi transport vositasini to\'xtatishi shart?', answers: ['Svetofor qizil signal berganda', 'Yo\'lovchi o\'tayotganda', 'Barchasi to\'g\'ri', 'Tartibga soluvchi to\'xtatganda'], correct: 2, explanation: 'Haydovchi quyidagi barcha holatlarda majburiy ravishda to\'xtashi kerak: svetofor qizil signal berganda, piyodalar o\'tayotganda va tartibga soluvchi xodim to\'xtatganda. Xavfsizlik uchun har bir holatni e\'tiborga olish zarur.' },
    { q: 'Piyodalar o\'tish joyida haydovchi nima qilishi kerak?', answers: ['Tezlikni kamaytirish', 'Signal berish', 'Piyodalarga yo\'l berish', 'Tezroq o\'tib ketish'], correct: 2, explanation: 'Piyodalar o\'tish joyida haydovchi albatta piyodalarga yo\'l berishi shart. Bu yo\'l harakati qoidalarining asosiy talablaridan biri bo\'lib, piyodalar xavfsizligini ta\'minlaydi. Tezlikni kamaytirish yoki signal berish yetarli emas.' },
    { q: 'Qaysi belgi asosiy yo\'lni ko\'rsatadi?', answers: ['Sariq romb', 'Qizil uchburchak', 'Ko\'k doira', 'Oq kvadrat'], correct: 0, explanation: 'Sariq romb shaklidagi belgi asosiy yo\'lni bildiradi. Ushbu belgiga ega yo\'lda harakatlanayotgan transport vositalari ustunlikka ega. Qizil uchburchak "Yo\'l bering" belgisi hisoblanadi.' },
    { q: 'Aylanma harakatda kim ustunlikka ega?', answers: ['Aylanmadagi transport', 'Kirayotgan transport', 'O\'ng tomondagi', 'Chap tomondagi'], correct: 0, explanation: 'Aylanma harakatda allaqachon aylanmada harakatlanayotgan transport vositalari har doim ustunlikka ega. Aylanmaga kirayotgan haydovchilar kutishi va yo\'l berishilari shart. Bu avariyalarning oldini olish uchun muhim qoidadir.' },
    { q: 'Tuman paytida qaysi chiroqlardan foydalaniladi?', answers: ['Tuman chiroqlari', 'Yaqin yorug\'lik', 'Uzoq yorug\'lik', 'Avarika signali'], correct: 0, explanation: 'Tuman sharoitida maxsus tuman chiroqlaridan foydalanish tavsiya etiladi. Tuman chiroqlari past o\'rnatilgan bo\'lib, yo\'lni yaxshiroq yoritadi. Uzoq yorug\'lik tumanda qaytib ko\'zni qamashtirib, ko\'rinishni yanada yomonlashtiradi.' },
    { q: 'Yo\'l-transport hodisasida nima qilish kerak?', answers: ['Voqea joyidan ketish', 'YHX ni chaqirish', 'Davom etish', 'Guvohlarni izlash'], correct: 1, explanation: 'Yo\'l-transport hodisasi sodir bo\'lganda darhol Yo\'l Harakati Xavfsizligi (YHX) xizmatini chaqirish shart. Voqea joyini tark etish, qochish yoki davom etish jinoyat hisoblanadi va qattiq jazo tortiladi. Birinchi navbatda YHX ga xabar bering.' },
    { q: 'Qaysi hollarda qo\'l signali beriladi?', answers: ['Burilish chiroqlari ishlamasa', 'Har doim', 'Tunda', 'Shaharda'], correct: 0, explanation: 'Qo\'l signali asosan burilish chiroqlari ishlamay qolganda beriladi. Bunday holatlarda haydovchi qo\'li bilan yo\'nalish ko\'rsatishi shart. Qo\'l signali yorug\'lik signallarini to\'liq almashtiradi va boshqa haydovchilarga sizning niyatingizni bildiradi.' },
    { q: 'Bolalar tashuvchi avtobus to\'xtaganda nima qilish kerak?', answers: ['Signal berish', 'Ehtiyotkorlik bilan o\'tish', 'To\'xtash va kutish', 'Tezroq o\'tish'], correct: 2, explanation: 'Bolalar tashuvchi maktab avtobusi to\'xtaganda, barcha transport vositalari albatta to\'xtashi va bolalar xavfsiz tarzda yo\'lni kesib o\'tguncha kutishi shart. Bu bolalar xavfsizligi uchun juda muhim qoida bo\'lib, uni buzish og\'ir jazo tortadi.' },
    { q: 'Haydovchilik guvohnomasisiz transport boshqarish jazosi qanday?', answers: ['Jarima', 'Qamoq', 'Transport musodara', 'Ogohlantiruish'], correct: 0, explanation: 'Haydovchilik guvohnomasisiz transport vositasini boshqarish uchun ma\'muriy jarima to\'lanadi. Takroran bunday holat qayd etilsa, jarima miqdori oshiriladi va transport vositasi hibsga olinishi mumkin. Har doim guvohnomangizni olib yuring!' },
  ]

  const questions: AdminQuestion[] = []
  let id = 1

  // Generate 1000 questions (100 variations of 10 base questions across categories)
  for (let bilet = 1; bilet <= 40; bilet++) {
    for (let q = 0; q < 25; q++) {
      const baseQ = sampleQuestions[q % sampleQuestions.length]
      const category = categories[(bilet + q) % categories.length]
      
      questions.push({
        id: id,
        text: `${baseQ.q} (Bilet ${bilet}, Savol ${q + 1})`,
        options: [...baseQ.answers],
        correctAnswer: baseQ.correct,
        category: category,
        imageUrl: undefined,
        explanation: baseQ.explanation,
        biletId: bilet,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      id++
    }
  }

  return questions
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
