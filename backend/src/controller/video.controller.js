import youtube from 'youtube-api'
import { google } from 'googleapis'
import fs from 'fs'
import open from 'open'
import { v4 as uuidv4 } from 'uuid'
import multer from 'multer'

export const storage = multer.diskStorage({
  destination: 'uploads/',
  filename(req, file, cb) {
    const newFileName = `${uuidv4()}-${file.originalname}`
    console.log(newFileName)
    cb(null, newFileName)
  }
})

export const uploadVideoFile = multer({
  storage: storage
}).single('videoFile')
console.log(uploadVideoFile)

export async function uploadVideo(req, res) {
  if (req.file) {
    const filename = req.file.filename
    const { title, description } = req.body

    open(
      oAuth.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/youtube.upload',
        state: JSON.stringify({
          filename,
          title,
          description
        })
      })
    )
  }
}

export const oAuth = youtube.authenticate({
  type: 'oauth',
  client_id:
    '501023383179-3nc2ovhd26mef6rlr3favmtft4vjoitq.apps.googleusercontent.com', // credentials.web.client_id,
  client_secret: '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', //credentials.web.client_secret,
  redirect_url: 'http://localhost:4000/oauth2callback'
})

export async function oauth2callback(req, res) {
  res.redirect('http://localhost:3000/teacher/createcourse')
  const { filename, title, description } = JSON.parse(req.query.state)
  console.log(filename)

  oAuth.getToken(req.query.code, (err, tokens) => {
    if (err) {
      console.log(err)
      return
    }

    oAuth.setCredentials(tokens)

    const youtube = google.youtube({
      version: 'v3',
      auth: oAuth
    })
    youtube.videos.insert(
      {
        resource: {
          snippet: { title, description },
          status: { privacyStatus: 'private' }
        },
        part: 'snippet,status',
        media: {
          body: fs.createReadStream(`./uploads/${filename}`)
        }
      },
      // eslint-disable-next-line no-unused-vars
      (err, data) => {
        console.log('error youtube')
        console.log(err)
        process.exit()
      }
    )
  })
}
