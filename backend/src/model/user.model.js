import mongoose from 'mongoose'
import { hashSync, compare } from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
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
