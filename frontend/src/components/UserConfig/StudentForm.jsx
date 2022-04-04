import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { MultiSelect } from 'react-multi-select-component'
import { useAuth } from '@/contexts/auth'
import useCategories from '@/hooks/useCategories'
import { updateUserData } from '@/services/users'
import { countryOptions, genderOptions } from './commonOptions'
import ModalLayout from '../Layouts/ModalLayout'
import InputForm from '../InputForm'
import Button from '../Button'

function StudentForm({ goBack }) {
  const { auth } = useAuth()
  const navigate = useNavigate()
  const categories = useCategories()
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState

  const [selected, setSelected] = useState([])

  const onSubmit = async (formData) => {
    const idsCategoriesSelected = selected.map((category) => category.value)
    const response = await updateUserData(
      auth.userId,
      { ...formData, idsCategoriesSelected },
      'student'
    )
    response.success && navigate('/login')
  }

  return (
    <>
      <ModalLayout.Title withIcon={true}>
        Configurar cuenta de estudiante
      </ModalLayout.Title>
      <form
        className="grid grid-cols-1 gap-4
        md:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputForm
          id="firstName"
          type="text"
          label="Nombres:"
          placeholder="Ingrese sus nombres"
          register={register}
          errors={errors}
        />
        <div className="text-left">
          <label>Categorias de Preferencia</label>
          <MultiSelect
            options={categories.options}
            value={selected}
            onChange={setSelected}
            isLoading={categories.status === 'loading'}
            labelledBy="Seleccionar categorias de interés"
            disableSearch
          />
        </div>
        <InputForm
          id="lastName"
          type="text"
          label="Apellido Paterno:"
          placeholder="Ingrese su apellido paterno"
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
          id="surName"
          type="text"
          label="Apellido Materno:"
          placeholder="Ingrese su apellido materno"
          register={register}
          errors={errors}
        />
        <InputForm
          id="birthday"
          type="date"
          label="Fecha de Nacimiento:"
          placeholder="Seleccione su fecha de nacimiento"
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
          id="image"
          name="image"
          type="file"
          label="Foto de Portada:"
          register={register}
          errors={errors}
          accept="image/*"
        />
        <Button type="submit" isLoading={isSubmitting}>
          Guardar
        </Button>
        <Button color="gray" onClick={goBack} disabled={isSubmitting}>
          Cancelar
        </Button>
      </form>
    </>
  )
}
export default StudentForm
