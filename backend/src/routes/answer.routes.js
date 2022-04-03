import { Router } from 'express'
import {
  createanswer,
  deleteanswer,
  getAnswer,
  getAnswesByQuestionId
} from '../controller/answer.controller.js'
import requireUser from '../middleware/requireUser.js'

const answerRouter = Router()

answerRouter.get('/api/answer', getAnswer)
answerRouter.post('/api/answer', requireUser, createanswer)

answerRouter
  .route('/api/answer/:answerId')
  .all(requireUser)
  .get(getAnswesByQuestionId)
  .delete(deleteanswer)

export default answerRouter
