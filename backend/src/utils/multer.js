import multer from 'multer'

export const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter(req, file, next) {
    const isPhotoOrVideo =
      file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')
    isPhotoOrVideo
      ? next(null, true)
      : next({ message: 'El tipo de archivo no es válido' }, false)
  }
})
