import CardRedirect from '@/components/UserSelect/Card'
import { useParams } from 'react-router'

function SelectUser() {
  const { idUsuario } = useParams()
  return (
    <div className="grid h-screen place-content-center text-center">
      <div className="flex overflow-hidden rounded-3xl shadow-md">
        <div className="flex min-w-[300px] flex-col justify-center bg-white p-8">
          <h1 className="mb-4">Seleccione el tipo de usuario.</h1>
          <div className="grid grid-cols-2 gap-4">
            <CardRedirect
              className="border-2 border-orange-500"
              element={{
                name: 'Docente',
                tag: 'Crear cuenta de docente',
                url: 'https://conceptodefinicion.de/wp-content/uploads/2016/10/Docente2.jpg',
                redirect: `/configuracion/docente/${idUsuario}`
              }}
            />
            <CardRedirect
              element={{
                name: 'Estudiante',
                tag: 'Crear cuenta de estudiante',
                url: 'https://www.residenciasarria.com/blog/wp-content/uploads/2018/08/primeros-d%C3%ADas-residencia-estudiantes-1080x675.jpg',
                redirect: `/configuracion/estudiante/${idUsuario}`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectUser
