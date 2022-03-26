import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { MultiSelect } from 'react-multi-select-component'
import useAuth from '@/hooks/useAuth'
import { updateUserData } from '@/services/users'
import { countryOptions, genderOptions } from './commonOptions'
import { categories } from '@/data/categorias.json'
import ModalLayout from '../Layouts/ModalLayout'
import InputForm from '../InputForm'
import Button from '../Button'

function StudentForm({ goBack }) {
  const { auth } = useAuth()
  // const [image, setImage] = useState()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [selected, setSelected] = useState([])

  const onSubmit = async (formData) => {
    const idsCategoriesSelected = selected.map((category) => category.value)
    const response = await updateUserData(
      auth.userId,
      formData,
      1,
      idsCategoriesSelected
    )
    response.success && navigate('/login')
  }

  const categoriesStructure = (categorias) =>
    categorias.map((val) => {
      return { label: val.name, value: val._id }
    })

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
          type="text"
          placeholder="Ingrese sus nombres"
          label="Nombres:"
          id="name"
          register={register}
          errors={errors}
        />
        <div className="text-left">
          <label>Categorias de Preferencia</label>
          <MultiSelect
            options={categoriesStructure(categories)}
            value={selected}
            onChange={setSelected}
            labelledBy="Seleccionar categorias de interés"
            disableSearch
          />
        </div>
        <InputForm
          type="text"
          placeholder="Ingrese su apellido paterno"
          label="Apellido Paterno:"
          id="lastname"
          register={register}
          errors={errors}
        />
        <InputForm
          label="Género:"
          id="gender"
          select={true}
          options={genderOptions}
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
          label="País:"
          id="country"
          select={true}
          options={countryOptions}
          register={register}
          errors={errors}
        />
        <InputForm
          type="file"
          label="Foto de Portada:"
          id="image"
          name="image"
          register={register}
          errors={errors}
          accept="image/*"
        />
        <Button type="submit">Guardar</Button>
        <Button color="gray" onClick={goBack}>
          Cancelar
        </Button>
      </form>
    </>
  )
}
export default StudentForm
