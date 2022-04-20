import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useForm } from 'react-hook-form'
import { IoMdSend } from 'react-icons/io'
import {
  useGetCourseQuery,
  useLessonQuestionsQuery,
  useQuestionAnswersQuery,
  useGetLessonQuery
} from '@/features/courses/CourseApi'
import {
  useCreateCommentsMutation,
  useGetCommentsLessonsQuery
} from '@/features/comments/CommentsApi'
import { useAuth } from '@/contexts/auth'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'
import Spinner from '@/components/Spinner'
import 'react-quill/dist/quill.snow.css'
import InputRichText from '@/components/RichText/RichTextInput'

function Answers({ questionId }) {
  const { data: answers, isLoading: isLoadingAnswers } =
    useQuestionAnswersQuery(questionId)
  return isLoadingAnswers ? (
    <div className="mx-auto">
      <Spinner size="medium" />
    </div>
  ) : (
    <div className="ml-3 flex flex-col gap-2">
      {answers.answer.map((option) => {
        const { _id: id, text } = option

        return (
          <div key={id} className="flex items-center gap-4">
            <input type="radio" name="option" id={id} value={id} />
            <label htmlFor={id}>{text}</label>
          </div>
        )
      })}
    </div>
  )
}
function FormularioComentarios({ lessonId }) {
  const [textComment, setTextComment] = useState('')
  const { register, handleSubmit, reset, formState } = useForm()
  const { errors } = formState
  const { auth } = useAuth()
  const [createComments] = useCreateCommentsMutation()

  async function onSubmit(formData) {
    const data = {
      lesson: lessonId,
      ...formData,
      text: textComment,
      user: auth.user._id
    }
    await createComments(data)
    reset()
    setTextComment('')
  }

  return (
    <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
      <InputRichText
        value={textComment}
        onChange={setTextComment}
        placeholder={
          'Escribe aqui tu comentario. El boton de envio se habilitara cuando escribas tu comentario, no olvides seleccionar el tipo de comentario.'
        }
      />
      <div className="mt-2  grid w-full grid-cols-2 gap-4 md:grid-cols-2">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <input
              {...register('type', {
                required: 'Seleccionar un estado es requerido'
              })}
              type="radio"
              value={'aporte'}
            />
            <p className="ml-1"> Aporte</p>
          </div>
          <div className="flex items-center justify-center">
            <input
              {...register('type', {
                required: 'Seleccionar un estado es requerido'
              })}
              type="radio"
              value={'pregunta'}
            />
            <p className="ml-1"> Pregunta</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={textComment === '' || textComment === '<p><br></p>'}
          className="bg-primary-400 hover:bg-primary-900 right-0 mr-3 flex cursor-pointer justify-center rounded-full p-[5px] disabled:cursor-not-allowed disabled:bg-slate-600"
        >
          <p className="mr-3 text-white">Enviar comentario</p>
          <IoMdSend className="text-xl text-white" />
        </button>
      </div>
      {errors.type && (
        <p className="w-full text-red-600">(*){errors.type.message}</p>
      )}
    </form>
  )
}

function Lesson() {
  const { courseId, lessonId } = useParams()

  const { data: lesson } = useGetLessonQuery(lessonId)
  const { data: course } = useGetCourseQuery(courseId)
  const { data: questions } = useLessonQuestionsQuery(lessonId)
  const { data: comments } = useGetCommentsLessonsQuery(lessonId)

  return !lesson && !course && !questions && !comments ? (
    <div className="mx-auto w-full">
      <Spinner size="medium" />
    </div>
  ) : (
    <ContentPageLayout>
      <ContentPageLayout.Title>
        <Link to={`/dashboard/courses/${courseId}`}>
          Cursos / {course?.course?.name}
        </Link>{' '}
        / {lesson?.lessons.title}
      </ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl">
          <ReactPlayer
            url={lesson?.lessons.videoURL}
            controls
            width={'100%'}
            height={'100%'}
          />
        </div>
        <h1 className="my-6">{lesson?.lessons.title}</h1>
        {questions?.questions.length > 0 && (
          <form className="flex flex-col gap-6">
            <h2 className="text-gray-500">Cuestionario:</h2>
            <ul className="flex w-full flex-col gap-6 md:m-8">
              {questions.questions.map((item, index) => {
                const { _id: id, description } = item

                return (
                  <li key={id}>
                    <div className="mb-2 flex items-center gap-4">
                      <div className="grid h-10 w-10 place-content-center rounded-full bg-slate-400 text-xl text-white">
                        {index + 1}
                      </div>
                      <h3 className="flex-auto font-extrabold">
                        {description}
                      </h3>
                    </div>
                    {/* List answers with radio btn */}
                    <Answers questionId={id} />
                  </li>
                )
              })}
            </ul>
            {/* TODO: HANDLE BUTTON TO VALIDATE ANSWES */}
            <Button type="submit" color="primary" className="mx-auto">
              Comprobar
            </Button>
          </form>
        )}
        <h2 className="mt-5 text-gray-500">Comentarios:</h2>
        <FormularioComentarios lessonId={lessonId} />
        {comments?.comments?.map((comment, index) => (
          <div
            key={index}
            className="mb-4 flex flex-col  items-center justify-center rounded-lg bg-white p-3 shadow-lg md:items-start"
          >
            <div className="mr-2 flex flex-row justify-center">
              <img
                alt="avatar"
                width="48"
                height="48"
                className="mr-4 mb-4 h-10 w-10 rounded-full shadow-lg"
                src={comment.user.photoURL}
              />
              <h3 className="text-center text-lg font-semibold text-purple-600 md:text-left ">
                {comment.user.firstName} {comment.user.lastName}{' '}
                {comment.user.surName}
              </h3>
              <p
                className={`mr-1 mb-2 ml-5 rounded-full ${
                  comment.type === 'aporte' ? 'bg-orange-500' : 'bg-indigo-600'
                } flex-end 
                    h-6 px-2 py-1
                    text-xs font-bold text-white opacity-90 duration-300
                    md:mr-2 md:px-4`}
              >
                {comment.type.toUpperCase()}
              </p>
            </div>
            <div
              className="post__description"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            />
          </div>
        ))}
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default Lesson
