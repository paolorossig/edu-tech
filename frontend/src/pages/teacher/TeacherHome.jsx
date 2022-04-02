import CoursesViewer from '@/features/courses/CoursesViewer'
import TableTeacher from '@/components/Teacher/TableTeacher'
import { useGetCoursesQuery } from '@/features/courses/CourseSlice'

function TeacherHome() {
  const { data, isLoading } = useGetCoursesQuery()

  return (
    <div className="flex flex-col gap-12">
      <CoursesViewer data={data} isLoading={isLoading} />
      <TableTeacher />
    </div>
  )
}

export default TeacherHome
