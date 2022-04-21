import Comments from '../model/comments.model.js'

export async function createComments(input) {
  try {
    await Comments.create(input)
    return Comments
  } catch (error) {
    throw new Error(error)
  }
}

export async function findCommentsByLesson(lessonId) {
  const comments = await Comments.find({ lesson: lessonId })
  for (const comment of comments) {
    await comment.populate('user')
  }
  return comments
}
