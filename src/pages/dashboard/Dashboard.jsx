import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { alumnosNavConfig } from './layoutConfig'

function Dashboard() {
  const { links, buttons } = alumnosNavConfig()

  return (
    <div className="flex w-screen h-screen">
      <Sidebar links={links} buttons={buttons} />
      <main className="flex flex-col z-10 w-full">
        <Header />
        <div className="my-4 ml-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
