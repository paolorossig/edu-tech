import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaCloudUploadAlt } from 'react-icons/fa'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { useCreateLessonMutation } from '@/features/courses/CourseApi'

function RegisterLesson() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [createLesson] = useCreateLessonMutation()
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState

  const goBack = () => navigate(-1)

  const onSubmit = async (formData) => {
    const data = new FormData()
    const { video } = formData
    video && data.append('videoURL', video[0], video[0].name)
    data.append('title', formData.title)
    data.append('description', formData.description)
    data.append('course', courseId)
    await createLesson({ data })
    return goBack()
  }

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>Crea una lección nueva</ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-1 md:gap-12">
            <InputForm
              id="title"
              type="text"
              label="Título de la lección"
              placeholder="Ingrese el título de la lección"
              register={register}
              errors={errors}
            />
          </div>
          <InputForm
            id="description"
            type="text"
            label="Descripción del curso"
            placeholder="Describa sobre que tratará la lección"
            register={register}
            errors={errors}
          />
          <p className="text-xs italic text-gray-600">
            Debe ingresar una descripción concisa de los temas que abarcará en
            la lección.
          </p>
          <label className="mb-1">Vídeo de la lección</label>
          <div className="flex h-24 items-center justify-center">
            <label className="flex cursor-pointer flex-col items-center rounded-lg border bg-white px-4 py-6 tracking-wide shadow-lg hover:text-gray-500">
              <FaCloudUploadAlt className="text-3xl" />
              <span className="mt-1 text-base">
                Selecciona un video para la lección
              </span>
              <InputForm
                id="video"
                type="file"
                accept="video/*"
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

export default RegisterLesson
