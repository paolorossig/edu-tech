import { useEffect, useState } from 'react'
import { getUserSessions } from '@/services/auth'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'

function useUserSessions() {
  const axiosPrivate = useAxiosPrivate()
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    const getHandler = async () => {
      const res = await getUserSessions(axiosPrivate) // It can not be done -> return a Promise
      res.success && setSessions(res.sessions)
    }
    getHandler()
  }, [])

  return sessions
}

export default useUserSessions
