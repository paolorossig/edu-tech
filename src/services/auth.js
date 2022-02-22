import axios from '@/utils/axios'

export async function signup(user) {
  try {
    const response = await axios.post('/api/users', user)

    return response.status === 201
      ? { success: true, ...response.data }
      : { success: false, formErrors: response.data }
  } catch (error) {
    return { success: false, error: error.response.data.message }
  }
}

export async function login(user) {
  try {
    const response = await axios.post('/api/sessions', user)

    if (response.status !== 200)
      return { success: false, formErrors: response.data }

    return { success: true, ...response.data }
  } catch (error) {
    return { success: false, error: error.response.data.message }
  }
}
