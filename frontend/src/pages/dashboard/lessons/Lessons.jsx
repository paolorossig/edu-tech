import { useParams, Link } from 'react-router-dom'

import { cursos } from '@/data/cursos.json'

function Lesson() {
  const { cursoId, lessonId } = useParams()
  const { name, lessons } = cursos.find((curso) => curso.id === cursoId)
  const { title } = lessons.find((leccion) => leccion.id == lessonId)

  return (
    <div className="flex flex-1 flex-col overflow-hidden px-8">
      <h1 className="my-4 pb-4">
        <Link to={`/dashboard/cursos/${cursoId}`}>Lección/ {name}</Link> /{' '}
        {title}
      </h1>
    </div>
  )
}

export default Lesson
