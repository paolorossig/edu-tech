import { Link } from 'react-router-dom'
import Card from '../../../components/Card'

import { cursos } from '../../../data/cursos.json'

function Cursos() {
  return (
    <div>
      <h1 className="mb-8">Cursos</h1>
      <div className="flex gap-8">
        {cursos.map((curso, index) => (
          <Link to={`${encodeURIComponent(curso.name)}`} key={index}>
            <Card element={curso} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Cursos
