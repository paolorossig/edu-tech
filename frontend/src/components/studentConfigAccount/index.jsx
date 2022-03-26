import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { MultiSelect } from 'react-multi-select-component'
import { categories } from '@/data/categorias.json'
import axios from '@/utils/axios'
import ModalLayout from '../Layouts/ModalLayout'
import InputForm from '../InputForm'
import Button from '../Button'

function StudentConfigAccount() {
  const { idUsuario } = useParams()
  const [image, setImage] = useState('')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [selected, setSelected] = useState([])

  const onSubmit = (formData) => {
    // console.log('Data', formData)
    const data = new FormData()
    if (image) {
      console.log(typeof image)
      for (let i = 0; i < image.length; i++) {
        // Con el metodo append vamos agregando los archivos
        // y si tuvieramos otros campos también
        data.append('photoURL', image[i], image[i].name)
      }
    }
    data.append('nickName', formData.name)
    data.append('role', 'student')
    data.append('occupation', 'student')
    data.append('firstName', formData.name)
    axios
      .put(`http://localhost:4000/api/users/${idUsuario}`, data, {
        headers: {
          'Content-Type': `multipart/form-data;`
        }
      })
      .then(() => console.log('Logrado'))
      .catch((err) => console.log('err', err))
    axios
      .post(`http://localhost:4000/api/student`, {
        user: idUsuario,
        savedAccountNumbers: 123456789,
        coursesEnabled: []
      })
      .then(() => navigate('/login'))
      .catch((err) => console.log('err', err))
  }
  const categoriesStructure = (categorias) => {
    const newData = []
    categorias.forEach((val) => {
      newData.push({ label: val.name, value: val })
    })
    return newData
  }
  const handleChange = (event) => {
    console.log('here', event.target.files)
    setImage(event.target.files)
  }

  return (
    <ModalLayout>
      <ModalLayout.Content>
        <ModalLayout.Title withIcon={true}>
          Configurar cuenta de estudiante
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
          <div className="text-left">
            <label>Categorias de Preferencia</label>
            {/* <pre>{JSON.stringify(selected)}</pre> */}
            <MultiSelect
              options={categoriesStructure(categories)}
              value={selected}
              onChange={setSelected}
              labelledBy="Seleccionar categorias de interes."
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
          <input
            type="file"
            label="Foto de Portada:"
            id="image"
            accept="image/*"
            onChange={(event) => handleChange(event)}
          />
          <Button type="submit">Guardar Configuracion</Button>
        </form>
      </ModalLayout.Content>
    </ModalLayout>
  )
}
export default StudentConfigAccount
