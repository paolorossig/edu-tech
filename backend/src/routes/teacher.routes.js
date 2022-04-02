import { Router } from 'express'
import {
  createTeacherHandler,
  updateTeacherHandler
} from '../controller/teacher.controller.js'

const teacherRouter = Router()

teacherRouter.post('/api/teacher', createTeacherHandler)
teacherRouter.put('/api/teacher/:teacherId', updateTeacherHandler)

export default teacherRouter
