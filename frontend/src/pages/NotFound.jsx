import MainLayout from '@/components/Layouts/MainLayout'
import notfoundSVG from '@/assets/svg/notfound.svg'

function NotFound() {
  return (
    <MainLayout>
      <div className="grid h-[calc(100vh_-_230px)] place-content-center">
        <img src={notfoundSVG} alt="page not found" />
      </div>
    </MainLayout>
  )
}

export default NotFound
