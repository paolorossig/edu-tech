import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const welcomeMail = async (message) => {
  try {
    await sgMail.send(message)
    console.log('Mensaje enviado')
  } catch (error) {
    console.log('Error: ', error)
  }
}

export function sendMail(user) {
  return welcomeMail({
    to: user.email,
    from: 'fernandorafaelcallayarihuaman@gmail.com',
    subject: 'Bienvenid@ a eduTech',
    text: 'Hola, gracias por confiar en nosotros y bienvenido a eduTech'
  })
}
