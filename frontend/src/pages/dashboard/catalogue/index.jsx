import { useSelector } from 'react-redux'
import { selectBasketItems } from '@/features/basket/basketSlice'
import { useAllCoursesQuery } from '@/features/courses/CourseApi'
import CourseToBuyCard from '@/features/courses/CourseToBuyCard'

function Catalogue() {
  const { data } = useAllCoursesQuery()
  const basketItems = useSelector(selectBasketItems)

  return (
    <div className="w-full">
      <h1 className="mb-4">Catálogo de cursos</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {data?.courses.map((course) => {
          const selected = basketItems.filter(
            (el) => el._id === course._id
          ).length

          return (
            <CourseToBuyCard
              course={course}
              selected={selected}
              key={course._id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Catalogue
