import { Link } from 'react-router-dom'

function Sidebar({ links, buttons }) {
  return (
    <aside className="flex flex-col flex-auto sticky top-0 overflow-hidden h-screen flex-shrink-0 z-20 justify-between shadow-5 bg-white text-center px-5 py-10 max-w-[280px]">
      <div className="h-32 grid place-content-center text-2xl font-bold">
        EduTECH
      </div>
      <nav>
        <ul className="flex flex-col gap-4">
          {links.map((link, index) => (
            <li className="link" key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col gap-4">
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
