import axios from '@/utils/axios'

export async function createCourse(data) {
  try {
    const response = await axios.post('/api/courses', data)

    return response.status === 201
      ? { success: true, ...response.data }
      : { success: false, formErrors: response.data }
  } catch (error) {
    return { success: false, error }
  }
}

export async function getCourses() {
  try {
    const response = await axios.get('/api/courses')

    return response.status === 200
      ? { success: true, ...response.data }
      : { success: false, formErrors: response.data }
  } catch (error) {
    return { success: false, error }
  }
}
