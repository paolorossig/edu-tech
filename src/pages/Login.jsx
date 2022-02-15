import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import AuthLayout from '@/components/AuthLayout'
import loginSVG from '@/assets/svg/login.svg'
import { login } from '@/services/auth'

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = e.target
    const user = {
      email: email.value,
      password: password.value
    }

    const response = await login(user)
    if (!response.success) {
      setError(response.error)
      return
    }
    return navigate('/dashboard')
  }

  return (
    <AuthLayout imgsrc={loginSVG}>
      <h1 className="mb-4">Inicia sesión</h1>
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center justify-center border-gray-300"
      >
        <FcGoogle className="mr-2 h-8 w-8" />
        <p className="text-gray-500">Ingresa con Google</p>
      </button>
      <p className="my-5 text-sm text-gray-700">O con tu correo</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="mb-4"
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            className="mb-1"
          />
          <label className="mr-2 text-right text-sm text-red-600">
            {error || ''}
          </label>
        </div>
        <a href="#" className="mb-2 text-sm text-blue-600">
          ¿Olvidaste tu contraseña?
        </a>
        <button
          type="submit"
          className="bg-gray-300 text-gray-500 hover:bg-slate-400 hover:text-white"
        >
          Iniciar sesión
        </button>
        <Link to="/signup" className="text-sm text-blue-600">
          ¿No tienes cuenta? Regístrate
        </Link>
      </form>
    </AuthLayout>
  )
}

export default Login
