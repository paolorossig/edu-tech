import { Link } from 'react-router-dom'
import Badge from '../../components/Badge'
import Card from '../../components/Card'

import { cursos } from '../../data/cursos.json'
import { mentores } from '../../data/mentores.json'

function Inicio() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="mb-8">Mis cursos</h1>
        <div className="flex gap-8">
          {cursos.map((curso, index) => (
            <Link to={`cursos/${encodeURIComponent(curso.name)}`} key={index}>
              <Card element={curso} />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1 className="mb-8">Mentores Disponibles</h1>
        <div className="flex gap-8 flex-wrap">
          {mentores.map((mentor, index) => (
            <Badge element={mentor} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inicio
