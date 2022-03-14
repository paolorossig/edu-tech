import { useParams, Link } from 'react-router-dom'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'

import { cursos } from '@/data/cursos.json'

function Lesson() {
  const { courseId, lessonId } = useParams()
  const { name, lessons } = cursos.find((curso) => curso.id === courseId)
  const { title, questions } = lessons.find((leccion) => leccion.id == lessonId)

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>
        <Link to={`/dashboard/courses/${courseId}`}>Cursos / {name}</Link> /
        Lección {lessonId}
      </ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <div className="flex justify-center">
          {/* VIDEO PLACE */}
          <img
            src="https://images.wondershare.com/recoverit/article/video-repair/fix-black-screen-while-playing-video.jpg"
            alt=""
            width={'80%'}
          />
        </div>
        <h1 className="my-6">{title}</h1>
        {questions && (
          <form className="flex flex-col gap-6">
            <h2 className="text-gray-500">Preguntas:</h2>
            <ul className="flex w-full flex-col gap-6 md:m-8">
              {questions.map((item, index) => {
                const { id, question, answers } = item

                return (
                  <li key={id}>
                    <div className="mb-2 flex items-center gap-4">
                      <div className="grid h-10 w-10 place-content-center rounded-full bg-slate-400 text-xl text-white">
                        {index + 1}
                      </div>
                      <h3 className="flex-auto font-extrabold">{question}</h3>
                    </div>
                    {/* List answers with radio btn */}
                    <div className="ml-3 flex flex-col gap-2">
                      {answers.map((answer) => {
                        const { id, text } = answer

                        return (
                          <div key={id} className="flex items-center gap-4">
                            <input
                              type="radio"
                              name="answer"
                              id={id}
                              value={id}
                            />
                            <label htmlFor={id}>{text}</label>
                          </div>
                        )
                      })}
                    </div>
                  </li>
                )
              })}
            </ul>
            {/* TO DO HANDLE BUTTON TO VALIDATE ANSWES */}
            <Button type="submit" color="primary" className="mx-auto">
              Comprobar
            </Button>
          </form>
        )}
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default Lesson
