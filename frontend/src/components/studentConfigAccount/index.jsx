import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { MultiSelect } from 'react-multi-select-component'
import { categories } from '@/data/categorias.json'
import axios from '@/utils/axios'

function StudentConfigAccount() {
  const { idUsuario } = useParams()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [selected, setSelected] = useState([])

  const onSubmit = (formData) => {
    console.log('Data', formData)
    axios
      .put(`api/users/${idUsuario}`, {
        ...formData,
        nickName: formData.name,
        role: 'student',
        occupation: 'student'
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

  return (
    <div className="grid h-screen place-content-center text-center">
      <div className="flex overflow-hidden rounded-3xl shadow-md">
        <div className="flex min-w-[300px] flex-col justify-center bg-white p-8">
          <h1 className="mb-4">Configurar cuenta de estudiante</h1>
          <form
            className="grid grid-cols-2 gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-left">
              <label>Nombres: </label>
              <input
                type="text"
                placeholder="Ingrese sus nombres"
                {...register('name', { required: 'Campo requerido' })}
                className={`${
                  errors?.nombres &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.nombres?.message && (
                <p className="text-red-600">{errors?.nombres.message}</p>
              )}
            </div>
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

            <div className="text-left">
              <label>Apellido Paterno: </label>
              <input
                type="text"
                placeholder="Ingrese apellido paterno"
                {...register('lastName', { required: 'Campo Requerido' })}
                className={`${
                  errors?.lastName &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.lastName?.message && (
                <p className="text-red-600">{errors?.lastName?.message}</p>
              )}
            </div>
            <div className="text-left">
              <label>Género: </label>
              <select
                placeholder="Seleccione su género"
                {...register('gender', { required: 'Campo Requerido' })}
                className={`${
                  errors?.gender &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              >
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
              {errors?.gender?.message && (
                <p className="text-red-600">{errors?.gender?.message}</p>
              )}
            </div>
            <div className="text-left">
              <label>Apellido Materno: </label>
              <input
                type="text"
                placeholder="Ingrese apellido materno"
                {...register('surName', { required: 'Campo Requerido' })}
                className={`${
                  errors?.surName &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.surName?.message && (
                <p className="text-red-600">{errors?.surName?.message}</p>
              )}
            </div>

            <div className="text-left">
              <label>Fecha de Nacimiento: </label>
              <input
                type="date"
                placeholder="Seleccione su fecha de nacimiento"
                {...register('birthday', { required: 'Campo Requerido' })}
                className={`${
                  errors?.birthday &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.birthday?.message && (
                <p className="text-red-600">{errors?.birthday?.message}</p>
              )}
            </div>
            <div className="text-left">
              <label>DNI: </label>
              <input
                type="number"
                placeholder="Ingrese su DNI"
                {...register('dni', { required: 'Campo Requerido' })}
                className={`${
                  errors?.dni &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.dni?.message && (
                <p className="text-red-600">{errors?.dni?.message}</p>
              )}
            </div>
            <div className="text-left">
              <label>Celular: </label>
              <input
                type="number"
                placeholder="Ingrese numero de celular"
                {...register('phoneNumber', { required: 'Campo Requerido' })}
                className={`${
                  errors?.phoneNumber &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.phoneNumber?.message && (
                <p className="text-red-600">{errors?.phoneNumber?.message}</p>
              )}
            </div>
            <div className="text-left">
              <label>Pais: </label>
              <select
                placeholder="Pais"
                {...register('country', { required: 'Campo Requerido' })}
                className={`${
                  errors?.country &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              >
                <option value="Peru">Perú</option>
                <option value="Argentina">Arg</option>
                <option value="...">...</option>
              </select>
              {errors?.country?.message && (
                <p className="text-red-600">{errors?.country?.message}</p>
              )}
            </div>

            <div className="text-left">
              <label>Foto de Portada: </label>
              <input
                type="file"
                {...register('image', { required: 'Campo Requerido' })}
                className={`${
                  errors?.image &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              ></input>
              {errors?.image?.message && (
                <p className="text-red-600">{errors?.image?.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary-400 hover:bg-primary-900 text-white"
            >
              Guardar Configuracion
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default StudentConfigAccount
