import mongoose from 'mongoose'

const commentsSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    type: { type: String, required: true }
  },
  { timestamps: true }
)
const Comments = mongoose.model('Comments', commentsSchema)
export default Comments
