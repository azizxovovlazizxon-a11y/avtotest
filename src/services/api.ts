// API service for fetching questions and bilets
import type { Question } from '../types'

const API_URL = 'https://avtotest-8t98.onrender.com'

// Get auth token from localStorage
const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken')
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
    const data = await response.json()
    throw new Error(data.message || 'Savollarni yuklashda xatolik')
  }

  const data = await response.json()
  return data.questions
}

// Get random questions for exam (Pro only)
export const fetchRandomQuestions = async (count: number): Promise<Question[]> => {
  const token = getAuthToken()
  if (!token) {
    throw new Error('Avtorizatsiya talab qilinadi')
  }

  const response = await fetch(`${API_URL}/api/questions/random?count=${count}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if (!response.ok) {
    const data = await response.json()
    throw new Error(data.message || 'Savollarni yuklashda xatolik')
  }

  const data = await response.json()
  return data.questions
}
