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
    course.populate('category')
    log.child({ course }).info('Course created')
    return course
  } catch (error) {
    throw new Error(error)
  }
}

export async function findCourses() {
  const courses = await Course.find({})
  return courses
}
