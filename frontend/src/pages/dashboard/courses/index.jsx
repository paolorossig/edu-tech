import CoursesViewer from '@/features/courses/CoursesViewer'
import { useUserCoursesQuery } from '@/features/courses/CourseApi'

function Courses() {
  const { data, isLoading } = useUserCoursesQuery()

  return (
    <>
      <CoursesViewer data={data} isLoading={isLoading} />
    </>
  )
}

export default Courses
