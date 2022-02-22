import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './pages/dashboard/Layout'
import Inicio from './pages/dashboard/Inicio'
import Cursos from './pages/dashboard/cursos'
import Curso from './pages/dashboard/cursos/Curso'
import Checkout from './pages/dashboard/Checkout'
import Teacher from './pages/teacher/Teacher'
import ListTeacher from './pages/teacher/ListTeacher'
import CoursesTeacher from './pages/teacher/CoursesTeacher'
import CalendarT from './pages/teacher/CalendarT'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="cursos">
          <Route index element={<Cursos />} />
          <Route path=":cursoId" element={<Curso />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="/teacher" element={<Teacher />}>
        <Route index element={<ListTeacher />} />
        <Route path="cursos" element={<CoursesTeacher />} />
        <Route path="calendario" element={<CalendarT />} />
      </Route>
    </Routes>
  )
}

export default App
