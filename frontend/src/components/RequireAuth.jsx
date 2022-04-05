import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import useUserSessions from '@/hooks/useUserSessions'
import Loading from './Loading'

function RequireAuth() {
  const { auth } = useAuth()
  const location = useLocation()
  const sessions = useUserSessions() // !auth.user._id &&

  if (!sessions.length) return <Loading />

  if (!auth.user._id)
    return <Navigate to="/login" state={{ from: location }} replace />

  return <Outlet />
}

export default RequireAuth
