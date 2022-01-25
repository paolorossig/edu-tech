function Header() {
  return (
    <header className="sticky top-0 z-20 bg-gray-100 py-4 px-8">
      <div className="flex h-20 items-center justify-end rounded-xl bg-white p-4 shadow-md">
        <div className="flex cursor-pointer gap-2">
          <div className="h-10 w-10 rounded-full bg-black"></div>
          <div className="flex flex-col">
            <h3>Paolo Rossi</h3>
            <h4>Alumno</h4>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
