import CoursesViewer from '@/features/courses/CoursesViewer'
import { useUserCoursesQuery } from '@/features/courses/CourseApi'
import TeachersAvailableList from '@/features/teachers/TeachersAvailableList'

function Inicio() {
  const { data, isLoading } = useUserCoursesQuery()

  return (
    <div className="flex flex-col gap-12">
      <CoursesViewer data={data} isLoading={isLoading} />
      <TeachersAvailableList />
    </div>
  )
}

export default Inicio
