import Lesson from '../model/lesson.model.js'
import { uploads } from '../utils/cloudinary.js'
import log from '../utils/logger.js'

export async function createLesson(input) {
  console.log(input)
  const uploader = async (path) => await uploads(path, 'lessons-videos')
  try {
    const { url } = await uploader(input.file.path)
    const lesson = await Lesson.create({
      ...input.body,
      urlVideo: url
    })
    log.child({ lesson }).info('Lesson created')
    return lesson
  } catch (error) {
    throw new Error('error: ' + error)
  }
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
