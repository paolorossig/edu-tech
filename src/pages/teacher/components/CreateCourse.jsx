import { useNavigate } from 'react-router-dom'
import DropDownSelect from './DropDownSelect'

function createCourse() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('../../teacher', { replace: true })
  }

  return (
    <form className="w-full max-w-lg ">
      <h1>Crea un curso nuevo</h1>
      <br></br>
      <h2 className="font-xs">Informacion General</h2>
      <br></br>

      <div className="-mx-3 mb-6 flex flex-wrap ">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-title"
          >
            Nombre del curso
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            id="grid-nombre-curso"
            type="text"
            placeholder="Nombre del curso"
          ></input>
          <p className="text-xs italic text-red-500">
            *Por favor llene este campo.
          </p>
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-category"
          >
            Categoria
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-last-name"
            type="text"
            placeholder="Seleccione la categoria"
          ></input>
          <p className="text-xs italic text-red-500">
            *Seleccione la categoria.
          </p>
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-key-words"
          >
            Palabras clave
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-password"
            type="password"
            placeholder="******************"
          ></input>
          <p className="text-xs italic text-gray-600">
            Debe ingresar las palabras claves que se relacionan al curso que
            desea crear
          </p>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="flex items-center justify-center rounded-xl border border-gray-300 px-8 py-2"
      >
        <p className="text-gray-500">Guardar</p>
      </button>
      <br></br>
      <div>
        <h1>Capitulos</h1>
      </div>
      <p>Debe elegir que capitulo va a crear o modificar</p>
      <div>{<DropDownSelect />}</div>
    </form>
  )
}
export default createCourse
