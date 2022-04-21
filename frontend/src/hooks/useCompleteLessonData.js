import {
  useGetLessonQuery,
  useLessonQuestionsQuery
} from '@/features/courses/CourseApi'
import { useGetCommentsLessonsQuery } from '@/features/comments/CommentsApi'

function useCompleteLessonData(lessonId) {
  const { data: lesson } = useGetLessonQuery(lessonId)
  const { data: questions } = useLessonQuestionsQuery(lessonId)
  const { data: comments } = useGetCommentsLessonsQuery(lessonId)

  if (!lesson || !questions || !comments) return

  return {
    ...lesson.lessons,
    questions: questions.questions,
    comments: comments.comments
  }
}

export default useCompleteLessonData
