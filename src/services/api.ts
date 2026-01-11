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

// Get questions for a specific bilet
export const fetchBiletQuestions = async (biletId: number): Promise<Question[]> => {
  const token = getAuthToken()
  if (!token) {
    throw new Error('Avtorizatsiya talab qilinadi')
  }

  const response = await fetch(`${API_URL}/api/questions/bilet/${biletId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok) {
    try {
      const data = await response.json()
      throw new Error(data.message || 'Savollarni yuklashda xatolik')
    } catch (e) {
      throw new Error('Savollarni yuklashda xatolik')
    }
  }

  const data = await response.json()
  return data.questions
}

// Get random questions for exam (Pro only, or one free attempt)
export const fetchRandomQuestions = async (count: number, isFreeAttempt: boolean = false): Promise<Question[]> => {
  const token = getAuthToken()
  
  // If it's a free attempt, don't require token
  if (isFreeAttempt) {
    const response = await fetch(`${API_URL}/api/questions/random?count=${count}&isFreeAttempt=true`)
    
    if (!response.ok) {
      throw new Error('Savollarni yuklashda xatolik')
    }
    
    const data = await response.json()
    return data.questions
  }
  
  // For authenticated requests
  if (!token) {
    throw new Error('Avtorizatsiya talab qilinadi')
  }

  const response = await fetch(`${API_URL}/api/questions/random?count=${count}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok) {
    try {
      const data = await response.json()
      if (data.requiresSubscription) {
        throw new Error('Premium obuna kerak. Pro versiyaga o\'ting!')
      }
      throw new Error(data.message || 'Savollarni yuklashda xatolik')
    } catch (e) {
      throw new Error('Savollarni yuklashda xatolik')
    }
  }

  const data = await response.json()
  return data.questions
}
