import mongoose from 'mongoose'

export function connectDb() {
  const url = process.env.MONGO_URL

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  mongoose.connection.once('open', () => {
    console.log('DB connection established successfully')
  })

  mongoose.connection.on('error', (error) => {
    console.error(error)
  })
}
