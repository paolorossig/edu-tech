import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

const initialState = {
  users: [],
  courses: {}
}

export const getTeachers = createAsyncThunk(
  'teachers/getTeachers',
  async () => {
    const response = await axios.get('/api/teachers')
    return response?.data.teachers
  }
)

export const getTeacherCourses = createAsyncThunk(
  'teachers/getTeacherCourses',
  async (teacherId) => {
    const response = await axios.get(`/api/teacher/${teacherId}/courses`)
    return { teacherId, courses: response?.data.courses || [] }
  }
)

export const TeacherSlice = createSlice({
  name: 'teachers',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(getTeacherCourses.fulfilled, (state, action) => {
        state.courses[action.payload.teacherId] = action.payload.courses
      })
  }
})

export const selectTeachers = (state) => state.teachers.users
export const selectTeacherCourses = (state) => state.teachers.courses

export default TeacherSlice.reducer
