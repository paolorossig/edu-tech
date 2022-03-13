function ModalLayout({ imgsrc, children }) {
  return (
    <div className="grid h-screen w-screen place-content-center text-center">
      <div className="flex h-screen w-screen flex-col-reverse justify-center overflow-hidden bg-white md:h-full md:w-full md:flex-row md:rounded-3xl md:shadow-md">
        <div className="flex min-w-[350px] flex-col justify-center px-8 py-4 md:py-8">
          {children}
        </div>
        <div className="flex h-full w-full max-w-md justify-center self-center px-8 py-4 md:bg-slate-200 md:py-8">
          <img src={imgsrc} alt="auth-image" className="" />
        </div>
      </div>
    </div>
  )
}

export default ModalLayout
