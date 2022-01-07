function Inicio() {
  return (
    <div>
      <div>
        <h1 className="mb-4">Mis cursos</h1>
        <div className="flex gap-8">
          <div className="p-4 bg-white rounded-3xl min-w-[300px]">
            <h2 className="mt-28">Javascript: async / await</h2>
            <p className="text-gray-500 text-sm">Web Development</p>
          </div>
          <div className="p-4 bg-white rounded-3xl min-w-[300px]">
            <h2 className="mt-28">React: Hooks</h2>
            <p className="text-gray-500 text-sm">Web Development</p>
          </div>
          <div className="p-4 bg-white rounded-3xl min-w-[300px]">
            <h2 className="mt-28">Docker: Images</h2>
            <p className="text-gray-500 text-sm">DevOps</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio
