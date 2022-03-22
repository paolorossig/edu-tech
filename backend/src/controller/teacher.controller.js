import { createTeacher, updateTeacher } from '../service/teacher.service.js'
import { sendMailConfigUser } from '../utils/mailer.js'
export async function createTeacherHandler(req, res) {
  try {
    const teacher = await createTeacher(req.body)
    await sendMailConfigUser(teacher.user)
    res.status(201).json({ message: 'Teacher created', teacher })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function updateTeacherHandler(req, res) {
  try {
    const teacher = await updateTeacher(req.params.teacherId, req.body)
    res.status(201).json({ message: 'Teacher updated', teacher })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
