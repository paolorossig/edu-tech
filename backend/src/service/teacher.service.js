import Teacher from '../model/teacher.model.js'

export async function createTeacher(input) {
  try {
    const teacher = await Teacher.create(input)
    return teacher.populate('user')
  } catch (error) {
    throw new Error(error)
  }
}
export async function updateTeacher(query, input) {
  try {
    const teacher = await Teacher.updateOne(query, input)
    return teacher
  } catch (error) {
    throw new Error(error)
  }
}
