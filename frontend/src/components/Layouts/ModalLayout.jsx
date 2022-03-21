import { Link } from 'react-router-dom'
import icon from '@/assets/svg/icon.svg'

function ModalLayout({ children }) {
  return (
    <div className="grid h-screen w-screen place-content-center text-center">
      <div className="flex h-screen w-screen flex-col-reverse justify-center overflow-hidden bg-white md:h-full md:w-full md:flex-row md:rounded-3xl md:shadow-md">
        {children}
      </div>
    </div>
  )
}

function Content({ children }) {
  return (
    <div className="flex min-w-[350px] flex-col justify-center px-8 py-4 md:py-8">
      {children}
    </div>
  )
}

function Title({ withIcon, children }) {
  return (
    <div className="relative mb-4 flex h-16 items-center">
      {withIcon && (
        <Link to="/" className="absolute -left-2 h-full">
          <img src={icon} alt="logo" className="h-full" />
        </Link>
      )}
      <h1 className="w-full px-16">{children}</h1>
    </div>
  )
}

function Image({ imgsrc }) {
  return (
    <div className="flex h-full w-full max-w-md justify-center self-center px-8 py-4 md:bg-slate-200 md:py-8">
      <img src={imgsrc} alt="modal-image" />
    </div>
  )
}

ModalLayout.Content = Content
ModalLayout.Title = Title
ModalLayout.Image = Image

export default ModalLayout
