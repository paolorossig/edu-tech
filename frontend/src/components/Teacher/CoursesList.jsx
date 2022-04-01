import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCourses } from '@/services/courses'
import Button from '@/components/Button'

function CoursesList() {
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  const listCourses = async () => {
    const response = await getCourses()
    if (response.success) setCourses(response.courses)
  }

  useEffect(() => {
    listCourses()
  }, [])

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
          </tr>
        </thead>
        <tbody className="table_body">
          {courses.map((item, index) => (
            <tr key={item._id}>
              <td className="table_row">{index + 1}</td>
              <td className="table_row text-left">{item.name}</td>
              <td className="table_row">{item.category.name}</td>
              <td className="table_row">{item.price}</td>
              <td className="table_row flex justify-center">
                <img
                  src={item.imageURL}
                  alt="course-image"
                  className="h-10 w-16 object-cover"
                />
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
export default CoursesList
