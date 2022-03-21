import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    membership: { type: Number, required: false, default: 1 },
    interests: { type: String, required: false },
    savedAccountNumbers: { type: Number, requirde: false },
    coursesEnabled: [{ idCurso: String }]
  },
  { timestamps: true }
)

const Student = mongoose.model('UserStudent', StudentSchema)

export default Student
