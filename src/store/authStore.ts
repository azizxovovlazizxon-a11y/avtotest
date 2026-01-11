import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../types'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isAdmin: boolean
  freeAttemptsUsed: number
  verifyOTP: (otp: string) => Promise<void>
  logout: () => void
  adminLogin: (password: string) => Promise<void>
  adminLogout: () => void
  updateUser: (user: Partial<User>) => void
  incrementFreeAttempt: () => void
  canTakeExam: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isAdmin: false,
      freeAttemptsUsed: 0,

      verifyOTP: async (otp: string) => {
        try {
          const response = await axios.post(`${API_URL}/auth/verify-otp`, { otp })
          
          if (response.data.success) {
            const { token, user: userData } = response.data
            
            const user: User = {
              id: userData.id,
              name: userData.name,
              email: userData.phone,
              isPremium: false,
              freeStandardAttempts: 1,
              freeRealAttempts: 1,
              createdAt: new Date().toISOString(),
            }
            
            // Save token to localStorage for API requests
            localStorage.setItem('authToken', token)
            
            set({ 
              user, 
              token, 
              isAuthenticated: true,
              freeAttemptsUsed: 0
            })
          }
        } catch (error: any) {
          throw new Error(error.response?.data?.message || 'Xatolik yuz berdi')
        }
      },

      logout: () => {
        const { token } = get()
        if (token) {
          axios.post(`${API_URL}/auth/logout`, { token }).catch(() => {})
        }
        // Remove token from localStorage
        localStorage.removeItem('authToken')
        set({ user: null, token: null, isAuthenticated: false })
      },

      adminLogin: async (password: string) => {
        const ADMIN_PASSWORD = 'admin123'
        
        await new Promise(resolve => setTimeout(resolve, 500))
        
        if (password === ADMIN_PASSWORD) {
          set({ isAdmin: true })
        } else {
          throw new Error('Noto\'g\'ri parol')
        }
      },

      adminLogout: () => {
        set({ isAdmin: false })
      },

      updateUser: (userData: Partial<User>) => {
        const { user } = get()
        if (user) {
          set({ user: { ...user, ...userData } })
        }
      },

      incrementFreeAttempt: () => {
        set(state => ({ freeAttemptsUsed: state.freeAttemptsUsed + 1 }))
      },

      canTakeExam: () => {
        const { isAuthenticated, freeAttemptsUsed, user } = get()
        
        // Premium users can always take exams
        if (user?.isPremium) return true
        
        // Authenticated users get unlimited attempts
        if (isAuthenticated) return true
        
        // Non-authenticated users get 1 free attempt
        return freeAttemptsUsed < 1
      },
    }),
    {
      name: 'avtotest-auth',
    }
  )
)
