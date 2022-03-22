import log from '../utils/logger.js'
import { verifyJwt } from '../utils/jwt.js'
import { reIssueAccessToken } from '../service/session.service.js'

const deserializeUser = async (req, res, next) => {
  log.trace('In deserializeUser------------')
  const accessToken = req.headers.authorization?.replace('Bearer', '').trim()
  const refreshToken = req.cookies?.jwt
  log.child({ accessToken, refreshToken }).info('Tokens intercepted')

  if (!accessToken && !refreshToken) {
    log.warn('No Acess Token or Refresh Token')
    log.trace('Out deserializeUser------------')
    return next()
  }

  let { decoded, expired } = verifyJwt(accessToken, 'accessToken')
  if (!decoded) expired = true // Force it when accessToken is null

  if (decoded) {
    res.locals.user = decoded
    log.info('Access Token Decoded')
  }

  if (expired && refreshToken) {
    log.warn('No Access Token or it is expired but with Refresh Token')
    const newAccessToken = await reIssueAccessToken({ refreshToken })

    if (newAccessToken) {
      const child = log.child({ newAccessToken })
      child.info('New Acces Token:')
      res.setHeader('x-access-token', newAccessToken)
    }

    const result = verifyJwt(newAccessToken, 'accessToken')

    res.locals.user = result.decoded
  }

  log.trace('Out deserializeUser------------')
  return next()
}

export default deserializeUser
