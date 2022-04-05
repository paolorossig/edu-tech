import axios from 'axios'

const baseURL = import.meta.env.VITE_SERVER_URL

export default axios.create({
  baseURL
})

export const axiosPrivate = axios.create({
  baseURL,
  withCredentials: true
})

export const axiosBaseQuery = async ({ url, method, data, headers }) => {
  try {
    const result = await axiosPrivate({
      url,
      method,
      data,
      headers
    })
    return { data: result.data }
  } catch (err) {
    return {
      error: { status: err.response?.status, data: err.response?.data }
    }
  }
}
