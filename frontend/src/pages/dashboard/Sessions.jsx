import useAxiosPrivate from '@/hooks/useAxiosPrivate'
import { getUserSessions } from '@/services/auth'
import { useEffect, useState } from 'react'

function Sessions() {
  const [sessions, setSessions] = useState([])
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    const getSessions = async () => {
      const response = await getUserSessions(axiosPrivate)
      response.sessions && setSessions(response.sessions)
    }
    getSessions()
  }, [])

  return (
    <div className="mx-8 mt-4">
      <h1>Sessions</h1>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>
            <p>{session._id}</p>
            <p>{session.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sessions
