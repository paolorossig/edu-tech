import mongoose from 'mongoose'

const lessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    duration: { type: Number },
    videoURL: { type: String }
  },
  { timestamps: true }
)

const Lesson = mongoose.model('Lesson', lessonSchema)

export default Lesson
