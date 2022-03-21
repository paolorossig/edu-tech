import { Link } from 'react-router-dom'
import ModalLayout from '@/components/Layouts/ModalLayout'
import Card from '@/components/Card'

function SelectUserType() {
  return (
    <ModalLayout>
      <ModalLayout.Content>
        <ModalLayout.Title withIcon={true}>
          Seleccione el tipo de usuario
        </ModalLayout.Title>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link to={'/config/teacher'}>
            <Card
              className="border-2 border-orange-500"
              element={{
                name: 'Docente',
                tag: 'Crear cuenta de docente',
                imageUrl:
                  'https://conceptodefinicion.de/wp-content/uploads/2016/10/Docente2.jpg'
              }}
            />
          </Link>
          <Link to={'/config/student'}>
            <Card
              className="border-2 border-orange-500"
              element={{
                name: 'Estudiante',
                tag: 'Crear cuenta de estudiante',
                imageUrl:
                  'https://www.residenciasarria.com/blog/wp-content/uploads/2018/08/primeros-d%C3%ADas-residencia-estudiantes-1080x675.jpg'
              }}
            />
          </Link>
        </div>
      </ModalLayout.Content>
    </ModalLayout>
  )
}

export default SelectUserType
