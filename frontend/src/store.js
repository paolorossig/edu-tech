import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '@/features/categories/categorySlice'
import { courseApi } from './features/courses/CourseSlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    [courseApi.reducerPath]: courseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware)
})

export default store
