import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    lessonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true
    }
  },
  { timestamps: true }
)
const Question = mongoose.model('Question', questionSchema)
export default Question
