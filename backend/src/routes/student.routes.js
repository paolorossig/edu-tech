import { Router } from 'express'
import {
  createStudentHandler,
  getStudents,
  updateStudentHandler
} from '../controller/student.controller.js'

const studentRouter = Router()

studentRouter.get('/api/students', getStudents)
studentRouter.post('/api/student', createStudentHandler)
studentRouter.put('/api/student/:studentId', updateStudentHandler)

export default studentRouter
