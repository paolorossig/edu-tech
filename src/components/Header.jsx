function Header() {
  return (
    <header
      className="flex justify-end z-20 shadow-md sticky top-0
                h-20 m-4 p-4 items-center bg-white rounded-xl"
    >
      <div className="flex gap-2 cursor-pointer">
        <div className="bg-black h-10 w-10 rounded-full"></div>
        <div className="flex flex-col">
          <h3>Paolo Rossi</h3>
          <p className="text-sm text-gray-500">Alumno</p>
        </div>
      </div>
    </header>
  )
}

export default Header
