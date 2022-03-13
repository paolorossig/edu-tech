import { useParams, Link } from 'react-router-dom'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'

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
        <div className=" flex justify-center">
          {/* VIDEO PLACE */}
          <img
            src="https://images.wondershare.com/recoverit/article/video-repair/fix-black-screen-while-playing-video.jpg"
            alt=""
            width={'80%'}
          />
        </div>
        <h1 className=" my-6">{title}</h1>
        {questions && (
          <>
            <h2 className="text-gray-500">Preguntas:</h2>
            <ul className="m-8 flex w-full flex-col">
              {questions.map((item, index) => {
                const { id, question, answers } = item
                return (
                  <li key={id} className="flex items-center gap-8">
                    <div
                      className={
                        ' flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 text-xl text-white'
                      }
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className=" font-extrabold">{question}</h3>
                      {/* List answers with radio btn */}
                      {answers.map((answer) => {
                        const { id, text } = answer
                        return (
                          <div key={id} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="answer"
                              id={id}
                              value={id}
                              className="mr-2"
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
            <div className="flex w-full justify-center">
              <button className="rounded-full bg-green-400 py-2 px-4 font-bold text-white">
                {/* TO DO HANDLE BUTTON TO VALIDATE ANSWES */}
                Comprobar
              </button>
            </div>
          </>
        )}
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default Lesson
