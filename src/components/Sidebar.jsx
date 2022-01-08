import { Link } from 'react-router-dom'

function Sidebar({ links, buttons }) {
  return (
    <aside className="flex flex-col flex-shrink-0 sticky top-0 h-full w-[280px] z-20 p-4 justify-between shadow-lg bg-white text-center">
      <div className="h-20 grid place-content-center text-2xl font-bold">
        EduTECH
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
      <div className="flex flex-col justify-center gap-4 h-40">
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
