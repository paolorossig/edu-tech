import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    lessonId: { type: String, required: true },
    answers: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Answer', required: true }
    ]
  },
  { timestamps: true }
)
const Question = mongoose.model('Question', questionSchema)
export default Question
