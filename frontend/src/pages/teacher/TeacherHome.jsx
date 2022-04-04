import CoursesViewer from '@/features/courses/CoursesViewer'
import TableTeacher from '@/components/Teacher/TableTeacher'
import { useUserCoursesQuery } from '@/features/courses/CourseApi'

function TeacherHome() {
  const { data, isLoading } = useUserCoursesQuery()

  return (
    <div className="flex flex-col gap-12">
      <CoursesViewer data={data} isLoading={isLoading} />
      <TableTeacher />
    </div>
  )
}

export default TeacherHome
