import { signUp, updateUserHandler } from './controller/user.controller.js'
import { getUserSession, login } from './controller/session.controller.js'
import log from './utils/logger.js'
import { deleteUserSession } from './controller/session.controller.js'
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
import {
  createCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
  getCategories
} from './controller/category.controller.js'
import {
  uploadVideo,
  oauth2callback,
  uploadVideoFile
} from './controller/video.controller.js'

function routes(app) {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the EduTECH API',
      node_env: process.env.NODE_ENV,
      client_url: process.env.CLIENT_URL
    })
  )

  app.post('/api/users', signUp)
  app.put('/api/users/:userId', upload.single('photoURL'), updateUserHandler)

  app.post('/api/student', createStudentHandler)
  app.put('/api/student/:studentId', updateStudentHandler)

  app.post('/api/teacher', createTeacherHandler)
  app.put('/api/teacher/:teacherId', updateTeacherHandler)

  app.post('/api/sessions', login)
  app.get('/api/sessions', requireUser, getUserSession)
  app.delete('/api/sessions', requireUser, deleteUserSession)

  app.post('/api/courses', upload.single('imageURL'), createCourseHandler)
  app.get('/api/courses', getCourses)

  app.post('/upload', uploadVideoFile, uploadVideo)
  app.get('/oauth2callback', oauth2callback)

  app.post('/api/categories', createCategoryHandler)
  app.get('/api/categories', getCategories)
  app.put('/api/categories/:categoryId', updateCategoryHandler)
  app.delete('/api/categories/:categoryId', deleteCategoryHandler)

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
    log.error('catch 404')
    res.send('404')
  })
}

export default routes
