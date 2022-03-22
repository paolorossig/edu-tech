import { Link } from 'react-router-dom'
import { BsCartPlusFill } from 'react-icons/bs'
import NotificationsDropdown from './NotificationsDropdown'
import UserDropdown from './UserDropdown'

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gray-100 py-4 px-4 md:px-8">
      <div className="flex items-center justify-end rounded-xl bg-white p-2 shadow-md">
        <NotificationsDropdown />
        <Link
          to="checkout"
          className="p-2 text-2xl text-gray-500 hover:text-black"
        >
          <BsCartPlusFill />
        </Link>
        <UserDropdown />
      </div>
    </header>
  )
}

export default Header
