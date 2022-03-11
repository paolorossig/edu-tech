import { useEffect } from 'react'
import useAuth from './useAuth'
import { axiosPrivate } from '@/utils/axios'

function useAxiosPrivate() {
  const { auth } = useAuth()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (req) => {
        console.log('req intercepted')
        if (!req.headers['Authorization']) {
          req.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        }
        return req
      },
      (error) => Promise.reject(error)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (res) => {
        console.log(res.headers)
        return res
      },
      (error) => Promise.reject(error) // ToDo: add retry logic
    )

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [auth])

  return axiosPrivate
}

export default useAxiosPrivate
