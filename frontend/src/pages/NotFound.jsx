import LandingLayout from '@/components/Layouts/LandingLayout'
import notfoundSVG from '@/assets/svg/notfound.svg'

function NotFound() {
  return (
    <LandingLayout>
      <div className="grid h-[calc(100vh_-_230px)] place-content-center">
        <img src={notfoundSVG} alt="page not found" />
      </div>
    </LandingLayout>
  )
}

export default NotFound
