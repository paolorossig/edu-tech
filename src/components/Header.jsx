function Header() {
  return (
    <header className="z-20 sticky top-0 py-4 px-8 bg-gray-100">
      <div className="flex justify-end items-center shadow-md h-20 p-4 bg-white rounded-xl">
        <div className="flex gap-2 cursor-pointer">
          <div className="bg-black h-10 w-10 rounded-full"></div>
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
