import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from '@/utils/axios'
import useAuth from '@/hooks/useAuth'
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

  const onSubmit = (formData) => {
    axios
      .put(`api/users/${auth.userId}`, {
        ...formData,
        nickName: formData.name,
        role: 'teacher',
        occupation: 'teacher'
      })
      .then(() => navigate('/login'))
      .catch((err) => console.log('err', err))
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
          type="text"
          placeholder="Ingrese sus nombres"
          label="Nombres:"
          id="name"
          register={register}
          errors={errors}
        />
        <InputForm
          type="text"
          placeholder="Ingrese su apellido paterno"
          label="Apellido Paterno:"
          id="lastname"
          register={register}
          errors={errors}
        />
        <InputForm
          type="text"
          placeholder="Ingrese su apellido materno"
          label="Apellido Materno:"
          id="surname"
          register={register}
          errors={errors}
        />
        <InputForm
          select={true}
          label="Género:"
          id="gender"
          register={register}
          errors={errors}
        >
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </InputForm>
        <InputForm
          type="date"
          placeholder="Seleccione su fecha de nacimiento"
          label="Fecha de Nacimiento:"
          id="birthday"
          register={register}
          errors={errors}
        />
        <InputForm
          type="number"
          placeholder="Ingrese su DNI"
          label="DNI:"
          id="dni"
          register={register}
          errors={errors}
        />
        <InputForm
          type="number"
          placeholder="Ingrese su numero de celular"
          label="Celular:"
          id="phoneNumber"
          register={register}
          errors={errors}
        />
        <InputForm
          select={true}
          label="País:"
          id="country"
          register={register}
          errors={errors}
        >
          <option value="Peru">Perú</option>
          <option value="Argentina">Arg</option>
          <option value="...">...</option>
        </InputForm>
        <InputForm
          type="number"
          placeholder="Ingrese su numero de cuenta bancaria"
          label="Numero de Cuenta:"
          id="cardNumber"
          register={register}
          errors={errors}
        />
        <InputForm
          type="file"
          label="Foto de Portada:"
          id="image"
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
