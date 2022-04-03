import sgMail from '@sendgrid/mail'
import log from './logger.js'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendMail = async (message) => {
  try {
    if (
      process.env.NODE_ENV === 'production' ||
      process.env.TESTING_MAILER === 'true'
    ) {
      await sgMail.send(message)
      log.info('Mail sent')
    }
    log.warn('Mailer deactivated in development mode')
  } catch (error) {
    log.child({ error }).error('Sendgrid error')
  }
}

export function sendWelcomeMail(user) {
  return sendMail({
    to: user.email,
    from: process.env.EMAIL,
    subject: 'Bienvenid@ a EduTECH',
    html: `<h1>Hola ${user.firstName},</h1>
    <p>Acabas de terminar de configurar tu cuenta como ${user.role}!</p>
    <p>Para poder acceder a la plataforma, ingresa a la siguiente dirección:</p>
    <p>${process.env.CLIENT_URL}/login</p>`
  })
}
