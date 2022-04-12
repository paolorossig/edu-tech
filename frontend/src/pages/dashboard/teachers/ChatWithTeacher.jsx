import { useParams } from 'react-router-dom'
import { useAuth } from '@/contexts/auth'
import Chat from '@/features/messages/Chat'

function ChatWithTeacher() {
  const { auth } = useAuth()
  const userId = auth.user._id
  const { teacherId } = useParams()

  return <Chat from={userId} to={teacherId} />
}

export default ChatWithTeacher
