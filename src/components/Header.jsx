function Header() {
  return (
    <header
      className="flex justify-end z-20 shadow-md sticky top-0
                h-20 my-4 mx-8 p-4 items-center bg-white rounded-xl"
    >
      <div className="flex gap-2 cursor-pointer">
        <div className="bg-black h-10 w-10 rounded-full"></div>
        <div className="flex flex-col">
          <h3>Paolo Rossi</h3>
          <h4>Alumno</h4>
        </div>
      </div>
    </header>
  )
}

export default Header
