import { Router } from 'express'
import {
  deleteUserSession,
  getUserSession,
  login
} from '../controller/session.controller.js'
import requireUser from '../middleware/requireUser.js'

const sessionRouter = Router()

sessionRouter.post('/api/sessions', login)

sessionRouter
  .route('/api/sessions')
  .all(requireUser)
  .get(getUserSession)
  .delete(deleteUserSession)

export default sessionRouter
