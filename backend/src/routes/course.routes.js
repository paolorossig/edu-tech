import { Router } from 'express'
import {
  createCourseHandler,
  createCoursesAccess,
  deleteCourseHandler,
  getCourses,
  getUserCourses
} from '../controller/course.controller.js'
import { upload } from '../utils/multer.js'
import requireUser from '../middleware/requireUser.js'

const courseRouter = Router()

courseRouter.get('/api/courses/all', getCourses)
courseRouter.get('/api/courses', requireUser, getUserCourses)

courseRouter.post(
  '/api/courses',
  upload.single('imageURL'),
  createCourseHandler
)
courseRouter.post('/api/courses/buy', requireUser, createCoursesAccess)

courseRouter.delete('/api/courses/:courseId', deleteCourseHandler)

export default courseRouter
