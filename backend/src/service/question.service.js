import Question from '../model/question.model.js'

export async function createQuestion(input) {
  const question = await Question.create(input)
  return question
}

export async function findQuestion() {
  const questions = await Question.find({})
  return questions
}

export async function findQuestionByLessonId(lessonId) {
  const questions = await Question.find({ lessonId: lessonId })
  return questions
}

export async function deleteQuestion(questionId) {
  try {
    await Question.findByIdAndDelete(questionId)
    return 'La pregunta se elimino correctamente'
  } catch (error) {
    return 'Ocurrio un error al eliminar la pregunta'
  }
}
