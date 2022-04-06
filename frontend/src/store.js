import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '@/features/basket/basketSlice'
import categoriesReducer from '@/features/categories/categorySlice'
import teacherReducer from '@/features/teachers/teacherSlice'
import { courseApi } from '@/features/courses/CourseApi'

const store = configureStore({
  reducer: {
    basket: basketReducer,
    categories: categoriesReducer,
    teachers: teacherReducer,
    [courseApi.reducerPath]: courseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
