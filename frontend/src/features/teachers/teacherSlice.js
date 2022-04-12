import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '@/utils/axios'

const initialState = {
  users: [],
  courses: {},
  students: []
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

export const getStudents = createAsyncThunk(
  'teachers/getStudents',
  async () => {
    const response = await axios.get('/api/students')
    return response?.data.students
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
      .addCase(getStudents.fulfilled, (state, action) => {
        state.students = action.payload
      })
  }
})

export const selectTeachers = (state) => state.teachers.users
export const selectTeacherCourses = (state) => state.teachers.courses
export const selectStudents = (state) => state.teachers.students

export default TeacherSlice.reducer
