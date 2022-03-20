import Lesson from '../model/lesson.model.js'

export async function createLesson(input) {
  try {
    await Lesson.create(input)
    return 'La leccion se creo correctamente'
  } catch (error) {
    return 'Ocurrio un error al crear la leccion'
  }
}

export async function findLesson() {
  const lessons = await Lesson.find({})
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
