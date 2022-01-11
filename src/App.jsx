import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/dashboard/Layout'
import Inicio from './pages/dashboard/Inicio'
import Cursos from './pages/dashboard/cursos'
import Curso from './pages/dashboard/cursos/Curso'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="cursos">
          <Route index element={<Cursos />} />
          <Route path=":cursoId" element={<Curso />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
