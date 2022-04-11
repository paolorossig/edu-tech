import { Link } from 'react-router-dom'
import { XIcon, MenuAlt2Icon } from '@heroicons/react/outline'
import useToggle from '@/hooks/useToggle'
import logo from '@/assets/svg/logo.svg'

function Sidebar({ links, buttons }) {
  const [open, toggle] = useToggle()

  return (
    <>
      <div className={`${open ? 'hidden' : 'block'} fixed top-0 z-30 w-screen`}>
        <MenuAlt2Icon
          onClick={toggle}
          className="absolute left-6 top-[30px] h-12 w-12 rounded-full bg-gray-100 p-2 text-gray-500"
        />
      </div>
      <aside
        className={`${
          open ? 'flex' : 'hidden'
        } fixed top-0 z-30 h-screen w-screen flex-col items-center justify-between bg-white p-4 text-center shadow-lg md:flex md:w-[280px]`}
      >
        <div className="relative h-[76px] w-full py-2">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="mx-auto h-full cursor-pointer"
            />
          </Link>
          <XIcon
            onClick={toggle}
            className="absolute right-0 top-[18px] h-10 w-10 md:hidden"
          />
        </div>
        <nav>
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li className="link" key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex h-40 w-full flex-col justify-center gap-4 px-10">
          {buttons?.map((button) => (
            <Link to={button.path} className="btn" key={button.path}>
              {button.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
