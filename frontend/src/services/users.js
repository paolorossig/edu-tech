import axios from '@/utils/axios'
import { getErrorResponse } from '@/utils/errors'

export async function updateUserData(userId, formData, type) {
  const { image } = formData
  const data = new FormData()
  image && data.append('photoURL', image[0], image[0].name)
  data.append('firstName', formData.firstName)
  data.append('lastName', formData.lastName)
  data.append('surName', formData.surName)
  data.append('role', type)
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
    if (type === 'student') {
      await axios.post(`/api/student`, {
        user: response.data.user._id,
        interestCategories: formData.idsCategoriesSelected
      })
    } else if (type === 'teacher') {
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
