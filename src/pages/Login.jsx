import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import loginSVG from '../assets/svg/login.svg'

function Login() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    // Just to simulate user sign in
    navigate('/dashboard')
  }

  return (
    <div className="h-screen grid place-content-center text-center">
      <div className="flex rounded-3xl shadow-md overflow-hidden">
        <div className="flex flex-col justify-center bg-white p-8">
          <h1 className="mb-4">Inicia sesión</h1>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center px-8 py-2 border rounded-xl border-gray-300"
          >
            <FcGoogle className="w-8 h-8 mr-2" />
            <p className="text-gray-500">Ingresa con Google</p>
          </button>
          <p className="my-5 text-sm text-gray-700">O con tu correo</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-100 rounded-md p-2"
            />
            <input
              type="text"
              placeholder="Contraseña"
              className="bg-gray-100 rounded-md p-2"
            />
            <a href="#" className="text-sm text-blue-600 mb-2">
              ¿Olvidaste tu contraseña?
            </a>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gray-300 hover:bg-slate-400 hover:text-white py-2 px-4 rounded-xl text-gray-500"
            >
              Iniciar sesión
            </button>
            <a href="#" className="text-sm text-blue-600">
              ¿No tienes cuenta? Regístrate
            </a>
          </form>
        </div>
        <div className="p-8 max-w-md bg-slate-200 grid place-content-center">
          <img src={loginSVG} alt="login-image" />
        </div>
      </div>
    </div>
  )
}

export default Login
