import {
  createSession,
  findSessions,
  updateSession
} from '../service/session.service.js'
import { validatePassword } from '../service/user.service.js'
import { signJwt } from '../utils/jwt.js'

export async function login(req, res) {
  const user = await validatePassword(req.body)
  if (!user) return res.status(401).json({ message: 'Credenciales inválidas' })

  const session = await createSession(user._id, req['user-agent'] || '')

  const accessToken = signJwt({ ...user, session: session._id }, 'accessToken')
  const refreshToken = signJwt(
    { ...user, session: session._id },
    'refreshToken'
  )

  return res.send({ accessToken, refreshToken })
}

export async function getUserSession(req, res) {
  const userId = res.locals.user._id

  const sessions = await findSessions({ user: userId, valid: true })

  return res.send(sessions)
}

export async function deleteSession(req, res) {
  const sessionId = res.locals.user.session

  await updateSession({ _id: sessionId }, { valid: false })

  return res.send({ accessToken: null, refreshToken: null })
}
