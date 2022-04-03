import { Router } from 'express'
import {
  createStudentHandler,
  updateStudentHandler
} from '../controller/student.controller.js'

const studentRouter = Router()

studentRouter.post('/api/student', createStudentHandler)
studentRouter.put('/api/student/:studentId', updateStudentHandler)

export default studentRouter
