import mongoose from 'mongoose'

const teacherSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    banckAccount: { type: String, required: true },
    salary: { type: Number },
    disponibility: [{ day: String, horaInicio: String, horaFinal: String }],
    createdCursos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  },
  { timestamps: true }
)

const Teacher = mongoose.model('Teacher', teacherSchema)

export default Teacher
