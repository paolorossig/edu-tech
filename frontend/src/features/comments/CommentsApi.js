import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '@/utils/axios'

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: axiosBaseQuery,
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    createComments: builder.mutation({
      query: (data) => ({
        url: '/api/comments',
        method: 'post',
        data
      }),
      invalidatesTags: ['Comments']
    }),
    getCommentsLessons: builder.query({
      query: (lessonId) => ({
        url: `/api/comments/${lessonId}`,
        method: 'get'
      }),
      providesTags: ['Comments']
    })
  })
})

export const { useCreateCommentsMutation, useGetCommentsLessonsQuery } =
  commentsApi
