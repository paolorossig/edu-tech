import { createStudent, updateStudent } from '../service/student.service.js'
import { sendMail } from '../utils/mailer.js'

export async function createStudentHandler(req, res) {
  try {
    const student = await createStudent(req.body)
    await sendMail(student.user)
    res.status(201).json({ message: 'Student created', student })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function updateStudentHandler(req, res) {
  try {
    const student = await updateStudent(req.params.idUser, req.body)
    res.status(201).json({ message: 'Student updated', student })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
