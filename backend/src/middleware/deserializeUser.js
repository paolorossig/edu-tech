import { verifyJwt } from '../utils/jwt.js'
import { reIssueAccessToken } from '../service/session.service.js'

const deserializeUser = async (req, res, next) => {
  console.log('In deserializeUser------------')
  const accessToken = req.headers.authorization?.replace('Bearer', '').trim()
  const refreshToken = req.headers['x-refresh'] || ''
  if (!accessToken) {
    console.log('No Acess Token')
    console.log('Out deserializeUser------------')
    return next()
  }

  const { decoded, expired } = verifyJwt(accessToken, 'accessToken')

  if (decoded) {
    res.locals.user = decoded
    console.log('Access Token Decoded')
    console.log('Out deserializeUser------------')
  }

  if (expired && refreshToken) {
    console.log('Access Token Expired but with Refresh Token')
    const newAccessToken = await reIssueAccessToken({ refreshToken })

    if (newAccessToken) {
      console.log('New Acces Token')
      res.setHeader('x-access-token', newAccessToken)
    }

    const result = verifyJwt(newAccessToken, 'accessToken')

    res.locals.user = result.decoded
    console.log('Out deserializeUser------------')
  }

  console.log('No Refresh Token')
  console.log('Out deserializeUser------------')

  return next()
}

export default deserializeUser
