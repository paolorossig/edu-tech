import CoursesViewer from '@/features/courses/CoursesViewer'
import { useAllCoursesQuery } from '@/features/courses/CourseSlice'

function Courses() {
  const { data, isLoading } = useAllCoursesQuery()

  return <CoursesViewer data={data} isLoading={isLoading} />
}

export default Courses
