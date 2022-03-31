import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    keywords: { type: [String], required: true },
    score: { type: String }
  },
  { timestamps: true }
)

const Course = mongoose.model('Course', courseSchema)

export default Course
