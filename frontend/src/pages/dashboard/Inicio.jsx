import { Link } from 'react-router-dom'
import Badge from '@/components/Badge'
import Card from '@/components/Card'

import { cursos } from '@/data/cursos.json'
import { mentores } from '@/data/mentores.json'

function Inicio() {
  return (
    <div className="flex flex-col gap-12">
      <section className="-mr-8">
        <h1 className="mb-8">Mis cursos</h1>
        <div className="scrollbar-hide flex gap-8 overflow-y-hidden overflow-x-scroll">
          {cursos.map((curso) => (
            <Link to={`cursos/${encodeURIComponent(curso.id)}`} key={curso.id}>
              <Card element={curso} />
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h1 className="mb-8">Mentores Disponibles</h1>
        <div className="flex flex-wrap gap-8">
          {mentores.map((mentor) => (
            <Badge element={mentor} key={mentor.id} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Inicio
