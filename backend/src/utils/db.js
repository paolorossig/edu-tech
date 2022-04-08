import mongoose from 'mongoose'
import log from './logger.js'

export default function connectDb() {
  const url = process.env.MONGO_URL

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  mongoose.connection.once('open', () => {
    log.info('DB connection established successfully')
  })

  mongoose.connection.on('error', (error) => {
    log.error(error)
  })
}
