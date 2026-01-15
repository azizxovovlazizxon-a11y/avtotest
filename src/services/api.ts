// API service for fetching questions and bilets
import type { Question } from '../types'

const API_URL = 'https://avtotest-8t98.onrender.com'

// Get auth token from localStorage
const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken')
}

// Get image URL with authentication
export const getImageUrl = (imageUrl: string): string => {
  // Extract filename from path like "/images/questions/i1_1.webp"
  const filename = imageUrl.split('/').pop()
  if (!filename) return imageUrl
  
  const token = getAuthToken()
  if (!token) return imageUrl
  
  // Return authenticated image URL
  return `${API_URL}/api/images/${filename}`
}

// Fetch image with authentication (returns blob URL)
export const fetchImageWithAuth = async (imageUrl: string): Promise<string> => {
  const token = getAuthToken()
  if (!token) {
    throw new Error('Avtorizatsiya talab qilinadi')
  }
  
  const filename = imageUrl.split('/').pop()
  if (!filename) {
    throw new Error('Noto\'g\'ri rasm URL')
  }
  
  const response = await fetch(`${API_URL}/api/images/${filename}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  
  if (!response.ok) {
    throw new Error('Rasmni yuklashda xatolik')
  }
  
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}

// Get bilet information
export const fetchBiletInfo = async () => {
  const token = getAuthToken()
  if (!token) {
    throw new Error('Avtorizatsiya talab qilinadi')
  }

  const response = await fetch(`${API_URL}/api/questions/bilets`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error('Biletlarni yuklashda xatolik')
  }

  const data = await response.json()
  return data.bilets
}

// Cache for premium bilet questions (24 hours)
const CACHE_KEY = 'bilet_questions_cache'
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

interface CacheEntry {
  questions: Question[]
  timestamp: number
}

// Get questions for a specific bilet (with caching)
export const fetchBiletQuestions = async (biletId: number): Promise<Question[]> => {
  const token = getAuthToken()
  if (!token) {
    throw new Error('Avtorizatsiya talab qilinadi')
  }

  // Check cache first
  const cacheKey = `${CACHE_KEY}_${biletId}`
  try {
    const cached = localStorage.getItem(cacheKey)
    if (cached) {
      const entry: CacheEntry = JSON.parse(cached)
      if (Date.now() - entry.timestamp < CACHE_DURATION) {
        console.log(`✅ Using cached questions for bilet ${biletId}`)
        return entry.questions
      }
    }
  } catch (e) {
    // Cache read failed, continue with API call
  }

  const response = await fetch(`${API_URL}/api/questions/bilet/${biletId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok) {
    console.error(`❌ Bilet ${biletId} fetch failed:`, response.status, response.statusText)
    let errorMessage = 'Savollarni yuklashda xatolik'
    try {
      const data = await response.json()
      errorMessage = data.message || errorMessage
    } catch (e) {
      // JSON parse failed, use default message
    }
    throw new Error(errorMessage)
  }

  const data = await response.json()
  const questions = data.questions

  // Save to cache
  try {
    localStorage.setItem(cacheKey, JSON.stringify({
      questions,
      timestamp: Date.now()
    }))
    console.log(`💾 Cached questions for bilet ${biletId}`)
  } catch (e) {
    // Cache write failed (storage full), ignore
  }

  return questions
}

// Get random questions for exam (no auth needed for random questions)
export const fetchRandomQuestions = async (count: number): Promise<Question[]> => {
  const response = await fetch(`${API_URL}/api/questions/random?count=${count}`)
  
  if (!response.ok) {
    throw new Error('Savollarni yuklashda xatolik')
  }
  
  const data = await response.json()
  return data.questions
}
