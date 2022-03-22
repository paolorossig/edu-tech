import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import useAxiosPrivate from '@/hooks/useAxiosPrivate'
import { getUserSessions } from '@/services/auth'

function RequireAuth({ children }) {
  const { auth } = useAuth()
  const location = useLocation()
  const axiosPrivate = useAxiosPrivate()
  console.log('In RequireAuth-------------')

  if (!auth.user) {
    console.log('No auth.user')
    const response = getUserSessions(axiosPrivate) // It can not be done -> return a Promise
    console.log(response)
    if (response.success) {
      console.log('getUserSessions succeed')
      console.log(response)
      console.log('Out RequireAuth-------------')
      return children
    }
    console.log('getUserSessions failed')
    console.log('Out RequireAuth-------------')
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  console.log('Out RequireAuth-------------')
  return children
}

export default RequireAuth
