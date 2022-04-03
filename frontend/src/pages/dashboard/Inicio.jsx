import Badge from '@/components/Badge'
import CoursesViewer from '@/features/courses/CoursesViewer'
import { useGetCoursesQuery } from '@/features/courses/CourseSlice'
import { mentores } from '@/data/mentores.json'

function Inicio() {
  const { data, isLoading } = useGetCoursesQuery()

  return (
    <div className="flex flex-col gap-12">
      <CoursesViewer data={data} isLoading={isLoading} />
      <section>
        <h1 className="mb-8">Mentores Disponibles</h1>
        <div className="flex flex-wrap gap-8">
          {mentores.map((mentor) => (
            <Badge element={mentor} key={mentor.id} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Inicio
