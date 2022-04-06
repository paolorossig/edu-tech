import { Router } from 'express'
import {
  createTeacherHandler,
  getTeacherCourses,
  getTeachers,
  updateTeacherHandler
} from '../controller/teacher.controller.js'

const teacherRouter = Router()

teacherRouter.get('/api/teachers', getTeachers)
teacherRouter.post('/api/teacher', createTeacherHandler)
teacherRouter.put('/api/teacher/:teacherId', updateTeacherHandler)
teacherRouter.get('/api/teacher/:teacherId/courses', getTeacherCourses)

export default teacherRouter
