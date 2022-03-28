import { useState } from 'react'
import ModalLayout from '@/components/Layouts/ModalLayout'
import TeacherForm from '@/components/UserConfig/TeacherForm'
import StudentForm from '@/components/UserConfig/StudentForm'
import Card from '@/components/Card'

function Select({ setActiveStep }) {
  return (
    <>
      <ModalLayout.Title withIcon={true}>
        Seleccione el tipo de usuario
      </ModalLayout.Title>
      <div className="flex flex-col gap-4 md:flex-row">
        <Card
          onClick={() => setActiveStep('teacher')}
          className="cursor-pointer"
          element={{
            name: 'Docente',
            tag: 'Crear cuenta de docente',
            imageUrl:
              'https://conceptodefinicion.de/wp-content/uploads/2016/10/Docente2.jpg'
          }}
        />
        <Card
          onClick={() => setActiveStep('student')}
          className="cursor-pointer"
          element={{
            name: 'Estudiante',
            tag: 'Crear cuenta de estudiante',
            imageUrl:
              'https://www.residenciasarria.com/blog/wp-content/uploads/2018/08/primeros-d%C3%ADas-residencia-estudiantes-1080x675.jpg'
          }}
        />
      </div>
    </>
  )
}

function SelectUserType() {
  const [activeStep, setActiveStep] = useState('main')

  const goBack = () => setActiveStep('main')

  const getStepContent = (step) => {
    switch (step) {
      case 'main':
        return <Select setActiveStep={setActiveStep} />
      case 'teacher':
        return <TeacherForm goBack={goBack} />
      case 'student':
        return <StudentForm goBack={goBack} />
      default:
        return null
    }
  }

  return (
    <ModalLayout>
      <ModalLayout.Content>{getStepContent(activeStep)}</ModalLayout.Content>
    </ModalLayout>
  )
}

export default SelectUserType
