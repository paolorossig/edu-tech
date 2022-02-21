import axiosInstance from '@/utils/axios'

export async function signup(user) {
  try {
    const response = await axiosInstance.post('/api/users', user)

    return response.status === 201
      ? { success: true, ...response.data }
      : { success: false, formErrors: response.data }
  } catch (error) {
    return { success: false, error: error.response.data.message }
  }
}

export async function login(user) {
  try {
    const response = await axiosInstance.post('/api/sessions', user)

    if (response.status !== 200)
      return { success: false, formErrors: response.data }

    const { accessToken, refreshToken } = response.data

    localStorage.setItem('accessToken', JSON.stringify(accessToken))
    localStorage.setItem('refreshToken', JSON.stringify(refreshToken))

    return { success: true, ...response.data }
  } catch (error) {
    return { success: false, error: error.response.data.message }
  }
}
