import axios from '@/utils/axios'

const errorMessages = {
  400: (data) => data.message,
  401: (data) => data.message,
  404: () => 'Error en el servidor'
}

const defaultErrorMessage = 'Error desconocido'

export async function updateUserData(userId, data) {
  try {
    const response = await axios.put(`api/users/${userId}`, data)

    return { success: true, ...response.data }
  } catch (error) {
    const { status, data } = error.response

    return {
      success: false,
      error: errorMessages[status]
        ? errorMessages[status](data)
        : defaultErrorMessage
    }
  }
}
