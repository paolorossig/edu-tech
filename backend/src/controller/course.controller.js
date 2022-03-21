import { createCourse, findCourses } from '../service/course.service.js'

export async function createCourseHandler(req, res) {
  try {
    const course = await createCourse(req.body)
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
