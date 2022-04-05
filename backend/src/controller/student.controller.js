import {
  createStudent,
  updateStudent,
  buySuscriptionStudent,
  buyCoursesStudent
} from '../service/student.service.js'

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

export async function getSuscriptionStudent(req, res) {
  try {
    const student = await buySuscriptionStudent(req.params.userId)
    res.status(200).json({ message: 'Suscription actived', student })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function buyCoursesStudentHandler(req, res) {
  try {
    const student = await buyCoursesStudent(req.params.userId, req.body.courses)
    res.status(200).json({ message: 'Course(s) actived', student })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
