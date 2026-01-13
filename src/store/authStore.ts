import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../types'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

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
  syncUserFromServer: () => Promise<void>
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
          const response = await axios.post(`${API_URL}/api/auth/verify-otp`, { otp })
          
          if (response.data.success) {
            const { token, user: userData } = response.data
            
            const user: User = {
              id: userData.id,
              name: userData.name,
              email: userData.phone,
              isPremium: userData.isPro || false,
              proExpiresAt: userData.proExpiresAt || null,
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
              freeAttemptsUsed: userData.isPro ? 0 : get().freeAttemptsUsed
            })
          }
        } catch (error: any) {
          throw new Error(error.response?.data?.message || 'Xatolik yuz berdi')
        }
      },

      logout: () => {
        const { token } = get()
        if (token) {
          axios.post(`${API_URL}/api/auth/logout`, { token }).catch(() => {})
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
        const { freeAttemptsUsed, user } = get()
        
        // Premium users can always take exams
        if (user?.isPremium) return true
        
        // Check if premium is still valid
        if (user?.proExpiresAt && new Date(user.proExpiresAt) > new Date()) {
          return true
        }
        
        // Everyone else gets only 1 free attempt
        return freeAttemptsUsed < 1
      },

      syncUserFromServer: async () => {
        const token = localStorage.getItem('authToken')
        if (!token) return
        
        try {
          const response = await axios.post(`${API_URL}/api/auth/verify-token`, { token })
          
          if (response.data.success) {
            const serverUser = response.data.user
            const { user } = get()
            
            if (user) {
              // Update user with server data (Pro status from admin panel)
              set({
                user: {
                  ...user,
                  isPremium: serverUser.isPro || false,
                  proExpiresAt: serverUser.proExpiresAt || null,
                }
              })
              console.log('✅ User synced from server:', serverUser.isPro ? 'Pro' : 'Free')
            }
          }
        } catch (error) {
          console.log('⚠️ Failed to sync user from server')
        }
      },
    }),
    {
      name: 'avtotest-auth',
    }
  )
)
