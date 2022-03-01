import { useParams, Link } from 'react-router-dom'

import { contenido, cursos } from '@/data/cursos.json'

function Curso() {
  const { cursoId } = useParams()
  const { name } = cursos.find((curso) => curso.id === cursoId)

  return (
    <div className="flex flex-1 flex-col overflow-hidden px-8">
      <h1 className="my-4 pb-4">
        <Link to="/dashboard/cursos">Cursos</Link> / {name}
      </h1>
      <div className="mb-[-50px] flex-1 overflow-hidden rounded-[50px] bg-white p-[50px]">
        <h2 className="text-gray-500">Contenido:</h2>
        <ul className="m-8 flex flex-col gap-8">
          {contenido.map((step) => {
            const { id, title, length, completed, exercises } = step

            const bgColor =
              completed === exercises
                ? 'bg-green-400'
                : completed === 0
                ? 'bg-gray-300'
                : 'bg-black'

            return (
              <li className="flex items-center gap-8" key={id}>
                <div
                  className={`${bgColor} flex h-20 w-20 items-center justify-center rounded-full text-3xl text-white`}
                >
                  {id}
                </div>
                <div className="flex-1">
                  <h3>{title}</h3>
                  <p className="text-gray-500">{length}</p>
                </div>
                <div>
                  <p className="text-gray-500">
                    {completed}/{exercises}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Curso
