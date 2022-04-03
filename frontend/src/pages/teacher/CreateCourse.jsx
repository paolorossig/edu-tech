import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaCloudUploadAlt } from 'react-icons/fa'
import useCategories from '@/hooks/useCategories'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { useCreateCourseMutation } from '@/features/courses/CourseSlice'

function RegisterCourse() {
  const navigate = useNavigate()
  const { options } = useCategories()
  const [createCourse] = useCreateCourseMutation()
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState

  const goBack = () => navigate(-1)

  const onSubmit = async (formData) => {
    const data = new FormData()
    const { image } = formData
    image && data.append('imageURL', image[0], image[0].name)
    data.append('name', formData.name)
    data.append('description', formData.description)
    data.append('category', formData.category)
    data.append('keywords', formData.keywords.split(' '))
    data.append('price', formData.price)

    await createCourse({ data })
    return goBack()
  }

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>Crea un curso nuevo</ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <InputForm
              id="name"
              type="text"
              label="Nombre del curso"
              placeholder="Ingrese el nombre del curso"
              register={register}
              errors={errors}
            />
            <InputForm
              id="category"
              label="Categoría:"
              select={true}
              options={options}
              register={register}
              errors={errors}
            />
          </div>
          <InputForm
            id="description"
            type="text"
            label="Descripción del curso"
            placeholder="Describa los temas que abarcará"
            register={register}
            errors={errors}
          />
          <p className="text-xs italic text-gray-600">
            Debe ingresar una descripción concisa de la metodología y temas a
            tratar en el curso
          </p>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <InputForm
              id="keywords"
              type="text"
              label="Palabras clave"
              placeholder="Ingrese palabras clave"
              register={register}
              errors={errors}
            />
            <InputForm
              id="price"
              type="number"
              label="Precio"
              placeholder="Ingrese el precio sugerido"
              register={register}
              errors={errors}
            />
          </div>
          <label className="mb-1">Portada del curso</label>
          <div className="flex h-24 items-center justify-center">
            <label className="flex cursor-pointer flex-col items-center rounded-lg border bg-white px-4 py-6 tracking-wide shadow-lg hover:text-gray-500">
              <FaCloudUploadAlt className="text-3xl" />
              <span className="mt-1 text-base">
                Selecciona una imagen para el curso
              </span>
              <InputForm
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
                register={register}
                errors={errors}
              />
            </label>
          </div>
          <div className="mt-4 flex justify-center gap-10">
            <Button color="gray" onClick={goBack}>
              Cancelar
            </Button>
            <Button type="submit" isLoading={isSubmitting}>
              Guardar
            </Button>
          </div>
        </form>
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default RegisterCourse
