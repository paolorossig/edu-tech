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

export async function findCoursesByIdTeacher(userId) {
  const courses = await Course.find({ teacher: userId })
  return courses
}

export async function findCoursesByIdStudent(userId) {
  try {
    const student = await Student.find({ user: userId })
    if (student[0].membership === true) {
      const courses = await Course.find({})
      return { courses }
    } else {
      const coursesStudent = await student[0].populate('coursesEnabled')
      return { courses: coursesStudent.coursesEnabled }
    }
  } catch (error) {
    throw new Error(error)
  }
}
