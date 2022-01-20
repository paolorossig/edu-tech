import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Inicio from './pages/dashboard/Inicio'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Inicio />} />
      </Route>
    </Routes>
  )
}

export default App
