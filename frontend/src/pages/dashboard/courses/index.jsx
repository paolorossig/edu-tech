import CoursesViewer from '@/features/courses/CoursesViewer'
import { useAllCoursesQuery } from '@/features/courses/CourseApi'

function Courses() {
  const { data, isLoading } = useAllCoursesQuery()

  return <CoursesViewer data={data} isLoading={isLoading} />
}

export default Courses
