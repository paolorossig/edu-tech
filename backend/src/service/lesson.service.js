import Lesson from '../model/lesson.model.js'

export async function createLesson(input) {
  const lesson = await Lesson.create(input)
  return lesson
}

export async function findLesson() {
  const lessons = await Lesson.find({})
  return lessons
}

export async function findLessonsByCourseId(courseId) {
  const lessons = await Lesson.find({ courseId })
  return lessons
}

export async function deleteLesson(lessonId) {
  try {
    await Lesson.findByIdAndDelete(lessonId)
    return 'La leccion se elimino correctamente'
  } catch (error) {
    return 'Ocurrio un error al eliminar la leccion'
  }
}
