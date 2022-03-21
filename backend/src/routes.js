import { signUp } from './controller/user.controller.js'
import { getUserSession, login } from './controller/session.controller.js'
import requireUser from './middleware/requireUser.js'
import {
  createCourseHandler,
  getCourses
} from './controller/course.controller.js'
import {
  createLessonHandler,
  getLessons,
  deletelesson,
  getLessonsByCourseId
} from './controller/lesson.controller.js'
import {
  createQuestionHandler,
  deletequestion,
  getQuestion,
  getQuestionsByLessonId
} from './controller/question.controller.js'
import {
  createanswer,
  deleteanswer,
  getAnswer,
  getAnswesByQuestionId
} from './controller/answer.controller.js'

function routes(app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200))

  app.post('/api/users', signUp)
  app.post('/api/sessions', login)
  app.get('/api/sessions', requireUser, getUserSession)

  app.post('/api/courses', createCourseHandler)
  app.get('/api/courses', getCourses)

  app.post('/api/lesson', createLessonHandler)
  app.get('/api/lesson', getLessons)
  app.get('/api/lesson/:lessonId', getLessonsByCourseId)
  app.delete('/api/lesson/:lessonId', deletelesson)

  app.post('/api/question', createQuestionHandler)
  app.get('/api/question', getQuestion)
  app.get('/api/question/:lessonId', getQuestionsByLessonId)
  app.delete('/api/question/:questionId', deletequestion)

  app.post('/api/answer', createanswer)
  app.get('/api/answer', getAnswer)
  app.get('/api/answer/:questionId', getAnswesByQuestionId)
  app.delete('/api/answer/:answerId', deleteanswer)

  app.use((req, res) => {
    console.log('catch 404')
    res.send('404')
  })
}

export default routes
