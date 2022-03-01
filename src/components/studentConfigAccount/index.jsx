import { useForm } from 'react-hook-form'

function StudentConfigAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  function onSubmit(formData) {
    console.log('Data', formData)
  }
  return (
    <div className="grid h-screen place-content-center text-center">
      <div className="flex overflow-hidden rounded-3xl shadow-md">
        <div className="flex min-w-[300px] flex-col justify-center bg-white p-8">
          <h1 className="mb-4">Configurar Cuenta</h1>
          <form
            className="grid grid-cols-2 gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-left">
              <label>Nombres: </label>
              <input
                type="text"
                placeholder="Ingrese sus nombres"
                {...register('nombres', { required: 'Campo requerido' })}
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
              <label>Apellido Paterno: </label>
              <input
                type="text"
                placeholder="Ingrese Apellido Paterno"
                {...register('apellidoPaterno', {
                  required: 'Campo Requerido'
                })}
                className={`${
                  errors?.apellidoPaterno &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.apellidoPaterno?.message && (
                <p className="text-red-600">
                  {errors?.apellidoPaterno?.message}
                </p>
              )}
            </div>
            <div className="text-left">
              <label>Apellido Materno: </label>
              <input
                type="text"
                placeholder="Ingrese Apellido Materno"
                {...register('apellidoMaterno', {
                  required: 'Campo Requerido'
                })}
                className={`${
                  errors?.apellidoMaterno &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.apellidoMaterno?.message && (
                <p className="text-red-600">
                  {errors?.apellidoMaterno?.message}
                </p>
              )}
            </div>
            <div className="text-left">
              <label>Sexo: </label>
              <select
                placeholder="Seleccione su sexo"
                {...register('sexo', {
                  required: 'Campo Requerido'
                })}
                className={`${
                  errors?.sexo &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              >
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
              {errors?.sexo?.message && (
                <p className="text-red-600">{errors?.sexo?.message}</p>
              )}
            </div>
            <div className="text-left">
              <label>Fecha de Nacimiento: </label>
              <input
                type="date"
                placeholder="Seleccione su fecha de Nacimiento"
                {...register('fechaNacimiento', {
                  required: 'Campo Requerido'
                })}
                className={`${
                  errors?.fechaNacimiento &&
                  'border-red-600 focus:border-red-600 focus:ring-red-600'
                }`}
              />
              {errors?.fechaNacimiento?.message && (
                <p className="text-red-600">
                  {errors?.fechaNacimiento?.message}
                </p>
              )}
            </div>
            <div className="text-left">
              <label>DNI: </label>
              <input
                type="number"
                placeholder="Ingrese su DNI"
                {...register('dni', {
                  required: 'Campo Requerido'
                })}
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
                placeholder="Ingrese numero de celular."
                {...register('phoneNumber', {
                  required: 'Campo Requerido'
                })}
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
                {...register('country', {
                  required: 'Campo Requerido'
                })}
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
                {...register('image', {
                  required: 'Campo Requerido'
                })}
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
              className="bg-primary text-white hover:bg-[#008ecf]"
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
