import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { EyeIcon } from '@heroicons/react/outline'
import ModalLayout from '@/components/Layouts/ModalLayout'
import Button from '@/components/Button'
import useAuth from '@/hooks/useAuth'
import useToggle from '@/hooks/useToggle'
import icon from '@/assets/svg/icon.svg'
import loginSVG from '@/assets/svg/login.svg'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { isLoading, userSignup } = useAuth()
  const navigate = useNavigate()
  const [responseError, setResponseError] = useState()
  const [viewPassword, toggleViewPassword] = useToggle()

  const onSubmit = async (data) => {
    const response = await userSignup(data)
    if (!response.success) setResponseError(response.error)
    if (response.user) navigate('/login')
  }

  return (
    <ModalLayout imgsrc={loginSVG}>
      <div className="relative mb-4 flex h-16 items-center">
        <Link to="/" className="absolute -left-2 h-full">
          <img src={icon} alt="logo" className="h-full" />
        </Link>
        <h1 className="w-full">Regístrate</h1>
      </div>
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center justify-center rounded-xl border border-gray-300 py-2 px-4"
      >
        <FcGoogle className="mr-2 h-6 w-6" />
        <p className="text-gray-500">Continúa con Google</p>
      </button>
      <div className="flex w-full items-center justify-between gap-4">
        <hr className="w-full bg-gray-400" />
        <p className="my-5 text-sm text-gray-700">O</p>
        <hr className="w-full bg-gray-400" />
      </div>
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
        <div className="relative flex items-center justify-center">
          <input
            type={viewPassword ? 'text' : 'password'}
            placeholder="Contraseña"
            {...register('password', { required: true, minLength: 6 })}
            className={`${
              errors?.password &&
              'border-red-600 focus:border-red-600 focus:ring-red-600'
            }`}
          />
          <div
            onClick={toggleViewPassword}
            className="absolute right-0 mr-3 cursor-pointer"
          >
            <EyeIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <input
            type={viewPassword ? 'text' : 'password'}
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
        <Button type="submit" isLoading={isLoading}>
          Regístrate
        </Button>
      </form>
    </ModalLayout>
  )
}

export default Signup
