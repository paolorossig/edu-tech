import {
  createAnswer,
  findAnswer,
  deleteAnswer
} from '../service/answer.service'

export async function createanswer(req, res) {
  try {
    const answer = await createAnswer(req.body)
    res.status(201).json({ message: 'Answer created', answer })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getAnswer(req, res) {
  try {
    const answer = await findAnswer()
    res.status(200).json({ message: 'Answer retrieved', answer })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function deleteanswer(req, res) {
  try {
    await deleteAnswer(req.params.questionId)
    res.status(200).json({ message: 'Answer deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
