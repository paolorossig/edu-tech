import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { alumnosNavConfig } from '@/pages/dashboard/layoutConfig'

function DashboardLayout() {
  const { links, buttons } = alumnosNavConfig()

  return (
    <div className="flex h-full w-full">
      <Sidebar links={links} buttons={buttons} />
      <main className="ml-[280px] flex w-full flex-col">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
