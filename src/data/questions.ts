import type { Question } from '../types'

// Traffic rules categories for generating questions
const categories = [
  'Yo\'l belgilari',
  'Yo\'l chiziqlari',
  'Svetofor',
  'Tartibga soluvchi ishoralari',
  'Yo\'l harakati qoidalari',
  'Haydovchi majburiyatlari',
  'Piyodalar harakati',
  'Transport vositalari',
  'Yo\'ldan o\'tish tartibi',
  'Tezlik cheklovi',
]

// Generate sample questions
function generateQuestions(): Question[] {
  const questions: Question[] = []
  let questionId = 1

  // Generate 1000 questions (40 bilets x 20 questions each, plus additional)
  for (let biletId = 1; biletId <= 40; biletId++) {
    for (let q = 1; q <= 25; q++) {
      const category = categories[Math.floor(Math.random() * categories.length)]
      const hasImage = Math.random() > 0.5 // 50% questions have images

      const question: Question = {
        id: questionId,
        biletId,
        text: getQuestionText(questionId, category),
        imageUrl: hasImage ? `/images/questions/q${(questionId % 50) + 1}.svg` : undefined,
        options: getOptions(questionId, category),
        correctAnswer: Math.floor(Math.random() * 4),
        explanation: `Bu savol "${category}" bo'limiga tegishli. To'g'ri javob: ${getOptions(questionId, category)[Math.floor(Math.random() * 4)]}`,
      }

      questions.push(question)
      questionId++
    }
  }

  return questions
}

function getQuestionText(id: number, _category: string): string {
  const questionTemplates = [
    // Yo'l belgilari
    `Quyidagi yo'l belgisi nimani anglatadi?`,
    `Bu ogohlantiruvchi belgi qanday ma'noga ega?`,
    `Taqiqlovchi belgi qaysi holatda qo'llaniladi?`,
    `Majburiy yo'nalish belgisi nimani ko'rsatadi?`,
    `Axborot belgisi qanday ma'lumot beradi?`,
    
    // Svetofor
    `Svetoforning qizil chirog'i yonganida haydovchi nima qilishi kerak?`,
    `Sariq chiroq nimani anglatadi?`,
    `Yashil strelka bilan svetofor qanday ishlaydi?`,
    `Piyodalar svetofori qaysi holatda yonadi?`,
    
    // Yo'l harakati
    `Kesishmalarda o'tish huquqi kimga beriladi?`,
    `Qaysi transport vositasiga yo'l beriladi?`,
    `Aylanma harakatda qanday tartib amal qiladi?`,
    `Qarama-qarshi transport oqimida kim birinchi o'tadi?`,
    
    // Tezlik
    `Shahar ichida ruxsat etilgan maksimal tezlik qancha?`,
    `Shahar tashqarisida tezlik cheklovi qanday?`,
    `Avtomagistralda ruxsat etilgan tezlik qancha?`,
    
    // Piyodalar
    `Piyoda o'tish joyida haydovchi qanday harakat qiladi?`,
    `Piyodalar qachon yo'ldan o'tishi mumkin?`,
    `Bolalar bilan yo'ldan o'tish qoidalari qanday?`,
    
    // Haydovchi
    `Haydovchilik guvohnomasisiz haydash jazosi qanday?`,
    `Ichimlik ichgan holda haydash taqiqlangan, chunki...`,
    `Haydovchi hujjatlarni qachon ko'rsatishi shart?`,
    
    // Transport vositalari
    `Texnik ko'rik muddati qancha?`,
    `Sug'urta polisi nima uchun kerak?`,
    `Transport vositasini ro'yxatdan o'tkazish tartibi qanday?`,
    
    // Xavfsizlik
    `Kamar taqish majburiy bo'lgan holatlar?`,
    `Bolalar o'rindig'i qachon ishlatiladi?`,
    `Favqulodda to'xtashda nima qilish kerak?`,
  ]

  return questionTemplates[id % questionTemplates.length]
}

function getOptions(id: number, _category: string): string[] {
  const optionSets = [
    // General options
    [
      "To'g'ri harakatni davom ettirish mumkin",
      "Harakat to'xtatiladi va kutiladi",
      "Ehtiyotkorlik bilan davom etish lozim",
      "Tezlikni oshirish tavsiya etiladi"
    ],
    [
      "Ha, ruxsat etilgan",
      "Yo'q, taqiqlangan",
      "Faqat kunduzi ruxsat etilgan",
      "Faqat tunda ruxsat etilgan"
    ],
    [
      "60 km/soat",
      "40 km/soat",
      "90 km/soat",
      "110 km/soat"
    ],
    [
      "Yo'l beriladi",
      "O'tib ketiladi",
      "To'xtaladi va kutiladi",
      "Signal beriladi"
    ],
    [
      "O'ng tomonga burish",
      "Chap tomonga burish",
      "To'g'ri harakatlanish",
      "Orqaga qaytish"
    ],
    [
      "Haydovchiga",
      "Piyodaga",
      "Velosipedchiga",
      "Barchaga teng"
    ],
    [
      "Ogohlantirish belgisi",
      "Taqiqlovchi belgi",
      "Axborot belgisi",
      "Majburiy belgi"
    ],
    [
      "Jarima solinadi",
      "Ogohlantiriladi",
      "Guvohnoma olib qo'yiladi",
      "Qamaladi"
    ],
    [
      "3 metr",
      "5 metr",
      "10 metr",
      "15 metr"
    ],
    [
      "Har doim",
      "Faqat shahar ichida",
      "Faqat magistrallarda",
      "Hech qachon"
    ]
  ]

  return optionSets[id % optionSets.length]
}

// All questions
const allQuestions = generateQuestions()

// Get random questions for exam
export function getQuestions(count: number): Question[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Get questions by bilet
export function getQuestionsByBilet(biletId: number): Question[] {
  return allQuestions.filter((q) => q.biletId === biletId).slice(0, 20)
}

// Get all questions
export function getAllQuestions(): Question[] {
  return allQuestions
}

// Get bilet info
export function getBiletInfo() {
  const bilets = []
  for (let i = 1; i <= 40; i++) {
    bilets.push({
      id: i,
      questionsCount: 20,
      isFree: i <= 6, // First 6 bilets are free
    })
  }
  return bilets
}

export default allQuestions
