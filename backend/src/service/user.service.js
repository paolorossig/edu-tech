import User from '../model/user.model.js'
import cloudinary, { uploads } from '../utils/cloudinary.js'
import log from '../utils/logger.js'
import { deleteStudent } from './student.service.js'
import { deleteTeacher } from './teacher.service.js'

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

  log.info(`User logged in: ${email}`)

  return omitPassword(user._doc)
}

export async function findUser(query) {
  return User.findOne(query).lean()
}

export async function findUsers(query) {
  return User.find(query).lean()
}

export async function updateUser(query, update) {
  const uploader = async (path) => await uploads(path, 'profile-images')

  try {
    const userFinded = await User.findById(query)
    if (userFinded.photoCloudinaryId) {
      await cloudinary.uploader.destroy(userFinded.photoCloudinaryId)
    }
    const { url, cloudinaryId } = await uploader(update.file.path)
    const user = await User.findByIdAndUpdate(
      query,
      {
        ...update.body,
        photoURL: url,
        photoCloudinaryId: cloudinaryId
      },
      { new: true }
    )
    log.child({ user }).info('User updated')
    return user
  } catch (error) {
    throw new Error(error)
  }
}

export async function deleteUser(userId) {
  try {
    deleteStudent({ user: userId })
    deleteTeacher({ user: userId })
    await User.findByIdAndDelete(userId)
    return 'El usuario se eliminó correctamente'
  } catch (error) {
    throw new Error(error)
  }
}
