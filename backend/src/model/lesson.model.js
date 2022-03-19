import mongoose from 'mongoose'

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duration: {
      type: String
    },
    numberActivities: {
      type: Number
    },
    urlVideo: {
      type: String,
      required: true
    },
    courseId: {
      type: String,
      required: true
    },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
  },
  { timestamps: true }
)
const Lesson = mongoose.model('Lesson', lessonSchema)
export default Lesson
