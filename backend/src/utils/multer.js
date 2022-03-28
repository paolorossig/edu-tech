import multer from 'multer'

export const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/')
    isPhoto
      ? next(null, true)
      : next({ message: 'El tipo de archivo no es válido' }, false)
  }
})
