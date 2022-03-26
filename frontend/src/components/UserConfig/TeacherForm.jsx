import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useAuth from '@/hooks/useAuth'
import { updateUserData } from '@/services/users'
import { countryOptions, genderOptions } from './commonOptions'
import ModalLayout from '../Layouts/ModalLayout'
import InputForm from '../InputForm'
import Button from '../Button'

function TeacherForm({ goBack }) {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (formData) => {
    const response = await updateUserData(auth.userId, {
      ...formData,
      nickName: formData.name,
      role: 'teacher'
    })
    response.success && navigate('/login')
  }

  return (
    <>
      <ModalLayout.Title withIcon={true}>
        Configurar cuenta de docente
      </ModalLayout.Title>
      <form
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputForm
          id="name"
          type="text"
          label="Nombres:"
          placeholder="Ingrese sus nombres"
          register={register}
          errors={errors}
        />
        <InputForm
          id="lastname"
          type="text"
          label="Apellido Paterno:"
          placeholder="Ingrese su apellido paterno"
          register={register}
          errors={errors}
        />
        <InputForm
          id="surname"
          type="text"
          label="Apellido Materno:"
          placeholder="Ingrese su apellido materno"
          register={register}
          errors={errors}
        />
        <InputForm
          id="gender"
          label="Género:"
          select={true}
          options={genderOptions}
          register={register}
          errors={errors}
        />
        <InputForm
          id="birthday"
          type="date"
          label="Fecha de Nacimiento:"
          register={register}
          errors={errors}
        />
        <InputForm
          id="dni"
          type="number"
          label="DNI:"
          placeholder="Ingrese su DNI"
          register={register}
          errors={errors}
        />
        <InputForm
          id="phoneNumber"
          type="number"
          label="Celular:"
          placeholder="Ingrese su numero de celular"
          register={register}
          errors={errors}
        />
        <InputForm
          id="country"
          label="País:"
          select={true}
          options={countryOptions}
          register={register}
          errors={errors}
        />
        <InputForm
          id="cardNumber"
          type="number"
          label="Numero de Cuenta:"
          placeholder="Ingrese su numero de cuenta bancaria"
          register={register}
          errors={errors}
        />
        <InputForm
          id="image"
          type="file"
          label="Foto de Portada:"
          register={register}
          errors={errors}
        />
        <Button type="submit">Guardar</Button>
        <Button color="gray" onClick={goBack}>
          Cancelar
        </Button>
      </form>
    </>
  )
}
export default TeacherForm
