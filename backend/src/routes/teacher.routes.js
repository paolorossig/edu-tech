import { Router } from 'express'
import {
  createTeacherHandler,
  getTeachers,
  updateTeacherHandler
} from '../controller/teacher.controller.js'

const teacherRouter = Router()

teacherRouter.get('/api/teachers', getTeachers)
teacherRouter.post('/api/teacher', createTeacherHandler)
teacherRouter.put('/api/teacher/:teacherId', updateTeacherHandler)

export default teacherRouter
