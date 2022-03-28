import axios from '@/utils/axios'

export async function getCourses() {
  try {
    const response = await axios.get('/api/categories')

    return response.status === 200
      ? { success: true, ...response.data }
      : { success: false, formErrors: response.data }
  } catch (error) {
    return { success: false, error }
  }
}
