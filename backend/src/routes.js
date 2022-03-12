import { signUp } from './controller/user.controller.js'
import {
  deleteUserSession,
  getUserSession,
  login
} from './controller/session.controller.js'
import requireUser from './middleware/requireUser.js'
import { createCourse, getCourses } from './controller/course.controller.js'
import log from './utils/logger.js'

function routes(app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200))

  app.post('/api/users', signUp)
  app.post('/api/sessions', login)
  app.get('/api/sessions', requireUser, getUserSession)
  app.delete('/api/sessions', requireUser, deleteUserSession)

  app.post('/api/courses', createCourse)
  app.get('/api/courses', getCourses)

  app.use((req, res) => {
    log.error('catch 404')
    res.send('404')
  })
}

export default routes
