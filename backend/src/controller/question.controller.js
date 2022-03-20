import {
  createQuestion,
  findQuestion,
  deleteQuestion
} from '../service/question.service'

export async function createCourse(req, res) {
  try {
    const question = await createQuestion(req.body)
    res.status(201).json({ message: 'Question created', question })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getQuestion(req, res) {
  try {
    const question = await findQuestion(req.params.lessonId)
    res.status(200).json({ message: 'Question retrieved', question })
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
