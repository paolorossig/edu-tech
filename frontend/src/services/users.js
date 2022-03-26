import axios from '@/utils/axios'

const errorMessages = {
  400: (data) => data.message,
  401: (data) => data.message,
  404: () => 'Error en el servidor'
}

const defaultErrorMessage = 'Error desconocido'

export async function updateUserData(userId, formData, type, selected) {
  const { image } = formData
  const data = new FormData()
  if (image) {
    console.log(typeof image)
    for (let i = 0; i < image.length; i++) {
      data.append('photoURL', image[i], image[i].name)
    }
  }
  data.append('firstName', formData.name)
  data.append('lastName', formData.lastName)
  data.append('surName', formData.surName)
  data.append('nickName', formData.name)
  data.append('role', 'student')
  data.append('gender', formData.gender)
  data.append('dni', formData.dni)
  data.append('birthday', formData.birthday)
  data.append('phoneNumber', formData.phoneNumber)
  data.append('country', formData.country)
  try {
    const response = await axios.put(
      `http://localhost:4000/api/users/${userId}`,
      data,
      {
        headers: {
          'Content-Type': `multipart/form-data;`
        }
      }
    )
    if (type === 1) {
      axios.post(`http://localhot:4000/api/student`, {
        user: response.id,
        coursesEnabled: selected
      })
    } else if (type === 2) {
      axios.post(`http://localhost:4000/api/teacher`, {
        user: response.id,
        banckAccount: formData.cardNumber
      })
    }

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
