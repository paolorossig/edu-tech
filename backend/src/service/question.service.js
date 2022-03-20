import Question from '../model/question.model.js'

export async function createQuestion(input) {
  try {
    await Question.create(input)
    return 'La pregunta se creo correctamente'
  } catch (error) {
    return 'Ocurrio un error al crear la pregunta'
  }
}

export async function findQuestion(lessonId = null) {
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
