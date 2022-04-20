import { useParams, Link } from 'react-router-dom'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'

import { getTimeString } from '@/utils/time'
import {
  useCourseLessonsQuery,
  useGetCourseQuery
} from '@/features/courses/CourseApi'
import Spinner from '@/components/Spinner'

function Course() {
  const { courseId } = useParams()
  const { data: lessons } = useCourseLessonsQuery(courseId)
  const { data: course } = useGetCourseQuery(courseId)

  return !lessons && !course ? (
    <div className="mx-auto">
      <Spinner size="medium" />
    </div>
  ) : (
    <ContentPageLayout>
      <ContentPageLayout.Title>
        <Link to="/dashboard/courses">Cursos</Link> / {course?.course?.name}
      </ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <h2 className="text-gray-500">Contenido:</h2>
        <ul className="m-8 flex flex-col gap-8">
          {lessons.lessons.map((lesson, index) => {
            const {
              _id: lessonId,
              title,
              duration,
              completed = 0,
              exercises = 2
            } = lesson

            return (
              <Link to={`${lessonId}`} key={lessonId}>
                <li className="flex items-center gap-4 md:gap-8">
                  <div
                    className={`${
                      completed === exercises
                        ? 'bg-green-400'
                        : completed === 0
                        ? 'bg-gray-300'
                        : 'bg-black'
                    } flex h-14 w-14 items-center justify-center rounded-full text-3xl text-white md:h-20 md:w-20`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3>{title}</h3>
                    <p className="text-gray-500">{getTimeString(duration)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">
                      {completed}/{exercises}
                    </p>
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default Course
