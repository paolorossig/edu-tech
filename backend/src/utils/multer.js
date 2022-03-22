import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
// Multer config
export const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/')
    if (isPhoto) {
      next(null, true)
    } else {
      next({ message: 'El tipo de archivo no es válido' }, false)
    }
  },
  filename(req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname))
  }
})
