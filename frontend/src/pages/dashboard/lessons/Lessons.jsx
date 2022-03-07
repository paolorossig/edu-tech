import { useParams, Link } from 'react-router-dom'

import { cursos } from '@/data/cursos.json'

function Lesson() {
  const { cursoId, lessonId } = useParams()
  const { name, lessons } = cursos.find((curso) => curso.id === cursoId)
  const { title, questions } = lessons.find((leccion) => leccion.id == lessonId)

  return (
    <div className="flex flex-1 flex-col overflow-hidden px-8">
      <h1 className="my-4 pb-4">
        <Link to={`/dashboard/cursos/${cursoId}`}>Cursos / {name}</Link> /
        {' Lección '}
        {lessonId}
      </h1>
      <div className="mb-[-50px] flex-1 overflow-hidden rounded-[50px] bg-white p-[50px]">
        <div className=" flex justify-center">
          {/* VIDEO PLACE */}
          <img
            src="https://images.wondershare.com/recoverit/article/video-repair/fix-black-screen-while-playing-video.jpg"
            alt=""
            width={'80%'}
          />
        </div>
        <h1 className=" my-6">{title}</h1>
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
      </div>
    </div>
  )
}

export default Lesson
