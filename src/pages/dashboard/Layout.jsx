import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { alumnosNavConfig } from './layoutConfig'

function Layout() {
  const { links, buttons } = alumnosNavConfig()

  return (
    <div className="flex h-screen w-screen">
      <Sidebar links={links} buttons={buttons} />
      <main className="ml-[280px] flex w-full flex-col">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
