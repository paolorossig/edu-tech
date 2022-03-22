import logger from 'pino'

const log = logger({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname',
      translateTime: 'HH:MM:ss'
    }
  }
})

log.level = 'trace'

export default log
