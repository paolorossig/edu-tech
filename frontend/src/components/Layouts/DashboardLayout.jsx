import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

function DashboardLayout({ navConfig }) {
  const { links, buttons } = navConfig()

  return (
    <div className="flex h-full w-full">
      <Sidebar links={links} buttons={buttons} />
      <main className="flex h-screen w-full flex-col md:ml-[280px] md:w-[calc(100%_-_280px)]">
        <Header />
        <div className="h-full px-4 pt-4 md:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
