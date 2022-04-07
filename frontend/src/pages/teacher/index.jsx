import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import TeacherHome from './TeacherHome'
import TeacherCourses from './courses'
import CreateCourse from './courses/CreateCourse'
import { teacherNavConfig } from './teacherConfig'
import CourseLessons from './lessons'
import RegisterLesson from './lessons/CreateLesson'

function TeacherDashboard() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DashboardLayout navConfig={teacherNavConfig} />}
      >
        <Route index element={<TeacherHome />} />
        <Route path="courses">
          <Route index element={<TeacherCourses />} />
          <Route path="create" element={<CreateCourse />} />
          <Route path=":courseId/lessons" element={<CourseLessons />} />
          <Route
            path=":courseId/lessons/create-lesson"
            element={<RegisterLesson />}
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default TeacherDashboard
