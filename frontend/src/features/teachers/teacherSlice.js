import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

export const getTeachers = createAsyncThunk(
  'teachers/getTeachers',
  async () => {
    const response = await axios.get('/api/teachers')
    return response?.data.teachers
  }
)

export const TeacherSlice = createSlice({
  name: 'teachers',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const selectTeachers = (state) => state.teachers

export default TeacherSlice.reducer
