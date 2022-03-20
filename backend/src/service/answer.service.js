import Answer from '../model/answer.model.js'

export async function createAnswer(input) {
  try {
    await Answer.create(input)
    return 'La respuesta se creo correctamente'
  } catch (error) {
    return 'Ocurrio un error al crear la respuesta'
  }
}

export async function findAnswer(questionId = null) {
  const answers = await Answer.find({ questionId: questionId })
  return answers
}

export async function deleteAnswer(answerId) {
  try {
    await Answer.findByIdAndDelete(answerId)
    return 'La respuesta se elimino correctamente'
  } catch (error) {
    return 'Ocurrio un error al eliminar la respuesta'
  }
}
