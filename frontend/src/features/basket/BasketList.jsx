import { useDispatch, useSelector } from 'react-redux'
import { removeItem, selectBasketItems } from './basketSlice'
import Button from '@/components/Button'

function BasketList() {
  const dispatch = useDispatch()
  const coursesSelected = useSelector(selectBasketItems)

  const handleRemove = (courseId) => dispatch(removeItem(courseId))

  return (
    <ul className="flex-auto">
      {coursesSelected.map((course) => (
        <li
          className="mb-4 flex items-center gap-4 overflow-hidden rounded-3xl bg-white p-3"
          key={course._id}
        >
          <img
            src={course.imageURL}
            alt={course.name}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div className="flex-auto">
            <h2>{course.name}</h2>
            <p className="text-sm font-bold text-gray-500">
              Por {course.teacher.firstName}
            </p>
            <p className="text-sm font-bold text-gray-500">
              {'⭐'.repeat(Math.floor(Math.random() * 5) + 3)}
            </p>
          </div>
          <div className="flex flex-col gap-2 md:mx-4">
            <h3 className="text-gray-500">S/. {course.price}</h3>
            <Button
              onClick={() => handleRemove(course._id)}
              color="gray"
              className="text-sm hover:bg-red-500"
            >
              Eliminar
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default BasketList
