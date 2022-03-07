import { createCourses } from '../service/createcourse.service.js'

export async function createCoursec(req, res) {
  try {
    const course = await createCourses(req.body)
    res.status(201).json({ message: 'Course created', course })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default createCoursec
