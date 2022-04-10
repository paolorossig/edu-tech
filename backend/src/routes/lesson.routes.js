import { Router } from 'express'
import {
  createLessonHandler,
  deletelesson,
  getAllLessons,
  getLessonsByCourseId
} from '../controller/lesson.controller.js'
import requireUser from '../middleware/requireUser.js'
import { upload } from '../utils/multer.js'

const lessonRouter = Router()

lessonRouter.get('/api/lessons', getAllLessons)
lessonRouter.get('/api/lessons/:courseId', getLessonsByCourseId)
lessonRouter.post(
  '/api/lessons',
  upload.single('videoURL'),
  createLessonHandler
)

lessonRouter
  .route('/api/lesson/:lessonId')
  .all(requireUser)
  .get(getLessonsByCourseId)
  .delete(deletelesson)

export default lessonRouter
