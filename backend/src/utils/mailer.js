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

export function sendMailConfigUser(user) {
  return welcomeMail({
    to: user.email,
    from: 'eduteach.makeitreal@gmail.com',
    subject: 'Bienvenid@ a eduTech',
    text: `Hola, terminaste de configurar tu cuenta como ${user.role}`,
    html: `<h1>Cuenta configurada</h1><h2>Hola, terminaste de configurar tu cuenta como ${user.role}</h2>`
  })
}
export function sendMailCreateUser(user) {
  return welcomeMail({
    to: user.email,
    from: 'eduteach.makeitreal@gmail.com',
    subject: 'Bienvenid@ a eduTech',
    text: `Hola, tu usuario ya fue creado, bienvenido a eduTech.`,
    html: `<h1>Welcome to EduTech</h1>`
  })
}
