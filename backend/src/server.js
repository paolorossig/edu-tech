import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import routes from './routes.js'
import { connectDb } from './utils/db.js'
import deserializeUser from './middleware/deserializeUser.js'

const port = process.env.PORT || 4000
const app = express()

// Middlewares
app.use(cors())
app.use(json())
app.use(deserializeUser)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
  connectDb()
  routes(app)
})
