import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    membership: { type: Number, default: 0 },
    interestCategories: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
    ],
    savedAccountNumbers: { type: Number },
    coursesEnabled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  },
  { timestamps: true }
)

const Student = mongoose.model('Student', studentSchema)

export default Student
