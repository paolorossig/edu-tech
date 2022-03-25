import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import useUserSessions from '@/hooks/useUserSessions'

function RequireAuth({ children }) {
  const { auth } = useAuth()
  const location = useLocation()
  const sessions = useUserSessions()
  console.log('In RequireAuth-------------')

  if (!auth.user) {
    console.log('No auth.user')
    if (sessions.length > 0) {
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
