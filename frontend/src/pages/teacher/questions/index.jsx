import { useNavigate, useParams } from 'react-router-dom'
import { useLessonQuestionsQuery } from '@/features/courses/CourseApi'
import Button from '@/components/Button'

function CourseLessonsQuestions() {
  const navigate = useNavigate()
  const { lessonId } = useParams()
  const { data } = useLessonQuestionsQuery(lessonId)

  return (
    <section>
      <h1 className="mb-4">Preguntas de la leccion</h1>
      <table className="mb-6 table">
        <thead>
          <tr>
            <th className="table_head">#</th>
            <th className="table_head text-left">Texto Pregunta</th>
            <th className="table_head">Opciones</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {data?.questions?.map((item, index) => (
            <tr key={item._id}>
              <td className="table_row">{index + 1}</td>
              <td className="table_row">
                <div className="flex">{item.description}</div>
              </td>
              <td className="table_row">
                <Button type="submit" onClick={() => navigate(`${item._id}`)}>
                  Ver respuestas
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type="submit" onClick={() => navigate('create')}>
        Crear pregunta
      </Button>
    </section>
  )
}
export default CourseLessonsQuestions
