import { useEffect } from 'react'
import useAuth from './useAuth'
import { axiosPrivate } from '@/utils/axios'

function useAxiosPrivate() {
  const { auth, setAuth } = useAuth()

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (req) => {
        if (!req.headers['Authorization']) {
          req.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        }
        return req
      },
      (error) => Promise.reject(error)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (res) => {
        res.headers['x-access-token'] &&
          setAuth((prev) => ({
            ...prev,
            accessToken: res.headers['x-access-token']
          }))

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
