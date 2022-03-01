import Session from '../model/session.model.js'
import { signJwt, verifyJwt } from '../utils/jwt.js'
import { findUser } from './user.service.js'

export async function createSession(userId, userAgent) {
  const session = await Session.create({ user: userId, userAgent })

  return session.toJSON()
}

export async function findSessions(query) {
  return Session.find(query).lean()
}

export async function updateSession(query, update) {
  return Session.updateOne(query, update)
}

export async function reIssueAccessToken({ refreshToken }) {
  const { decoded } = verifyJwt(refreshToken, 'refreshTokenPublicKey')
  if (!decoded || !decoded?.session) return false

  const session = await Session.findById(decoded.session)
  if (!session || !session.valid) return false

  const user = await findUser({ _id: session.user })
  if (!user) return false

  const accessToken = signJwt({ ...user, session: session._id }, 'accessToken')

  return accessToken
}
