import jwt from 'jsonwebtoken'
import log from './logger.js'

const { PRIVATE_KEY, PUBLIC_KEY, ACCESS_TOKEN_TTL, REFRESH_TOKEN_TTL } =
  process.env

export function signJwt(object, tokenType) {
  const expiresIn =
    tokenType === 'accessToken' ? ACCESS_TOKEN_TTL : REFRESH_TOKEN_TTL

  return jwt.sign(object, PRIVATE_KEY, {
    algorithm: 'RS256',
    expiresIn
  })
}

export function verifyJwt(token) {
  try {
    const decoded = jwt.verify(token, PUBLIC_KEY)
    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error) {
    log.child({ error }).error('Error in verifyJwt step')
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null
    }
  }
}
