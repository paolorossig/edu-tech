import Course from '../model/course.model.js'
import Student from '../model/student.model.js'

export async function createCourse(input) {
  const course = await Course.create(input)
  return course.populate('category')
}

export async function findCourses() {
  const courses = await Course.find({})
  return courses
}

export async function findCoursesByIdTeacher(teacherId) {
  const courses = await Course.find({ teacher: teacherId })
  return courses
}

export async function findCoursesByIdStudent(studentId) {
  try {
    const student = await Student.findById(studentId)
    if (student.membership === true) {
      const courses = await Course.find({})
      return courses
    } else {
      return student.populate('coursesEnabled').coursesEnabled
    }
  } catch (error) {
    throw new Error(error)
  }
}
