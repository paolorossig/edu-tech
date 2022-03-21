import mongoose from 'mongoose'

const TeacherSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    banckAccount: { type: String, required: true },
    salary: { type: Number, required: false },
    disponibility: [{ dia: String, horaInicio: String, horaFinal: String }],
    createdCursos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  },
  { timestamps: true }
)

const Teacher = mongoose.model('UserTeacher', TeacherSchema)

export default Teacher
