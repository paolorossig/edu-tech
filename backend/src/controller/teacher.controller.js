import { createTeacher, updateTeacher } from '../service/teacher.service.js'
import { findUsers } from '../service/user.service.js'
import { findCourses } from '../service/course.service.js'

export async function createTeacherHandler(req, res) {
  try {
    const teacher = await createTeacher(req.body)
    res.status(201).json({ message: 'Teacher created', teacher })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function updateTeacherHandler(req, res) {
  try {
    const teacher = await updateTeacher(req.params.teacherId, req.body)
    res.status(200).json({ message: 'Teacher updated', teacher })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getTeachers(req, res) {
  try {
    const teachers = await findUsers({ role: 'teacher' })
    res.status(200).json({ message: 'Teachers retrieved', teachers })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getTeacherCourses(req, res) {
  try {
    const courses = await findCourses({ teacher: req.params.teacherId })
    res.status(200).json({ message: 'Teacher courses retrieved', courses })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
