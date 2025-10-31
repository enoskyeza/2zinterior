import { createContext, useContext, useState, useEffect } from 'react'
import axiosClient from '../lib/axios'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is authenticated on mount
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const token = localStorage.getItem('auth_token')
    const savedUser = localStorage.getItem('user')

    if (token && savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
      
      // Verify token is still valid
      try {
        const response = await axiosClient.get('/auth/user')
        setUser(response.data.data)
        localStorage.setItem('user', JSON.stringify(response.data.data))
      } catch (error) {
        // Token is invalid
        logout()
      }
    }
    setLoading(false)
  }

  const login = async (credentials) => {
    try {
      const response = await axiosClient.post('/auth/login', credentials)
      
      if (response.data.success) {
        const { user, token } = response.data.data
        
        // Save to localStorage
        localStorage.setItem('auth_token', token)
        localStorage.setItem('user', JSON.stringify(user))
        
        // Update state
        setUser(user)
        setIsAuthenticated(true)
        
        return { success: true, user }
      }
      
      return { success: false, message: response.data.message }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed'
      return { success: false, message, errors: error.response?.data?.errors }
    }
  }

  const logout = async () => {
    try {
      await axiosClient.post('/auth/logout')
    } catch (error) {
      // Even if logout fails on server, clear local data
      console.error('Logout error:', error)
    } finally {
      // Clear localStorage
      localStorage.removeItem('auth_token')
      localStorage.removeItem('user')
      
      // Update state
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  const updateProfile = async (data) => {
    try {
      const response = await axiosClient.put('/auth/profile', data)
      
      if (response.data.success) {
        const updatedUser = response.data.data
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
        
        return { success: true, user: updatedUser }
      }
      
      return { success: false, message: response.data.message }
    } catch (error) {
      const message = error.response?.data?.message || 'Profile update failed'
      return { success: false, message, errors: error.response?.data?.errors }
    }
  }

  const changePassword = async (data) => {
    try {
      const response = await axiosClient.post('/auth/change-password', data)
      
      if (response.data.success) {
        return { success: true, message: response.data.message }
      }
      
      return { success: false, message: response.data.message }
    } catch (error) {
      const message = error.response?.data?.message || 'Password change failed'
      return { success: false, message, errors: error.response?.data?.errors }
    }
  }

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    logout,
    updateProfile,
    changePassword,
    checkAuth,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
