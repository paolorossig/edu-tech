import { useParams, Link } from 'react-router-dom'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'
import {
  useGetCourseQuery,
  useLessonQuestionsQuery,
  useQuestionAnswersQuery,
  useGetLessonQuery
} from '@/features/courses/CourseApi'
import Spinner from '@/components/Spinner'

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

function Lesson() {
  const { courseId, lessonId } = useParams()
  const { data: lesson, isLoading: isLoadingLesson } =
    useGetLessonQuery(lessonId)
  const { data: course, isLoading: isLoadingCourse } =
    useGetCourseQuery(courseId)
  const { data: questions, isLoading: isLoadingQuestion } =
    useLessonQuestionsQuery(lessonId)

  return isLoadingCourse && isLoadingLesson && isLoadingQuestion ? (
    <div className="mx-auto">
      <Spinner size="medium" />
    </div>
  ) : (
    <ContentPageLayout>
      <ContentPageLayout.Title>
        <Link to={`/dashboard/courses/${courseId}`}>
          Cursos / {course?.course?.name}
        </Link>{' '}
        / {lesson.lessons.title}
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
        <h1 className="my-6">{lesson.lessons.title}</h1>
        {questions && (
          <form className="flex flex-col gap-6">
            <h2 className="text-gray-500">Preguntas:</h2>
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
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default Lesson
