import { createUser, deleteUser, updateUser } from '../service/user.service.js'
import { sendWelcomeMail } from '../utils/mailer.js'

export async function signUp(req, res) {
  try {
    const user = await createUser(req.body)
    res.status(201).json({ message: 'User created', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function updateUserHandler(req, res) {
  try {
    const user = await updateUser(req.params.userId, req)
    sendWelcomeMail(user)
    res.status(201).json({ message: 'User updated', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function deleteUserHandler(req, res) {
  try {
    const message = await deleteUser(req.params.userId)
    res.status(201).json({ message })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
