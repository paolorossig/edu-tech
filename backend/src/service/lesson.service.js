import Lesson from '../model/lesson.model.js'

export async function createLessons(input) {
  try {
    await Lesson.create(input)
    return 'La leccion se creo correctamente'
  } catch (error) {
    return 'Ocurrio un error al crear la leccion'
  }
}

export async function findLessons(courseId = null) {
  const lessons = await Lesson.find({ courseId: courseId })
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
