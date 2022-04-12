import log from '../utils/logger.js'
import { verifyJwt } from '../utils/jwt.js'
import { reIssueAccessToken } from '../service/session.service.js'

const deserializeUser = async (req, res, next) => {
  const accessToken = req.headers.authorization?.replace('Bearer', '').trim()
  const refreshToken = req.cookies?.jwt

  if (!accessToken && !refreshToken) {
    return next()
  }

  let { decoded, expired } = verifyJwt(accessToken, 'accessToken')
  if (!decoded) expired = true // Force it when accessToken is null

  if (decoded) {
    res.locals.user = decoded
  }

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken })

    if (newAccessToken) {
      log.info('New Acces Token issued')
      res.setHeader('x-access-token', newAccessToken)
    }

    const result = verifyJwt(newAccessToken, 'accessToken')

    res.locals.user = result.decoded
  }

  return next()
}

export default deserializeUser
