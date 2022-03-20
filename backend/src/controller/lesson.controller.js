import {
  createLesson,
  findLesson,
  deleteLesson
} from '../service/lesson.service'

export async function createCourse(req, res) {
  try {
    const lesson = await createLesson(req.body)
    res.status(201).json({ message: 'Lesson created', lesson })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getquestion(req, res) {
  try {
    const lesson = await findLesson(req.params.courseId)
    res.status(200).json({ message: 'Lessons retrieved', lesson })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function deletequestion(req, res) {
  try {
    await deleteLesson(req.params.lessonId)
    res.status(200).json({ message: 'Lesson deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
