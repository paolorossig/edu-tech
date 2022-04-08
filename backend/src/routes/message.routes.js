import { Router } from 'express'
import {
  createMessageHandler,
  getUserMessages
} from '../controller/message.controller.js'

const messageRouter = Router()

messageRouter.get('/api/messages/:userId', getUserMessages)
messageRouter.post('/api/messages', createMessageHandler)

export default messageRouter
