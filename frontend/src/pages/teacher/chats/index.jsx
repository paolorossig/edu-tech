import { Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts/auth'
import Inbox from '@/features/messages/Inbox'
import useUsersByType from '@/hooks/useUsersByType'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'

function TeacherChats() {
  const { auth } = useAuth()
  const userId = auth.user._id
  const { students } = useUsersByType()

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>Chats</ContentPageLayout.Title>
      <Inbox userId={userId} users={students} />
      <ContentPageLayout.Paper>
        <Outlet />
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default TeacherChats
