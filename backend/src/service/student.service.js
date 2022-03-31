import Student from '../model/student.model.js'

export async function createStudent(input) {
  try {
    const student = await Student.create(input)
    return student.populate('user')
  } catch (error) {
    throw new Error(error)
  }
}
export async function updateStudent(query, input) {
  try {
    const student = await Student.updateOne(query, input)
    return student
  } catch (error) {
    throw new Error(error)
  }
}
