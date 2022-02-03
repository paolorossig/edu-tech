import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import loginSVG from '@/assets/svg/login.svg'

function Login() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    // Just to simulate user sign in
    navigate('/dashboard')
  }

  return (
    <div className="grid h-screen place-content-center text-center">
      <div className="flex overflow-hidden rounded-3xl shadow-md">
        <div className="flex flex-col justify-center bg-white p-8">
          <h1 className="mb-4">Inicia sesión</h1>
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center rounded-xl border border-gray-300 px-8 py-2"
          >
            <FcGoogle className="mr-2 h-8 w-8" />
            <p className="text-gray-500">Ingresa con Google</p>
          </button>
          <p className="my-5 text-sm text-gray-700">O con tu correo</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email"
              className="rounded-md bg-gray-100 p-2"
            />
            <input
              type="text"
              placeholder="Contraseña"
              className="rounded-md bg-gray-100 p-2"
            />
            <a href="#" className="mb-2 text-sm text-blue-600">
              ¿Olvidaste tu contraseña?
            </a>
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-xl bg-gray-300 py-2 px-4 text-gray-500 hover:bg-slate-400 hover:text-white"
            >
              Iniciar sesión
            </button>
            <a href="#" className="text-sm text-blue-600">
              ¿No tienes cuenta? Regístrate
            </a>
          </form>
        </div>
        <div className="grid max-w-md place-content-center bg-slate-200 p-8">
          <img src={loginSVG} alt="login-image" />
        </div>
      </div>
    </div>
  )
}

export default Login
