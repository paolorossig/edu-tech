import { useParams, Link } from 'react-router-dom'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'

import { contenido, cursos } from '@/data/cursos.json'

function Curso() {
  const { cursoId } = useParams()
  const { name } = cursos.find((curso) => curso.id === cursoId)

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>
        <Link to="/dashboard/cursos">Cursos</Link> / {name}
      </ContentPageLayout.Title>
      <ContentPageLayout.Paper>
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
              <Link to={`/dashboard/cursos/${cursoId}/${id}`} key={id}>
                <li className="flex items-center gap-8">
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
              </Link>
            )
          })}
        </ul>
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default Curso
