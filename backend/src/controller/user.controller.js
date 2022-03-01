import { createUser } from '../service/user.service.js'

export async function signUp(req, res) {
  try {
    const user = await createUser(req.body)
    res.status(201).json({ message: 'User created', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
