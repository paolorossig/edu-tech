import {
  createComments,
  findCommentsByLesson
} from '../service/comments.service.js'

export async function createComment(req, res) {
  try {
    const comment = await createComments(req.body)
    res.status(201).json({ message: 'Comment created', comment })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getComments(req, res) {
  try {
    const comments = await findCommentsByLesson(req.params.lessonId)
    res.status(200).json({ message: 'Comments retrieved', comments })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
