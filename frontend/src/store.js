import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '@/features/categories/categorySlice'

const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
})

export default store
