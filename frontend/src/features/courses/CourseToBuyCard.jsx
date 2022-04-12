import { useDispatch } from 'react-redux'
import {
  CurrencyDollarIcon,
  HeartIcon,
  PlusCircleIcon,
  UserGroupIcon,
  CheckCircleIcon
} from '@heroicons/react/outline'
import { addToBasket } from '../basket/basketSlice'

function CourseToBuyCard({ course, selected }) {
  const dispatch = useDispatch()

  const handleClick = (course) => dispatch(addToBasket(course))

  return (
    <div className="flex flex-col gap-2 rounded-3xl bg-white p-4">
      <div className="relative">
        <img
          src={course.imageURL}
          alt={course.name}
          className="h-40 w-72 rounded-2xl object-cover"
        />
        <div className="absolute bottom-2 left-2 rounded-xl bg-white px-2 text-sm text-gray-800">
          {course.category.name}
        </div>
      </div>
      <div className="px-2">
        <div className="flex">
          <div className="flex-auto">
            <h2>{course.name}</h2>
            <h3 className="text-sm text-gray-500">
              {`${course.teacher.firstName} ${course.teacher.lastName}`}
            </h3>
          </div>
          <img
            src={course.teacher.photoURL}
            alt={course.teacher.firstName}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <div className="grid h-12 grid-cols-3">
          <div className="flex items-center justify-center gap-1">
            <CurrencyDollarIcon className="h-5 w-5" />
            <p>{course.price}</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <UserGroupIcon className="h-5 w-5" />
            <p>{Math.floor(Math.random() * 50) + 10}</p>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-1 hover:text-red-500">
            <HeartIcon className="h-5 w-5" />
            <p>{Math.floor(Math.random() * 25) + 5}</p>
          </div>
        </div>
        <div className="flex justify-end">
          {!selected ? (
            <div
              onClick={() => handleClick(course)}
              className="bg-primary-400 hover:bg-primary-900 flex cursor-pointer items-center justify-center gap-1 rounded-xl py-1 px-3 text-white"
            >
              <PlusCircleIcon className="h-6 w-6" />
              <p>Agregar</p>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1 rounded-xl bg-green-400 py-1 px-3 text-white">
              <CheckCircleIcon className="h-6 w-6" />
              <p>Agregado</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseToBuyCard
