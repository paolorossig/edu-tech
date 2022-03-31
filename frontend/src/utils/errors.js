const errorMessages = {
  400: (data) => data.message,
  401: (data) => data.message,
  404: () => 'Error en el servidor'
}

const defaultErrorMessage = 'Error desconocido'

export const getErrorResponse = (error) => {
  const { status, data } = error.response

  return {
    success: false,
    error: errorMessages[status]
      ? errorMessages[status](data)
      : defaultErrorMessage
  }
}
