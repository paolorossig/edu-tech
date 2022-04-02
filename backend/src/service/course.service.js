import Course from '../model/course.model.js'
import { uploads } from '../utils/cloudinary.js'
import log from '../utils/logger.js'

export async function createCourse(input) {
  const uploader = async (path) => await uploads(path, 'course-images')
  try {
    const { url } = await uploader(input.file.path)
    const course = await Course.create({
      ...input.body,
      teacher: input.teacher,
      imageURL: url
    })
    log.child({ course }).info('Course created')
    return course
  } catch (error) {
    throw new Error(error)
  }
}

export async function findCourses(query = {}) {
  const courses = await Course.find(query).populate({
    path: 'category',
    select: 'name'
  })
  return courses
}

export async function deleteCourse(courseId) {
  try {
    await Course.findByIdAndDelete(courseId)
    return 'El curso se eliminó correctamente'
  } catch (error) {
    throw new Error(error)
  }
}
