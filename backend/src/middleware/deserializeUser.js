import { verifyJwt } from '../utils/jwt.js'
import { reIssueAccessToken } from '../service/session.service.js'

const deserializeUser = async (req, res, next) => {
  console.log('In deserializeUser------------')
  const accessToken = req.headers.authorization?.replace('Bearer', '').trim()
  const refreshToken = req.cookies?.jwt

  if (!accessToken && !refreshToken) {
    console.log('No Acess Token or Refresh Token')
    console.log('Out deserializeUser------------')
    return next()
  }

  let { decoded, expired } = verifyJwt(accessToken, 'accessToken')
  if (!decoded) expired = true // Force it when accessToken is null

  if (decoded) {
    res.locals.user = decoded
    console.log('Access Token Decoded')
  }

  if (expired && refreshToken) {
    console.log('No Access Token or expired but with Refresh Token')
    const newAccessToken = await reIssueAccessToken({ refreshToken })

    if (newAccessToken) {
      console.log('New Acces Token:', newAccessToken)
      res.setHeader('x-access-token', newAccessToken)
    }

    const result = verifyJwt(newAccessToken, 'accessToken')

    res.locals.user = result.decoded
  }

  console.log('Out deserializeUser------------')
  return next()
}

export default deserializeUser
