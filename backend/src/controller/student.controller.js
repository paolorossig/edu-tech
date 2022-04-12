import { createStudent, updateStudent } from '../service/student.service.js'
import { findUsers } from '../service/user.service.js'

export async function createStudentHandler(req, res) {
  try {
    const student = await createStudent(req.body)
    res.status(201).json({ message: 'Student created', student })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function updateStudentHandler(req, res) {
  try {
    const student = await updateStudent(req.params.studentId, req.body)
    res.status(201).json({ message: 'Student updated', student })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getStudents(req, res) {
  try {
    const students = await findUsers({ role: 'student' })
    res.status(200).json({ message: 'Students retrieved', students })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
