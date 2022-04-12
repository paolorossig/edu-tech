import { createMessage, findMessages } from '../service/message.service.js'

export async function createMessageHandler(req, res) {
  try {
    await createMessage(req.body)
    res.status(201).json({ message: 'Message created' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function getUserMessages(req, res) {
  try {
    const messages = await findMessages({
      $or: [{ from: req.params.userId }, { to: req.params.userId }]
    })
    res.status(201).json({ message: 'User messages retrieved', messages })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
