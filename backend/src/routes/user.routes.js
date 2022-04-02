import { Router } from 'express'
import { upload } from '../utils/multer.js'
import { signUp, updateUserHandler } from '../controller/user.controller.js'

const userRouter = Router()

userRouter.post('/api/users', signUp)

userRouter.put(
  '/api/users/:userId',
  upload.single('photoURL'),
  updateUserHandler
)

export default userRouter
