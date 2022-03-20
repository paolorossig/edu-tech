import {
  createQuestion,
  findQuestion,
  deleteQuestion,
  findQuestionByLessonId
} from '../service/question.service.js'

export async function createquestion(req, res) {
  try {
    const question = await createQuestion(req.body)
    res.status(201).json({ message: 'Question created', question })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getQuestion(req, res) {
  try {
    const question = await findQuestion()
    res.status(200).json({ message: 'Question retrieved', question })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getQuestionsByLessonId(req, res) {
  try {
    const questions = await findQuestionByLessonId(req.params.lessonId)
    res.status(200).json({ message: 'Questions retrieved', questions })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function deletequestion(req, res) {
  try {
    await deleteQuestion(req.params.questionId)
    res.status(200).json({ message: 'Question deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
