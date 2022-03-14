import User from '../model/user.model.js'

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
export async function updateUser(parametro, input) {
  try {
    const user = await User.update(
      { _id: parametro },
      {
        name: input.name,
        firstName: input.firstName,
        lastName: input.lastName,
        surName: input.surName,
        role: input.role,
        nickName: input.firstName,
        // photoURL: { type: String, required: true, default: '' },
        sexo: input.sexo,
        dni: input.dni,
        birthday: input.birthday,
        occupation: input.occupation,
        phoneNumber: input.phoneNumber,
        country: input.country
      }
    )
    return user
  } catch (error) {
    throw new Error(error)
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
