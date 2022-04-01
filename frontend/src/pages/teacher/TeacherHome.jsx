import Card from '@/components/Card'
import TableTeacher from '@/components/Teacher/TableTeacher'
import { cursos } from '@/data/cursos.json'
import { Link } from 'react-router-dom'

function TeacherHome() {
  return (
    <div className="flex flex-col gap-12">
      <section className="-mr-8">
        <h1 className="mb-8">Mis cursos</h1>
        <div className="scrollbar-hide flex gap-8 overflow-y-hidden overflow-x-scroll">
          {cursos.map((curso) => (
            <Link to={`courses/${encodeURIComponent(curso.id)}`} key={curso.id}>
              <Card element={curso} />
            </Link>
          ))}
        </div>
      </section>
      <TableTeacher />
    </div>
  )
}

export default TeacherHome
