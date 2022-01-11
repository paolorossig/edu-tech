import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Inicio from './pages/dashboard/Inicio'
import Pasarela from './pages/checkout/Pasarela'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Inicio />} />
      </Route>
      <Route path="/pasarela" element={<Dashboard />}>
        <Route index element={<Pasarela />} />
      </Route>
    </Routes>
  )
}

export default App
