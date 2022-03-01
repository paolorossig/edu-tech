import { signUp } from './controller/user.controller.js'
import { getUserSession, login } from './controller/session.controller.js'
import requireUser from './middleware/requireUser.js'

function routes(app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200))

  app.post('/api/users', signUp)
  app.post('/api/sessions', login)
  app.get('/api/sessions', requireUser, getUserSession)

  app.use((req, res) => {
    console.log('catch 404')
    res.send('404')
  })
}

export default routes
