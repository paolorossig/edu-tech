import axios from '@/utils/axios'

const errorMessages = {
  401: (data) => data.message,
  400: (data) => data.message,
  404: () => 'Error en el servidor'
}

const defaultErrorMessage = 'Error desconocido'

export async function signup(user) {
  try {
    const response = await axios.post('http://localhost:4000/api/users', user)

    return response.status === 201
      ? { success: true, ...response.data }
      : { success: false, formErrors: response.data }
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

export async function login(user) {
  try {
    const response = await axios.post(
      'http://localhost:4000/api/sessions',
      user,
      {
        withCredentials: true
      }
    )

    if (response.status !== 200)
      return { success: false, formErrors: response.data }

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

export async function getUserSessions(axiosPrivate) {
  try {
    const response = await axiosPrivate.get(
      'http://localhost:4000/api/sessions'
    )
    if (response.status !== 200) return { success: false }

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

export async function deleteUserSession(axiosPrivate) {
  try {
    const response = await axiosPrivate.delete(
      'http://localhost:4000/api/sessions'
    )
    if (response.status !== 200) return { success: false }

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
