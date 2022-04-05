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

export async function buySuscriptionStudent(userId) {
  try {
    const student = await Student.find({ user: userId })
    const newStudentWithSuscription = { ...student[0]._doc, membership: true }
    const updatedStudent = await Student.findOneAndUpdate(
      { user: userId },
      newStudentWithSuscription,
      {
        new: true
      }
    )
    return updatedStudent
  } catch (error) {
    throw new Error(error)
  }
}

export async function buyCoursesStudent(userId, newCourses) {
  try {
    const student = await Student.find({ user: userId })
    const newStudentWithNewCourses = {
      ...student[0]._doc,
      coursesEnabled: [...student[0].coursesEnabled, ...newCourses]
    }
    const updatedStudent = await Student.findOneAndUpdate(
      { user: userId },
      newStudentWithNewCourses,
      {
        new: true
      }
    )
    return updatedStudent
export async function deleteStudent(query) {
  try {
    await Student.deleteOne(query)
    return 'El estudiante se eliminó correctamente'
  } catch (error) {
    throw new Error(error)
  }
}
