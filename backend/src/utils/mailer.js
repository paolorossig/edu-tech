import sgMail from '@sendgrid/mail'
import log from './logger.js'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendMail = async (message) => {
  try {
    await sgMail.send(message)
    log.info('Mail sent')
  } catch (error) {
    log.child({ error }).error('sendgrid error')
  }
}

export function sendWelcomeMail(user) {
  return sendMail({
    to: user.email,
    from: 'eduteach.makeitreal@gmail.com',
    subject: 'Bienvenid@ a EduTECH',
    html: `<h1>Hola ${user.firstName},</h1>
    <p>Acabas de terminar de configurar tu cuenta como ${user.role}!</p>
    <p>Para poder acceder a la plataforma, ingresa a la siguiente dirección:</p>
    <p>${process.env.CLIENT_URL}/login</p>`
  })
}
