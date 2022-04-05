import { Router } from 'express'
import {
  createStudentHandler,
  updateStudentHandler,
  getSuscriptionStudent,
  buyCoursesStudentHandler
} from '../controller/student.controller.js'

const studentRouter = Router()

studentRouter.post('/api/student', createStudentHandler)
studentRouter.put('/api/student/:studentId', updateStudentHandler)
studentRouter.post('/api/student/membership/:userId', getSuscriptionStudent)
studentRouter.post('/api/student/buy/courses/:userId', buyCoursesStudentHandler)

export default studentRouter
