import { Link } from 'react-router-dom'
import { BsCartPlusFill } from 'react-icons/bs'
import Dropdown from './Dropdown'
import NotificationTeacher from '@/pages/teacher/components/NotificationsTeacher'

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gray-100 py-4 px-8">
      <div className="flex items-center justify-end rounded-xl bg-white p-2 shadow-md">
        {<NotificationTeacher />}
        <Link
          to="checkout"
          className="mr-4 text-2xl text-gray-500 hover:text-black"
        >
          <BsCartPlusFill />
        </Link>
        <Dropdown>
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-full bg-black"></div>
            <div className="flex flex-col items-start">
              <h3>Paolo Rossi</h3>
              <h4>Alumno</h4>
            </div>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
