import { signUp, updateUserHandler } from './controller/user.controller.js'
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
import {
  createStudentHandler,
  updateStudentHandler
} from './controller/student.controller.js'
import {
  createTeacherHandler,
  updateTeacherHandler
} from './controller/teacher.controller.js'
import { upload } from './utils/multer.js'

function routes(app) {
  app.get('/healthcheck', (req, res) => res.sendStatus(200))

  // app.post('/api/users', upload.none(), signUp)
  app.post('/api/users', signUp)
  app.put('/api/users/:userId', upload.single('photoURL'), updateUserHandler)

  app.post('/api/student', createStudentHandler)
  app.put('/api/student/:studentId', updateStudentHandler)

  app.post('/api/teacher', createTeacherHandler)
  app.put('/api/teacher/:teacherId', updateTeacherHandler)

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
