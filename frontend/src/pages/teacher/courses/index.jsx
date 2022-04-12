import { useNavigate } from 'react-router-dom'
import { useUserCoursesQuery } from '@/features/courses/CourseApi'
import Button from '@/components/Button'

function TeacherCourses() {
  const navigate = useNavigate()
  const { data } = useUserCoursesQuery()

  return (
    <section>
      <h1 className="mb-4">Cursos creados</h1>
      <table className="mb-6 table">
        <thead>
          <tr>
            <th className="table_head">#</th>
            <th className="table_head text-left">Curso</th>
            <th className="table_head">Categoría</th>
            <th className="table_head">Precio</th>
            <th className="table_head">URL portada</th>
            <th className="table_head">Lecciones</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {data?.courses?.map((item, index) => (
            <tr key={item._id}>
              <td className="table_row">{index + 1}</td>
              <td className="table_row">
                <div className="flex">{item.name}</div>
              </td>
              <td className="table_row">{item.category.name}</td>
              <td className="table_row">{item.price}</td>
              <td className="table_row">
                <img
                  src={item.imageURL}
                  alt="course-image"
                  className="mx-auto h-10 w-16 object-cover"
                />
              </td>
              <td className="table_row">
                <Button
                  type="button"
                  onClick={() => navigate(item._id + '/lessons')}
                  className="mx-auto"
                >
                  Ver más
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type="submit" onClick={() => navigate('create')}>
        Crear curso
      </Button>
    </section>
  )
}
export default TeacherCourses
