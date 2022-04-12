import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '@/utils/axios'

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: axiosBaseQuery,
  tagTypes: ['Course', 'Lesson'],
  endpoints: (builder) => ({
    allCourses: builder.query({
      query: () => ({ url: '/api/courses/all', method: 'get' }),
      providesTags: ['Course']
    }),
    userCourses: builder.query({
      query: () => ({ url: '/api/courses', method: 'get' }),
      providesTags: ['Course']
    }),
    getCourse: builder.query({
      query: (courseId) => ({ url: `/api/course/${courseId}`, method: 'get' }),
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
    }),
    courseLessons: builder.query({
      query: (courseId) => ({
        url: `/api/lessons/${courseId}`,
        method: 'get'
      }),
      providesTags: ['Lesson']
    }),
    createLesson: builder.mutation({
      query: ({ data }) => ({
        url: '/api/lessons',
        method: 'post',
        data,
        headers: {
          'Content-Type': 'multipart/form-data;'
        }
      }),
      invalidatesTags: ['Lesson']
    })
  })
})

export const {
  useAllCoursesQuery,
  useUserCoursesQuery,
  useGetCourseQuery,
  useCreateCourseMutation,
  useBuyCoursesMutation,
  useCourseLessonsQuery,
  useCreateLessonMutation
} = courseApi
