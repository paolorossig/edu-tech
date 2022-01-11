import { useParams } from 'react-router-dom'

import { contenido } from '../../../data/cursos.json'

function Curso() {
  const { cursoId } = useParams()

  return (
    <div>
      <h1 className="mb-8">CURSO / {cursoId}</h1>
      <div className="bg-white rounded-[50px] overflow-hidden p-16">
        <h2 className="text-gray-500">Contenido:</h2>
        <ul className="flex flex-col gap-8 m-8">
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
                  className={`${bgColor} h-20 w-20 rounded-full text-white text-3xl flex justify-center items-center`}
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
