import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { EyeIcon } from '@heroicons/react/outline'
import ModalLayout from '@/components/Layouts/ModalLayout'
import Button from '@/components/Button'
import useAuth from '@/hooks/useAuth'
import useToggle from '@/hooks/useToggle'
import loginSVG from '@/assets/svg/login.svg'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { isLoading, userLogin } = useAuth()
  const { state } = useLocation()
  const navigate = useNavigate()
  const [responseError, setResponseError] = useState()
  const [viewPassword, toggleViewPassword] = useToggle()

  const onSubmit = async (data) => {
    const response = await userLogin(data)
    if (!response.success) {
      return setResponseError(response.error)
    }
    return navigate(
      state?.from?.pathname
        ? state.from.pathname
        : response.user.role === 'student'
        ? '/dashboard'
        : '/teacher'
    )
  }

  return (
    <ModalLayout>
      <ModalLayout.Content>
        <ModalLayout.Title withIcon={true}>Inicia sesión</ModalLayout.Title>
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center justify-center rounded-xl border border-gray-300 py-2 px-4"
        >
          <FcGoogle className="mr-2 h-6 w-6" />
          <p className="text-gray-500">Ingresa con Google</p>
        </button>
        <div className="flex w-full items-center justify-between gap-4">
          <hr className="w-full bg-gray-400" />
          <p className="my-5 text-sm text-gray-700">O</p>
          <hr className="w-full bg-gray-400" />
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className={`mb-4 ${
                errors?.email &&
                'border-red-600 focus:border-red-600 focus:ring-red-600'
              }`}
              {...register('email', { required: true })}
            />
            <div className="relative flex items-center justify-center">
              <input
                type={viewPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                className={`mb-1 ${
                  errors?.password &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
                {...register('password', { required: true, minLength: 6 })}
              />
              <div
                onClick={toggleViewPassword}
                className="absolute right-0 mr-3 cursor-pointer"
              >
                <EyeIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <label className="mr-2 text-right text-sm text-red-600">
              {responseError || ''}
            </label>
          </div>
          <a href="#" className="mb-2 text-sm text-blue-600">
            ¿Olvidaste tu contraseña?
          </a>
          <Button type="submit" isLoading={isLoading}>
            Iniciar sesión
          </Button>
          <Link to="/signup" className="text-sm text-blue-600">
            ¿No tienes cuenta? Regístrate
          </Link>
        </form>
      </ModalLayout.Content>
      <ModalLayout.Image imgsrc={loginSVG} />
    </ModalLayout>
  )
}

export default Login
