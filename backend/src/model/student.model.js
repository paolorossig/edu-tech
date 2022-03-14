import mongoose from 'mongoose'

const userStudentSchema = new mongoose.Schema(
  {
    idUsuario: { type: String, required: true },
    membership: { type: Number, required: false, default: 1 },
    interests: { type: String, required: false },
    savedAccountNumbers: { type: Number, requirde: false },
    coursesEnabled: [{ idCurso: String }]
  },
  { timestamps: true }
)

const User = mongoose.model('UserStudent', userStudentSchema)

export default User
