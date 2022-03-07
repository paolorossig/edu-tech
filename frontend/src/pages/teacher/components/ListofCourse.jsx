import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ListofCourse() {
  const navigate = useNavigate()
  const [datos, setDatos] = useState([])

  useEffect(() => {
    getcourses()
  }, [])

  const getcourses = async () => {
    await axios
      .get('http://localhost:4000/api/getcourses', {}, {})
      .then((response) => {
        const resp = response.data.coursem
        setDatos(resp)
        console.log(resp)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <h1>USUARIOS REGISTRADOS EN LA BASE DE DATOS</h1>
      <table className="min-w-full divide-y divide-gray-200">
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
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {datos.map((item, index) => (
            <tr key={index + 1}>
              <td className="whitespace-nowrap px-6 py-4">{index + 1}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {item.course_name}
              </td>

              <td className="whitespace-nowrap px-6 py-4">
                {item.course_category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="submit"
        className="border- gray-300 flex items-center justify-center rounded-xl border px-8 py-2"
        onClick={() => {
          navigate('/teacher/createCourse')
        }}
      >
        <p className="text-gray-500">CREAR UN CURSO</p>
      </button>
    </div>
  )
}
export default ListofCourse
