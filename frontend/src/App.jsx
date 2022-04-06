import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Loading from './components/Loading'
const Landing = lazy(() => import('./pages/Landing'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const SelectUserType = lazy(() => import('./pages/SelectUserType'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const TeacherDashboard = lazy(() => import('./pages/teacher'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/select-user-type" element={<SelectUserType />} />

        <Route element={<RequireAuth />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/teacher/*" element={<TeacherDashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
