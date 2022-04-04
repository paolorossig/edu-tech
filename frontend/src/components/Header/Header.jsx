import UserDropdown from './UserDropdown'
import BasketCounter from './BasketCounter'
import NotificationsDropdown from './NotificationsDropdown'
import { useAuth } from '@/contexts/auth'

function Header() {
  const { auth } = useAuth()

  return (
    <header className="sticky top-0 z-20 bg-gray-100 py-4 px-4 md:px-8">
      <div className="flex items-center justify-end rounded-xl bg-white p-2 shadow-md">
        <NotificationsDropdown />
        {auth.user.role === 'student' && <BasketCounter />}
        <UserDropdown />
      </div>
    </header>
  )
}

export default Header
