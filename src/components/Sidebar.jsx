import { Link } from 'react-router-dom'
import logo from '@/assets/svg/logo.svg'

function Sidebar({ links, buttons }) {
  return (
    <aside className="fixed top-0 z-20 flex h-screen w-[280px] flex-shrink-0 flex-col items-center justify-between bg-white p-4 text-center shadow-lg">
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
      <div className="flex h-40 flex-col justify-center gap-4">
        {buttons.map((button, index) => (
          <button className="btn" key={index}>
            {button}
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
