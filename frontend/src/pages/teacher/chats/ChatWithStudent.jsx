import { useParams } from 'react-router-dom'
import { useAuth } from '@/contexts/auth'
import Chat from '@/features/messages/Chat'

function ChatWithStudent() {
  const { auth } = useAuth()
  const teacherId = auth.user._id
  const { userId } = useParams()

  return <Chat from={teacherId} to={userId} />
}

export default ChatWithStudent
