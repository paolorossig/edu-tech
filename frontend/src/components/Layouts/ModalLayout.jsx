function ModalLayout({ imgsrc, children }) {
  return (
    <div className="grid h-screen place-content-center text-center">
      <div className="flex overflow-hidden rounded-3xl shadow-md">
        <div className="flex min-w-[300px] flex-col justify-center bg-white p-8">
          {children}
        </div>
        <div className="grid max-w-md place-content-center bg-slate-200 p-8">
          <img src={imgsrc} alt="auth-image" />
        </div>
      </div>
    </div>
  )
}

export default ModalLayout
