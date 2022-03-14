import Card from '@/components/Card'
import TableTeacher from '@/components/Teacher/TableTeacher'
import { cursosestadisticas, cursosTeacher } from './teacherConfig'

function TeacherHome() {
  return (
    <div>
      <h1 className="mb-4">Tus cursos</h1>
      <div className="mb-4 flex gap-8">
        {cursosTeacher.map((curso, index) => (
          <Card element={curso} key={index} />
        ))}
      </div>
      <h1>Estadísticas de tus cursos</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Cursos
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Matriculados
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Conectados
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Hoy
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {cursosestadisticas.map((curso, index) => (
            <TableTeacher element={curso} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeacherHome
