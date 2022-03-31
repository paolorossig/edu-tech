import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    loggedOut: { type: Boolean, default: false },
    userAgent: { type: String }
  },
  { timestamps: true }
)

const Session = mongoose.model('Session', sessionSchema)

export default Session
