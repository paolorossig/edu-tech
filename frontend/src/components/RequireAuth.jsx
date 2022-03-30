import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import useUserSessions from '@/hooks/useUserSessions'
import Loading from './Loading'

function RequireAuth({ children }) {
  const { auth } = useAuth()
  const location = useLocation()
  const sessions = useUserSessions()
  console.log('In RequireAuth-------------')

  if (!sessions.length) {
    return <Loading />
  }

  if (!auth.user) {
    console.log('No auth.user')
    if (sessions.length) {
      console.log(sessions)
      console.log('Out RequireAuth-------------')
      return children
    }
    console.log('Out RequireAuth-------------')
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  console.log('Out RequireAuth-------------')
  return children
}

export default RequireAuth
