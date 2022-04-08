import { Server } from 'socket.io'
import log from './logger.js'

export default function connectSocket(server, corsOptions) {
  const io = new Server(server, {
    path: '/chat/',
    cors: corsOptions
  })

  let onlineUsers = new Map()

  io.use((socket, next) => {
    const accesToken = socket.handshake.auth.token
    if (accesToken) {
      next()
    } else {
      next(new Error('Authentication error'))
    }
  })

  io.on('connection', (socket) => {
    log.info('Socket connected')

    socket.on('add-user', (userId) => {
      log.info(`User connected: ${userId}`)
      onlineUsers.set(userId, socket.id)
    })

    socket.on('send-msg', (data) => {
      log.child({ data }).info('Message sent:')
      const sendUserSocket = onlineUsers.get(data.to)
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit('msg-recieve', data.message)
      }
    })

    socket.on('disconnect', () => {
      log.info('User disconnected')
      onlineUsers.delete(socket.id)
    })
  })
}
