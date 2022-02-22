import { Link } from 'react-router-dom'
import { BsCartPlusFill } from 'react-icons/bs'
import NotificationsTeacher from '@/pages/teacher/components/NotificationsTeacher'
import { notificacions_Teacher } from '@/pages/teacher/teacherConfig'

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gray-100 py-4 px-8">
      <div className="flex h-20 items-center justify-end rounded-xl bg-white p-4 shadow-md">
      <div className="flex cursor-pointer gap-2">
          
          <div className="flex flex-col">
            {notificacions_Teacher.map((name, index) => (
              <NotificationsTeacher element={name} key={index} />
            ))}
          </div>
        </div>
        <Link
          to="checkout"
          className="mr-4 text-2xl text-gray-500 hover:text-black"
        >
          <BsCartPlusFill />
        </Link>
        <div className="flex cursor-pointer gap-2">
          <div className="h-10 w-10 rounded-full bg-black"></div>
          <div className="flex flex-col">
            <h3>Paolo Rossi</h3>
            <h4>Alumno</h4>
          </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header
