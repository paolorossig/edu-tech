import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { useCreateLessonMutation } from '@/features/courses/CourseApi'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'
import InputForm from '@/components/InputForm'

function RegisterLesson() {
  const navigate = useNavigate()
  const { courseId } = useParams()
  const [createLesson] = useCreateLessonMutation()
  const { register, handleSubmit, formState, setError } = useForm()
  const { errors, isSubmitting } = formState

  const goBack = () => navigate(-1)

  const onSubmit = async (formData) => {
    const data = new FormData()
    const { video } = formData
    if (video[0].size >= 10485760) {
      return setError('video', {
        type: 'video-size',
        message: 'El tamaño del video excede el máximo permitido'
      })
    }
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
          <InputForm
            id="title"
            type="text"
            label="Título de la lección"
            placeholder="Ingrese el título de la lección"
            register={register}
            errors={errors}
          />
          <InputForm
            id="description"
            type="text"
            label="Descripción de la lección"
            placeholder="Describa sobre que tratará la lección"
            register={register}
            errors={errors}
          />
          <p className="text-xs italic text-gray-600">
            Debe ingresar una descripción concisa de los temas que abarcará en
            la lección.
          </p>
          <label className="mb-1">Video de la lección</label>
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
