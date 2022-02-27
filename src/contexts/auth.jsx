import { createContext, useState } from 'react'
import { login, signup } from '@/services/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  const userSignup = async (data) => {
    const response = await signup(data)
    return response
  }

  const userLogin = async (data) => {
    const response = await login(data)
    if (response.success)
      setAuth({ user: data.email, accessToken: response.accessToken })
    return response
  }

  const logout = () => {
    setAuth({})
  }

  return (
    <AuthContext.Provider value={{ auth, userSignup, userLogin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
