import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { alumnosNavConfig } from './layoutConfig'

function Dashboard() {
  const { links, buttons } = alumnosNavConfig()

  return (
    <div className="flex flex-auto w-full">
      <Sidebar links={links} buttons={buttons} />
      <main className="flex flex-col flex-auto min-h-screen relative z-10">
        <Header />
        <div className="m-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
