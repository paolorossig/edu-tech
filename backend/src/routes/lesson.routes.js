import { Router } from 'express'
import {
  createLessonHandler,
  deletelesson,
  getLessons,
  getLessonsByCourseId
} from '../controller/lesson.controller.js'
import requireUser from '../middleware/requireUser.js'

const lessonRouter = Router()

lessonRouter.get('/api/lesson', getLessons)
lessonRouter.post('/api/lesson', requireUser, createLessonHandler)

lessonRouter
  .route('/api/lesson/:lessonId')
  .all(requireUser)
  .get(getLessonsByCourseId)
  .delete(deletelesson)

export default lessonRouter
