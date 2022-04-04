import { addToBasket } from '@/features/basket/BasketSlice'
import { useAllCoursesQuery } from '@/features/courses/CourseApi'
import { PlusCircleIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'

function Catalogue() {
  const dispatch = useDispatch()
  const { data } = useAllCoursesQuery()

  const handleClick = (course) => dispatch(addToBasket(course))

  return (
    <div>
      <h1 className="mb-4">Catalogue</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.courses.map((course) => (
            <tr key={course._id}>
              <td>{course.name}</td>
              <td className="flex justify-center">
                <PlusCircleIcon
                  onClick={() => handleClick(course)}
                  className="h-7 w-7 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Catalogue
