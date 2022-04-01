import { Router } from 'express'
import {
  createCourseHandler,
  getCourses
} from '../controller/course.controller.js'
import { upload } from '../utils/multer.js'

const courseRouter = Router()

courseRouter.get('/api/courses', getCourses)

courseRouter.post(
  '/api/courses',
  upload.single('imageURL'),
  createCourseHandler
)

export default courseRouter
