import useAuth from '@/hooks/useAuth'
import { Link } from 'react-router-dom'

function Header() {
  const { auth } = useAuth()

  return (
    <header className="sticky top-0 z-20 mb-4 flex h-20 w-full justify-center bg-white p-4 shadow-md">
      <div className="mx-4 flex w-full items-center gap-4 xl:w-[1024px]">
        <div className="grid h-20 place-content-center text-2xl font-bold">
          EduTECH
        </div>
        <nav className="flex-auto">
          <ul className="flex justify-center gap-4">
            <li className="link">
              <a href="#">Cursos</a>
            </li>
            <li className="link">
              <a href="#">Profesores</a>
            </li>
            <li className="link">
              <a href="#">Contáctanos</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">
          {!auth.user ? (
            <Link to="/login" className="btn_black">
              Iniciar sesión
            </Link>
          ) : (
            <Link to="/dashboard" className="btn_black">
              Ir al Dashboard
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
