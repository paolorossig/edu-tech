import { createContext, useState } from 'react'
import { deleteUserSession, login, signup } from '@/services/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: {} })
  const [isLoading, setIsLoading] = useState(false)

  const userSignup = async (data) => {
    setIsLoading(true)
    const response = await signup(data)
    setIsLoading(false)
    response.success && setAuth({ userId: response.user._id })
    return response
  }

  const userLogin = async (data) => {
    setIsLoading(true)
    const response = await login(data)
    if (response.success) setAuth(response)
    setIsLoading(false)
    return response
  }

  const logout = async (axiosPrivate) => {
    const response = await deleteUserSession(axiosPrivate)
    if (response.success) return setAuth({ user: {} })
  }

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isLoading, userSignup, userLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
