import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from '@/utils/axios'
import ModalLayout from '../Layouts/ModalLayout'
import Button from '../Button'

function TeacherConfigAccount() {
  const { idUsuario } = useParams()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (formData) => {
    console.log('Data', formData)
    axios
      .put(`api/users/${idUsuario}`, {
        ...formData,
        nickName: formData.name,
        role: 'teacher',
        occupation: 'teacher'
      })
      .then(() => navigate('/login'))
      .catch((err) => console.log('err', err))
  }

  return (
    <ModalLayout>
      <ModalLayout.Content>
        <ModalLayout.Title withIcon={true}>
          Configurar cuenta de docente
        </ModalLayout.Title>
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
                errors?.name &&
                'border-red-600 focus:border-red-600 focus:ring-red-600'
              }`}
            />
            {errors?.name?.message && (
              <p className="text-red-600">{errors?.name.message}</p>
            )}
          </div>
          <div className="text-left">
            <label>Apellido Paterno: </label>
            <input
              type="text"
              placeholder="Ingrese apellido paterno"
              {...register('lastname', { required: 'Campo Requerido' })}
              className={`${
                errors?.lastname &&
                'border-red-600 focus:border-red-600 focus:ring-red-600'
              }`}
            />
            {errors?.lastname?.message && (
              <p className="text-red-600">{errors?.lastname?.message}</p>
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
            <label>Numero de Cuenta: </label>
            <input
              type="number"
              placeholder="Ingrese numero de cuenta bancaria"
              {...register('cardNumber', { required: 'Campo Requerido' })}
              className={`${
                errors?.cardNumber &&
                'border-red-600 focus:border-red-600 focus:ring-red-600'
              }`}
            />
            {errors?.cardNumber?.message && (
              <p className="text-red-600">{errors?.cardNumber?.message}</p>
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

          <Button type="submit">Guardar Configuracion</Button>
        </form>
      </ModalLayout.Content>
    </ModalLayout>
  )
}
export default TeacherConfigAccount
