import { useParams, Link } from 'react-router-dom'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'

import { cursos } from '@/data/cursos.json'

function Course() {
  const { courseId } = useParams()
  const { name, lessons } = cursos.find((course) => course.id === courseId)

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>
        <Link to="/dashboard/courses">Cursos</Link> / {name}
      </ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <h2 className="text-gray-500">Contenido:</h2>
        <ul className="m-8 flex flex-col gap-8">
          {lessons.map((lesson) => {
            const { id: lessonId, title, length, completed, exercises } = lesson

            const bgColor =
              completed === exercises
                ? 'bg-green-400'
                : completed === 0
                ? 'bg-gray-300'
                : 'bg-black'

            return (
              <Link to={`${lessonId}`} key={lessonId}>
                <li className="flex items-center gap-4 md:gap-8">
                  <div
                    className={`${bgColor} flex h-14 w-14 items-center justify-center rounded-full text-3xl text-white md:h-20 md:w-20`}
                  >
                    {lessonId}
                  </div>
                  <div className="flex-1">
                    <h3>{title}</h3>
                    <p className="text-gray-500">{length}</p>
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
