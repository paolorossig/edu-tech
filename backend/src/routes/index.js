import log from '../utils/logger.js'
import userRouter from './user.routes.js'
import categoryRouter from './category.routes.js'
import studentRouter from './student.routes.js'
import teacherRouter from './teacher.routes.js'
import sessionRouter from './session.routes.js'
import courseRouter from './course.routes.js'
import lessonRouter from './lesson.routes.js'
import questionRouter from './question.routes.js'
import answerRouter from './answer.routes.js'
import messageRouter from './message.routes.js'
import {
  oauth2callback,
  uploadVideo,
  uploadVideoFile
} from '../controller/video.controller.js'

function routes(app) {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the EduTECH API',
      node_env: process.env.NODE_ENV,
      client_url: process.env.CLIENT_URL
    })
  )

  app.use(userRouter)
  app.use(sessionRouter)
  app.use(studentRouter)
  app.use(teacherRouter)
  app.use(categoryRouter)
  app.use(courseRouter)
  app.use(lessonRouter)
  app.use(questionRouter)
  app.use(answerRouter)
  app.use(messageRouter)

  app.post('/upload', uploadVideoFile, uploadVideo)
  app.get('/oauth2callback', oauth2callback)

  app.use((req, res) => {
    log.error('catch 404')
    res.send('404')
  })
}

export default routes
