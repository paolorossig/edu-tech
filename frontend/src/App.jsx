import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Inicio from './pages/dashboard/Inicio'
import Cursos from './pages/dashboard/cursos'
import Curso from './pages/dashboard/cursos/Curso'
import Checkout from './pages/dashboard/Checkout'
import Mentores from './pages/dashboard/mentores'
import Mentor from './pages/dashboard/mentores/Mentor'
import NotFound from './pages/NotFound'
import RequireAuth from './components/RequireAuth'
import DashboardLayout from './components/Layouts/DashboardLayout'
import StudentConfigAccount from './components/studentConfigAccount'
import Teacher from './pages/teacher/Teacher'
import ListTeacher from './pages/teacher/ListTeacher'
import CoursesTeacher from './pages/teacher/CoursesTeacher'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/config" element={<StudentConfigAccount />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <DashboardLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Inicio />} />
        <Route path="cursos">
          <Route index element={<Cursos />} />
          <Route path=":cursoId" element={<Curso />} />
        </Route>
        <Route path="mentores">
          <Route index element={<Mentores />} />
          <Route path=":mentorId" element={<Mentor />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/teacher" element={<Teacher />}>
        <Route index element={<ListTeacher />} />
        <Route path="cursos" element={<CoursesTeacher />} />
        </Route>
    </Routes>
  )
}

export default App
