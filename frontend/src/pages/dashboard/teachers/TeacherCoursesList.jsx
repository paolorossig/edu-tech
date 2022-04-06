import {
  getTeacherCourses,
  selectTeacherCourses
} from '@/features/teachers/teacherSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function TeacherCoursesList() {
  const dispatch = useDispatch()
  const { teacherId } = useParams()
  const allTeacherCourses = useSelector(selectTeacherCourses)
  const courses = allTeacherCourses[teacherId]
  if (!courses) dispatch(getTeacherCourses(teacherId))

  return (
    <>
      <h2 className="pb-4 text-2xl text-slate-600">Cursos dictados:</h2>
      <ul className="flex flex-col gap-3">
        {courses?.map((course) => (
          <li key={course._id}>
            <Link to="/dashboard/courses">
              <article className="flex items-center gap-2 border-b p-2">
                <img
                  alt="curso"
                  src={course.imageURL}
                  className="h-10 w-16 object-cover"
                />
                <span className="flex-auto">{course.name}</span>
              </article>
            </Link>
          </li>
        ))}
        {Array.from({ length: 15 }, (v, i) => i).map((e, index) => (
          <li key={index}>
            <Link to="/dashboard/courses">
              <article className="flex items-center gap-2 border-b p-2">
                <img
                  alt="curso"
                  src="https://edteam-media.s3.amazonaws.com/courses/original/262e68b3-eea2-43f2-9e9a-febc106a8295.png"
                  className="h-10 w-16 object-cover"
                />
                <span className="flex-auto">CSS Avanzado</span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TeacherCoursesList
