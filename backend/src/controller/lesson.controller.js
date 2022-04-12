import {
  createLesson,
  findLesson,
  deleteLesson
} from '../service/lesson.service.js'

export async function createLessonHandler(req, res) {
  try {
    const lesson = await createLesson(req)
    res.status(201).json({ message: 'Lesson created', lesson })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getAllLessons(req, res) {
  try {
    const lessons = await findLesson()
    res.status(200).json({ message: 'Lessons retrieved', lessons })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getLessonsByCourseId(req, res) {
  try {
    const lessons = await findLesson({ course: req.params.courseId })
    res.status(200).json({ message: 'Lessons retrieved', lessons })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function deletelesson(req, res) {
  try {
    await deleteLesson(req.params.lessonId)
    res.status(200).json({ message: 'Lesson deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
