import cloudinary from 'cloudinary'
import log from './logger.js'

export function connectCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })
  log.info('Cloudinary configured')
}
