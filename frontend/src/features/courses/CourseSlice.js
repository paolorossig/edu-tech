import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = import.meta.env.VITE_SERVER_URL

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}/api/courses` }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => '/'
    })
  })
})

export const { useGetCoursesQuery } = courseApi
