import { useNavigate } from 'react-router-dom'
import { useUserCoursesQuery } from '@/features/courses/CourseApi'
import Button from '@/components/Button'

function CourseLessons() {
  const navigate = useNavigate()
  const { data } = useUserCoursesQuery()

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
              {/* <td className="table_row flex justify-center">
                <img
                  s rc={item.imageURL}
                  alt="course-image"
                  className="h-10 w-16 object-cover"
                />
              </td> */}
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
