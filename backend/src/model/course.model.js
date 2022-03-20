import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    imageUrl: { type: String },
    keywords: { type: [String] },
    language: { type: String },
    score: { type: String }
  },
  { timestamps: true }
)

const Course = mongoose.model('Course', courseSchema)

export default Course
