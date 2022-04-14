import { Router } from 'express'
import {
  createQuestionHandler,
  deletequestion,
  getQuestion,
  getQuestionsByLessonId
} from '../controller/question.controller.js'
import requireUser from '../middleware/requireUser.js'

const questionRouter = Router()

questionRouter.get('/api/question', getQuestion)
questionRouter.post('/api/question', createQuestionHandler)
lessonRouter.post(
  '/api/question', createQuestionHandler
)

questionRouter
  .route('/api/question/:questionId')
  .all(requireUser)
  .get(getQuestionsByLessonId)
  .delete(deletequestion)

export default questionRouter
