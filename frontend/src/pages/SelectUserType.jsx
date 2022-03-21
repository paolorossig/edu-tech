import { Link } from 'react-router-dom'
import Card from '@/components/Card'

function SelectUserType() {
  return (
    <div className="grid h-screen place-content-center text-center">
      <div className="flex overflow-hidden rounded-3xl shadow-md">
        <div className="flex min-w-[300px] flex-col justify-center bg-white p-8">
          <h1 className="mb-4">Seleccione el tipo de usuario</h1>
          <div className="grid grid-cols-2 gap-4">
            <Link to={'/config/teacher'}>
              <Card
                className="border-2 border-orange-500"
                element={{
                  name: 'Docente',
                  tag: 'Crear cuenta de docente',
                  url: 'https://conceptodefinicion.de/wp-content/uploads/2016/10/Docente2.jpg'
                }}
              />
            </Link>
            <Link to={'/config/student'}>
              <Card
                className="border-2 border-orange-500"
                element={{
                  name: 'Estudiante',
                  tag: 'Crear cuenta de estudiante',
                  url: 'https://www.residenciasarria.com/blog/wp-content/uploads/2018/08/primeros-d%C3%ADas-residencia-estudiantes-1080x675.jpg'
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectUserType
