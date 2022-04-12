import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '@/utils/axios'

export const messageApi = createApi({
  reducerPath: 'messageApi',
  baseQuery: axiosBaseQuery,
  tagTypes: ['Message'],
  endpoints: (builder) => ({
    userMessages: builder.query({
      query: (userId) => ({ url: `/api/messages/${userId}`, method: 'get' }),
      providesTags: ['Message']
    }),
    sendMessage: builder.mutation({
      query: (data) => ({
        url: '/api/messages',
        method: 'post',
        data
      })
    })
  })
})

export const { useUserMessagesQuery, useSendMessageMutation } = messageApi
