import Course from '../model/course.model.js'

export async function createCourse(input) {
  const course = await Course.create(input)
  return course
}

export async function findCourses() {
  const courses = await Course.find({})
  return courses
}
