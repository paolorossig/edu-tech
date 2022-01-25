import { Link } from 'react-router-dom'

function Sidebar({ links, buttons }) {
  return (
    <aside className="fixed top-0 z-20 flex h-screen w-[280px] flex-shrink-0 flex-col justify-between bg-white p-4 text-center shadow-lg">
      <Link to="/">
        <div className="grid h-20 place-content-center text-2xl font-bold">
          EduTECH
        </div>
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
