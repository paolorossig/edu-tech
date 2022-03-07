import Coursem from '../model/course.model.js'

export async function createCourses(input) {
  try {
    await Coursem.create(input)
    return 'El curso se creo correctamente'
  } catch (error) {
    return 'Ocurrio un error al crear el curso'
  }
}

export default createCourses
