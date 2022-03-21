import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Link as ScrollLink, animateScroll } from 'react-scroll'
import useAuth from '@/hooks/useAuth'
import logo from '@/assets/svg/logo.svg'

const scrollProps = {
  spy: true,
  smooth: true,
  offset: -80,
  duration: 500,
  activeClass: 'active'
}

function Header() {
  const { auth } = useAuth()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const toggleHome = () => {
    if (pathname !== '/') navigate('/')
    animateScroll.scrollToTop()
  }

  return (
    <header className="sticky top-0 z-20 flex h-20 w-full justify-center bg-white p-4 shadow-md">
      <div className="mx-4 flex w-full items-center justify-between gap-4 xl:w-[1280px]">
        <img
          src={logo}
          alt="logo"
          onClick={toggleHome}
          className="h-full cursor-pointer"
        />
        <nav className="hidden flex-auto md:block">
          <ul className="flex justify-center gap-4">
            <li className="link">
              <ScrollLink to="cursos" {...scrollProps}>
                Cursos
              </ScrollLink>
            </li>
            <li className="link">
              <ScrollLink to="profesores" {...scrollProps}>
                Profesores
              </ScrollLink>
            </li>
            <li className="link">
              <ScrollLink to="contacto" {...scrollProps}>
                Contáctanos
              </ScrollLink>
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
