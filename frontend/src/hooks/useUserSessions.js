import { useEffect, useState } from 'react'
import { getUserSessions } from '@/services/auth'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'
import { useAuth } from '@/contexts/auth'

function useUserSessions() {
  const { setAuth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    const getHandler = async () => {
      const response = await getUserSessions(axiosPrivate)
      if (!response.success) return setSessions(['Unauthenticated'])

      setAuth((prev) => ({ ...prev, user: response.user }))
      setSessions(response.sessions)
    }
    getHandler()
  }, [])

  return sessions
}

export default useUserSessions
