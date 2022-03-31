import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createCourse } from '@/services/courses'
import Button from '@/components/Button'
import UploadVideo from '@/components/UploadVideo'

function RegisterCourse() {
  const navigate = useNavigate()
  const [value, setValue] = useState({
    courseName: '',
    courseDescription: '',
    courseCategory: '',
    courseKeywords: ''
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateCourse = async (e) => {
    e.preventDefault()
    const response = await createCourse(value)
    if (response.success) return navigate('/teacher/cursos')
  }

  return (
    <div>
      <form className="w-full max-w-lg " onSubmit={handleCreateCourse}>
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
              type="text"
              name="courseName"
              placeholder="Nombre del curso"
              value={value.courseName}
              onChange={handleChange}
              className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
            />
            <p className="text-xs italic text-red-500">*Campo obligatorio.</p>
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="grid-title"
            >
              Selecciona la categoria
            </label>
            <select
              id="category"
              name="courseCategory"
              htmlFor="grid-category"
              value={value.courseCategory}
              onChange={handleChange}
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            >
              <option>Seleccione la categoria</option>
              <option>Desarrollo App Web</option>
              <option>Redes</option>
              <option>Desarrollo App movil</option>
            </select>
            <p className="text-xs italic text-red-500">
              *Seleccione la categoria.
            </p>
          </div>
          <div></div>
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
              type="text"
              id="grid-key-words"
              name="courseKeywords"
              placeholder="Palabras clave"
              value={value.courseKeywords}
              onChange={handleChange}
              className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            />
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
          type="text"
          id="grid-description"
          name="courseDescription"
          placeholder="Describa los temas que abarca el curso"
          value={value.courseDescription}
          onChange={handleChange}
          className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        />
        <label
          className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
          htmlFor="grid-category"
        >
          Seleccione la imagen principal del curso
        </label>
        <br />
        <div className="bg-grey-lighter flex h-24 items-center justify-center">
          <label className="text-blue border-blue hover:bg-blue flex w-96 cursor-pointer flex-col items-center rounded-lg border bg-white px-4 py-6 tracking-wide shadow-lg hover:text-white">
            <svg
              className="h-8 w-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-1 text-base">
              Selecciona la imagen principal del curso
            </span>
            <input type="file" className="hidden" />
          </label>
        </div>
        <br></br>
        <Button type="submit">Guardar</Button>
      </form>
      <UploadVideo />
    </div>
  )
}

export default RegisterCourse
