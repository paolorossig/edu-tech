import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import Inicio from './Inicio'
import Courses from './courses'
import Course from './courses/Course'
import Lesson from './courses/Lesson'
import Catalogue from './catalogue'
import Sessions from './Sessions'
import Checkout from './Checkout'
import Teachers from './teachers'
import Teacher from './teachers/Teacher'
import TeacherCoursesList from './teachers/TeacherCoursesList'
import Chat from './teachers/Chat'
import { alumnosNavConfig } from './layoutConfig'

function Dashboard() {
  return (
    <Routes>
      <Route
        path="/"
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
    </Routes>
  )
}

export default Dashboard
