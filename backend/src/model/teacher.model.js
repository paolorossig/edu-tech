import mongoose from 'mongoose'

const userTeacherSchema = new mongoose.Schema(
  {
    idUsuario: { type: String, required: true },
    banckAccount: { type: String, required: true },
    salary: { type: Number, required: false },
    disponibility: [{ dia: String, horaInicio: String, horaFinal: String }],
    createdCursos: [{ id_cursos: Number }]
  },
  { timestamps: true }
)

const User = mongoose.model('UserTeacher', userTeacherSchema)

export default User
