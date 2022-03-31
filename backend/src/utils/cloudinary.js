import cloudinary from 'cloudinary'
import log from './logger.js'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})
log.info('Cloudinary configured')

export function uploads(file, folder) {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      file,
      (result) => {
        resolve({
          url: result.secure_url,
          cloudinaryId: result.public_id
        })
      },
      {
        resourse_type: 'auto',
        folder: process.env.NODE_ENV === 'production' ? folder : `${folder}-dev`
      }
    )
  })
}

export default cloudinary
