import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosPrivate } from '@/utils/axios'

const baseURL = import.meta.env.VITE_SERVER_URL

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, headers }) => {
    try {
      const result = await axiosPrivate({
        url: baseUrl + url,
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

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: axiosBaseQuery({ baseUrl: `${baseURL}/api/courses` }),
  tagTypes: ['Course'],
  endpoints: (builder) => ({
    allCourses: builder.query({
      query: () => ({ url: '/all', method: 'get' }),
      providesTags: ['Course']
    }),
    userCourses: builder.query({
      query: () => ({ url: '/', method: 'get' }),
      providesTags: ['Course']
    }),
    createCourse: builder.mutation({
      query: ({ data }) => ({
        url: '/',
        method: 'post',
        data,
        headers: {
          'Content-Type': 'multipart/form-data;'
        }
      }),
      invalidatesTags: ['Course']
    })
  })
})

export const {
  useAllCoursesQuery,
  useUserCoursesQuery,
  useCreateCourseMutation
} = courseApi
