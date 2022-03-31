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
    <div>
      <h1>Cursos creados</h1>
      <table className="mb-4 min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <td className="whitespace-nowrap px-6 py-4">
              <strong>#</strong>
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <strong>Curso</strong>
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <strong>Categoria</strong>
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <strong>Precio</strong>
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <strong>URL portada</strong>
            </td>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {courses.map((item, index) => (
            <tr key={item._id}>
              <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.category}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.price}</td>
              <td className="whitespace-nowrap px-6 py-4">
                <img
                  src={item.imageURL}
                  alt="course-image"
                  className="w-26 h-10 object-cover"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type="submit" onClick={() => navigate('createCourse')}>
        Crear curso
      </Button>
    </div>
  )
}
export default CoursesList
