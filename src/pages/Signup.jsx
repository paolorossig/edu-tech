import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import AuthLayout from '@/components/AuthLayout'
import loginSVG from '@/assets/svg/login.svg'
import useAuth from '@/hooks/useAuth'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { userSignup } = useAuth()
  const navigate = useNavigate()
  const [responseError, setResponseError] = useState()

  const onSubmit = async (data) => {
    const response = await userSignup(data)
    if (!response.success) setResponseError(response.error)
    if (response.user) navigate('/login')
  }

  return (
    <AuthLayout imgsrc={loginSVG}>
      <h1 className="mb-4">Regístrate</h1>
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center justify-center border-gray-300"
      >
        <FcGoogle className="mr-2 h-8 w-8" />
        <p className="text-gray-500">Ingresa con Google</p>
      </button>
      <p className="my-5 text-sm text-gray-700">O con tu correo</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
          className={`${
            errors?.email &&
            'border-red-600 focus:border-red-600 focus:ring-red-600'
          }`}
        />
        <input
          type="password"
          placeholder="Contraseña"
          {...register('password', { required: true, minLength: 6 })}
          className={`${
            errors?.password &&
            'border-red-600 focus:border-red-600 focus:ring-red-600'
          }`}
        />
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          {...register('passwordConfirmation', {
            required: true,
            minLength: 6
          })}
          className={`${
            errors?.passwordConfirmation &&
            'border-red-600 focus:border-red-600 focus:ring-red-600'
          }`}
        />
        <label className="mr-2 text-right text-sm text-red-600">
          {responseError || ''}
        </label>
        <button
          type="submit"
          className="bg-primary text-white hover:bg-[#008ecf]"
        >
          Regístrate
        </button>
      </form>
    </AuthLayout>
  )
}

export default Signup
