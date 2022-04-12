import { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { useAuth } from '@/contexts/auth'

const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const { auth } = useAuth()
  const [socket, setSocket] = useState()

  useEffect(() => {
    const userId = auth.user._id

    if (userId) {
      const socket = io(import.meta.env.VITE_SERVER_URL, {
        path: '/chat/',
        auth: { token: auth?.accessToken }
      })
      socket.emit('add-user', userId)
      setSocket(socket)
    }
  }, [auth.user])

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => {
  return useContext(SocketContext)
}

export default SocketContext
