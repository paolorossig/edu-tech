import mongoose from 'mongoose'
import { hashSync, compare } from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    surName: { type: String, default: '' },
    role: { type: String, default: '' },
    nickName: { type: String, default: '' },
    photoURL: { type: String, default: '' },
    photoCloudinaryId: { type: String, default: '' },
    gender: { type: String, default: '' },
    dni: { type: String, default: '' },
    birthday: { type: String, default: '' },
    occupation: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    country: { type: String, default: '' }
    // authProvider: { type: String, required: true, default: '' }
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  let user = this

  if (user.isModified('password')) {
    user.password = await hashSync(user.password, 10)
  }

  return next()
})

userSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this

  return compare(candidatePassword, user.password) //.catch((e) => false)
}

const User = mongoose.model('User', userSchema)

export default User
