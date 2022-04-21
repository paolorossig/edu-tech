import { useNavigate, useParams } from 'react-router-dom'
import { useQuestionAnswersQuery } from '@/features/courses/CourseApi'
import Button from '@/components/Button'

function CourseLessonsQuestionsAnswers() {
  const navigate = useNavigate()
  const { questionId } = useParams()
  const { data } = useQuestionAnswersQuery(questionId)

  return (
    <section>
      <h1 className="mb-4">Respuestas de la pregunta</h1>
      <table className="mb-6 table">
        <thead>
          <tr>
            <th className="table_head">#</th>
            <th className="table_head text-left">Texto Respuesta</th>
            <th className="table_head">Valor</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {data?.answer?.map((item, index) => (
            <tr key={item._id}>
              <td className="table_row">{index + 1}</td>
              <td className="table_row">
                <div className="flex">{item.text}</div>
              </td>
              <td className="table_row">
                <p
                  className={`mr-1 mb-2 ml-5 rounded-full ${
                    item.correct ? 'bg-orange-500' : 'bg-indigo-600'
                  } flex-end 
                    h-6 px-2 py-1
                    text-xs font-bold text-white opacity-90 duration-300
                    md:mr-2 md:px-4`}
                >
                  {item.correct ? 'CORRECTO' : 'INCORRECTO'}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type="submit" onClick={() => navigate('create')}>
        Crear respuesta
      </Button>
    </section>
  )
}
export default CourseLessonsQuestionsAnswers
