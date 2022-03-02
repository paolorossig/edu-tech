import { useNavigate } from 'react-router-dom'


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
        <div>
        
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
      <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-key-words"
          >
            DESCRIPCION DEL CURSO
          </label>
          <input
            className="mb-4 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            
            ></input>
<label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            htmlFor="grid-category"
          >
            Seleccione la imagen principal del curso
          </label>
          <br/>
      <div className="flex h-24 items-center justify-center bg-grey-lighter">
    <label className="w-96 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-1 text-base">Selecciona la imagen principal del curso</span>
        <input type='file' className="hidden" />
    </label>
    
</div>

<br></br>
<br></br>
<br></br>
      <button
        onClick={handleSubmit}
        className="flex items-center justify-center rounded-xl border border-gray-300 px-8 py-2"
      >
        <p className="text-gray-500">Guardar</p>
      </button>
      <br></br>
      
    </form>
  )
}
export default createCourse
