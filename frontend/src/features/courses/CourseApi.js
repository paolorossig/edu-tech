import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '@/utils/axios'

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: axiosBaseQuery,
  tagTypes: ['Course'],
  endpoints: (builder) => ({
    allCourses: builder.query({
      query: () => ({ url: '/api/courses/all', method: 'get' }),
      providesTags: ['Course']
    }),
    userCourses: builder.query({
      query: () => ({ url: '/api/courses', method: 'get' }),
      providesTags: ['Course']
    }),
    createCourse: builder.mutation({
      query: ({ data }) => ({
        url: '/api/courses',
        method: 'post',
        data,
        headers: {
          'Content-Type': 'multipart/form-data;'
        }
      }),
      invalidatesTags: ['Course']
    }),
    buyCourses: builder.mutation({
      query: ({ data }) => ({
        url: '/api/courses/buy',
        method: 'post',
        data
      }),
      invalidatesTags: ['Course']
    })
  })
})

export const {
  useAllCoursesQuery,
  useUserCoursesQuery,
  useCreateCourseMutation,
  useBuyCoursesMutation
} = courseApi
