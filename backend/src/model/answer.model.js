import mongoose from 'mongoose'

const answerSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    correct: {
      type: Boolean,
      required: true
    },
    questionId: {
      type: String,
      required: true
    },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
  },
  { timestamps: true }
)
const Answer = mongoose.model('Answer', answerSchema)
export default Answer
