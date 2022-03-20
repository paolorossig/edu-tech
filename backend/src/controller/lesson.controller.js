import {
  createLesson,
  findLesson,
  deleteLesson,
  findLessonsByCourseId
} from '../service/lesson.service'

export async function createlesson(req, res) {
  try {
    const lesson = await createLesson(req.body)
    res.status(201).json({ message: 'Lesson created', lesson })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getLessons(req, res) {
  try {
    const lesson = await findLesson()
    res.status(200).json({ message: 'Lessons retrieved', lesson })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getLessonsByCourseId(req, res) {
  try {
    const lesson = await findLessonsByCourseId(req.params.courseId)
    res.status(200).json({ message: 'Lessons retrieved', lesson })
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
