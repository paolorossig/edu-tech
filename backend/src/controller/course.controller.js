import {
  createCourse,
  deleteCourse,
  findCourses
} from '../service/course.service.js'

export async function createCourseHandler(req, res) {
  try {
    const userId = res.locals.user._id
    const course = await createCourse({ ...req, teacher: userId })

    res.status(201).json({ message: 'Course created', course })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getCourses(req, res) {
  try {
    const courses = await findCourses()
    res.status(200).json({ message: 'Courses retrieved', courses })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getUserCourses(req, res) {
  try {
    const userId = res.locals.user._id
    const courses = await findCourses({ teacher: userId })
    res.status(200).json({ message: 'Courses retrieved', courses })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function deleteCourseHandler(req, res) {
  try {
    const message = await deleteCourse(req.params.courseId)
    res.status(200).json({ message })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
