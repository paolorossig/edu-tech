import { useNavigate, useParams } from 'react-router-dom'
import { MdSmartDisplay } from 'react-icons/md'
import { useCourseLessonsQuery } from '@/features/courses/CourseApi'
import Button from '@/components/Button'

function CourseLessons() {
  const navigate = useNavigate()
  const { courseId } = useParams()
  const { data } = useCourseLessonsQuery(courseId)

  return (
    <section>
      <h1 className="mb-4">Lecciones creadas</h1>
      <table className="mb-6 table">
        <thead>
          <tr>
            <th className="table_head">#</th>
            <th className="table_head text-left">Título</th>
            <th className="table_head">Descripción</th>
            <th className="table_head">Opciones</th>
            <th className="table_head">Video</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {data?.lessons?.map((item, index) => (
            <tr key={item._id}>
              <td className="table_row">{index + 1}</td>
              <td className="table_row">
                <div className="flex">{item.title}</div>
              </td>
              <td width="10" className="table_row">
                {item.description.substring(0, 80) + ' ...'}
              </td>
              <td className="table_row flex justify-center">
                <Button onClick={() => navigate(`${item._id}`)}>
                  Ver preguntas
                </Button>
              </td>
              <td className="table_row">
                <a
                  href={item.videoURL}
                  target="_blank"
                  aria-label="video-lesson"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <MdSmartDisplay className="text-3xl hover:text-red-500" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type="submit" onClick={() => navigate('create')}>
        Crear Lección
      </Button>
    </section>
  )
}
export default CourseLessons
