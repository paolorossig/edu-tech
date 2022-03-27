import axios from '@/utils/axios'
import { getErrorResponse } from '@/utils/errors'

export async function updateUserData(userId, formData, type, selected) {
  const { image } = formData
  const data = new FormData()
  if (image) {
    console.log(typeof image)
    data.append('photoURL', image[0], image[0].name)
  }
  data.append('firstName', formData.name)
  data.append('lastName', formData.lastname)
  data.append('surName', formData.surname)
  data.append('nickName', formData.name)
  data.append('role', 'student')
  data.append('gender', formData.gender)
  data.append('dni', formData.dni)
  data.append('birthday', formData.birthday)
  data.append('phoneNumber', formData.phoneNumber)
  data.append('country', formData.country)
  try {
    const response = await axios.put(`/api/users/${userId}`, data, {
      headers: {
        'Content-Type': `multipart/form-data;`
      }
    })
    if (type === 1) {
      await axios.post(`/api/student`, {
        user: response.data.user._id,
        interestCategories: selected
      })
    } else if (type === 2) {
      await axios.post(`/api/teacher`, {
        user: response.data.user._id,
        banckAccount: formData.cardNumber
      })
    }

    return { success: true, ...response.data }
  } catch (error) {
    return getErrorResponse(error)
  }
}
