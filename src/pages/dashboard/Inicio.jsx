import { Link } from 'react-router-dom'
import Badge from '@/components/Badge'
import Card from '@/components/Card'

import { cursos } from '@/data/cursos.json'
import { mentores } from '@/data/mentores.json'

function Inicio() {
  return (
    <div className="mx-8 mt-4 flex flex-col gap-12">
      <div>
        <h1 className="mb-8">Mis cursos</h1>
        <div className="flex gap-8">
          {cursos.map((curso) => (
            <Link to={`cursos/${encodeURIComponent(curso.id)}`} key={curso.id}>
              <Card element={curso} />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-8">Mentores Disponibles</h1>
        <div className="flex flex-wrap gap-8">
          {mentores.map((mentor) => (
            <Badge element={mentor} key={mentor.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inicio
