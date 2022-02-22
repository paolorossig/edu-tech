import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Sidebar from '../../components/Sidebar'
import { teacherNavConfig } from './teacherConfig'

function Teacher() {
  const { links, buttons } = teacherNavConfig()

  return (
    <div className="flex h-screen w-screen">
      <Sidebar links={links} buttons={buttons} />
      <main className="ml-[280px] flex w-full flex-col">
        <Header />
        <div className="my-4 ml-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Teacher
