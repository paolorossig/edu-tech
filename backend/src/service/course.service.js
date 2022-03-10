import Course from '../model/course.model.js'

export async function createCourses(input) {
  try {
    await Course.create(input)
    return 'El curso se creo correctamente'
  } catch (error) {
    return 'Ocurrio un error al crear el curso'
  }
}

export async function findCourses() {
  const courses = await Course.find({})
  return courses
}
