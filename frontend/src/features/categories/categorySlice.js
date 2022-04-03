import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

const initialState = {
  options: [],
  status: 'idle',
  error: null
}

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get('/api/categories')
    return response.data.categories.map((el) => ({
      label: el.name,
      value: el._id
    }))
  }
)

export const CategorySlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.options = action.payload
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
  }
})

export const selectCategories = (state) => state.categories

export default CategorySlice.reducer
