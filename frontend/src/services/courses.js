import { axiosPrivate } from '@/utils/axios'

export async function createCourse(formData) {
  try {
    const { image } = formData
    const data = new FormData()
    image && data.append('imageURL', image[0], image[0].name)
    data.append('name', formData.name)
    data.append('description', formData.description)
    data.append('category', formData.category)
    data.append('keywords', formData.keywords.split(' '))
    data.append('price', formData.price)

    const response = await axiosPrivate.post('/api/courses', data, {
      headers: {
        'Content-Type': `multipart/form-data;`
      }
    })

    return response.status === 201 && { success: true, ...response.data }
  } catch (error) {
    return { success: false, error }
  }
}
