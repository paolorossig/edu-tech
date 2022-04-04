import { Link } from 'react-router-dom'
import logo from '@/assets/svg/logo.svg'

function Sidebar({ links, buttons }) {
  return (
    <aside className="fixed top-0 z-30 hidden h-screen w-[280px] flex-shrink-0 flex-col items-center justify-between bg-white p-4 text-center shadow-lg md:flex">
      <Link to="/" className="h-[76px] py-2">
        <img src={logo} alt="logo" className="h-full cursor-pointer" />
      </Link>
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
  )
}

export default Sidebar
