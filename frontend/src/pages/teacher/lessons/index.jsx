import { useNavigate, useParams } from 'react-router-dom'
import { useAllLessonsQuery } from '@/features/courses/CourseApi'
import Button from '@/components/Button'

function CourseLessons() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const { data } = useAllLessonsQuery(courseId)

  console.log(data)

  return (
    <section>
      <h1 className="mb-4">Lecciones creados</h1>
      <table className="mb-6 table">
        <thead>
          <tr>
            <th className="table_head">#</th>
            <th className="table_head text-left">Título</th>
            <th className="table_head">Duración</th>
            <th className="table_head">Vídeo</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {data?.courses?.map((item, index) => (
            <tr key={item._id}>
              <td className="table_row">{index + 1}</td>
              <td className="table_row text-left">{item.description}</td>
              <td className="table_row">{item.category.duration}</td>
              <td className="table_row">{item.urlVideo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type="submit" onClick={() => navigate('create-lesson')}>
        Crear Lección
      </Button>
    </section>
  )
}
export default CourseLessons
