import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Inicio from './pages/dashboard/Inicio'
import Courses from './pages/dashboard/courses'
import Course from './pages/dashboard/courses/Course'
import Lesson from './pages/dashboard/courses/Lesson'
import Checkout from './pages/dashboard/Checkout'
import Mentors from './pages/dashboard/mentors'
import Mentor from './pages/dashboard/mentors/mentor'
import MentorCourses from './pages/dashboard/mentors/mentor/options/MentorCourses'
import Chat from './pages/dashboard/mentors/mentor/options/Chat'
import TeacherHome from './pages/teacher/TeacherHome'
import CoursesTeacher from './pages/teacher/CoursesTeacher'
import NotFound from './pages/NotFound'
import RequireAuth from './components/RequireAuth'
import DashboardLayout from './components/Layouts/DashboardLayout'
import StudentConfigAccount from './components/studentConfigAccount'
import CoursesList from './components/Teacher/CoursesList'
import { alumnosNavConfig } from './pages/dashboard/layoutConfig'
import { teacherNavConfig } from './pages/teacher/teacherConfig'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/config" element={<StudentConfigAccount />} />

      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardLayout navConfig={alumnosNavConfig} />
          </RequireAuth>
        }
      >
        <Route index element={<Inicio />} />
        <Route path="courses">
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<Course />} />
          <Route path=":courseId/:lessonId" element={<Lesson />} />
        </Route>
        <Route path="mentors">
          <Route index element={<Mentors />} />
          <Route path=":mentorId" element={<Mentor />}>
            <Route index element={<Navigate to="courses" />} />
            <Route path="courses" element={<MentorCourses />} />
            <Route path="chat" element={<Chat />} />
          </Route>
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>

      <Route
        path="/teacher"
        element={<DashboardLayout navConfig={teacherNavConfig} />}
      >
        <Route index element={<TeacherHome />} />
        <Route path="cursos" element={<CoursesList />} />
        <Route path="createCourse" element={<CoursesTeacher />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
