import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SelectUserType from './pages/SelectUserType'
import Inicio from './pages/dashboard/Inicio'
import Courses from './pages/dashboard/courses'
import Course from './pages/dashboard/courses/Course'
import Lesson from './pages/dashboard/courses/Lesson'
import Catalogue from './pages/dashboard/catalogue'
import Sessions from './pages/dashboard/Sessions'
import Checkout from './pages/dashboard/Checkout'
import Teachers from './pages/dashboard/teachers'
import Teacher from './pages/dashboard/teachers/Teacher'
import TeacherCoursesList from './pages/dashboard/teachers/TeacherCoursesList'
import Chat from './pages/dashboard/teachers/Chat'
import TeacherHome from './pages/teacher/TeacherHome'
import TeacherCourses from './pages/teacher/courses'
import CreateCourse from './pages/teacher/courses/CreateCourse'
import NotFound from './pages/NotFound'
import RequireAuth from './components/RequireAuth'
import DashboardLayout from './components/Layouts/DashboardLayout'
import { alumnosNavConfig } from './pages/dashboard/layoutConfig'
import { teacherNavConfig } from './pages/teacher/teacherConfig'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/select-user-type" element={<SelectUserType />} />

      <Route element={<RequireAuth />}>
        <Route
          path="/dashboard"
          element={<DashboardLayout navConfig={alumnosNavConfig} />}
        >
          <Route index element={<Inicio />} />
          <Route path="courses">
            <Route index element={<Courses />} />
            <Route path=":courseId" element={<Course />} />
            <Route path=":courseId/:lessonId" element={<Lesson />} />
          </Route>
          <Route path="teachers">
            <Route index element={<Teachers />} />
            <Route path=":teacherId" element={<Teacher />}>
              <Route index element={<Navigate to="courses" />} />
              <Route path="courses" element={<TeacherCoursesList />} />
              <Route path="chat" element={<Chat />} />
            </Route>
          </Route>
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="sesiones" element={<Sessions />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route
          path="/teacher"
          element={<DashboardLayout navConfig={teacherNavConfig} />}
        >
          <Route index element={<TeacherHome />} />
          <Route path="courses">
            <Route index element={<TeacherCourses />} />
            <Route path="create" element={<CreateCourse />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
