import axios from 'axios'

const baseURL = import.meta.env.VITE_SERVER_URL

const accessToken = localStorage.getItem('accessToken')
  ? JSON.parse(localStorage.getItem('accessToken'))
  : ''
const refreshToken = localStorage.getItem('refreshToken')
  ? JSON.parse(localStorage.getItem('refreshToken'))
  : ''

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${accessToken}`, 'x-refresh': refreshToken }
})

axiosInstance.interceptors.request.use(async (req) => {
  console.log('interceptor ran')
  return req
})

export default axiosInstance
