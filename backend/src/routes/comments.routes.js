import { Router } from 'express'
import {
  createComment,
  getComments
} from '../controller/comments.controller.js'

const commentsRouter = Router()

commentsRouter.post('/api/comments', createComment)
commentsRouter.get('/api/comments/:lessonId', getComments)

export default commentsRouter
