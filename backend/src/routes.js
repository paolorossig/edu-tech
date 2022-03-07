import { signUp } from './controller/user.controller.js'
import { getUserSession, login } from './controller/session.controller.js'
import requireUser from './middleware/requireUser.js'
import { createCoursec } from './controller/createcourse.controller.js'
import requirecourse from './middleware/requireCourse.js'
function routes(app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200))

  app.post('/api/users', signUp)
  app.post('/api/sessions', login)
  app.get('/api/sessions', requireUser, getUserSession)

  
  app.post('/api/createcourse', createCoursec)
  app.get('/api/getcourses', requirecourse)

  app.use((req, res) => {
    console.log('catch 404')
    res.send('404')
  })
}

export default routes
