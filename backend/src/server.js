import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from './routes.js'
import log from './utils/logger.js'
import { connectDb } from './utils/db.js'
import deserializeUser from './middleware/deserializeUser.js'

const port = process.env.PORT || 4000
const clientUrl = process.env.CLIENT_URL

const app = express()

const corsOptions = {
  origin: clientUrl,
  credentials: true,
  exposedHeaders: ['X-access-token']
}

// Middlewares
app.use(json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(deserializeUser)

app.listen(port, () => {
  log.info(`Server listening on http://localhost:${port}`)
  connectDb()
  routes(app)
})
