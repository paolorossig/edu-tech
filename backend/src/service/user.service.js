import User from '../model/user.model.js'
import cloudinary from 'cloudinary'

const omitPassword = (user) => {
  // eslint-disable-next-line no-unused-vars
  const { password, ...user_ } = user
  return user_
}

export async function createUser(input) {
  try {
    const user = await User.create(input)
    return omitPassword(user._doc)
  } catch (error) {
    const errorMessage = error.code === 11000 ? 'Email ya registrado' : error
    throw new Error(errorMessage)
  }
}

export async function validatePassword({ email, password }) {
  const user = await User.findOne({ email })
  if (!user) return false

  const isValid = await user.comparePassword(password)
  if (!isValid) return false
  console.log(omitPassword(user._doc))

  return omitPassword(user._doc)
}

export async function findUser(query) {
  return User.findOne(query).lean()
}

export async function updateUser(query, update) {
  try {
    const userFinded = await User.findById(query)
    if (userFinded.cloudinary_id !== '') {
      await cloudinary.uploader.destroy(userFinded.photoCloudinaryId)
    }
    const image = await cloudinary.uploader.upload(update.file.path)
    const user = await User.findByIdAndUpdate(query, {
      ...update.body,
      photoURL: image.secure_url,
      photoCloudinaryId: image.public_id
    })
    return user
  } catch (error) {
    throw new Error(error)
  }
}
