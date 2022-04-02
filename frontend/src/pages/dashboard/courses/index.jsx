import CoursesViewer from '@/features/courses/CoursesViewer'
import { useGetCoursesQuery } from '@/features/courses/CourseSlice'

function Courses() {
  const { data, isLoading } = useGetCoursesQuery()

  return <CoursesViewer data={data} isLoading={isLoading} />
}

export default Courses
