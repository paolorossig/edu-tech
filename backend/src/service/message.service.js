import Message from '../model/message.model.js'

export async function createMessage(input) {
  try {
    const message = await Message.create(input)
    return message
  } catch (error) {
    throw new Error(error)
  }
}

export async function findMessages(query = {}) {
  try {
    const messages = await Message.find(query).lean()
    return messages
  } catch (error) {
    throw new Error(error)
  }
}
