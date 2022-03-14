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
import TeacherConfigAccount from './components/TeacherConfigAccount'
import SelectUser from './pages/SelectUser'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/selecccionar/usuario/:idUsuario" element={<SelectUser />} />
      <Route
        path="/configuracion/docente/:idUsuario"
        element={<TeacherConfigAccount />}
      />
      <Route
        path="/configuracion/estudiante/:idUsuario"
        element={<StudentConfigAccount />}
      />
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
    </Routes>
  )
}

export default App
