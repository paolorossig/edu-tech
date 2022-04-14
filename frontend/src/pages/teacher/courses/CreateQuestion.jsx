import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { useCreateQuestionMutation } from '@/features/courses/CourseApi'

function CreateQuestion() {
  const navigate = useNavigate()
  const [createQuestion] = useCreateQuestionMutation()
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState

  const goBack = () => navigate(-1)

  const onSubmit = async (formData) => {
    const data = new FormData()
    data.append('description', formData.description)
    await createQuestion({ data })
    return goBack()
  }

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>
        Crea el cuestionario para tu curso
      </ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <InputForm
              id="description"
              type="text"
              label="Debes ingresar la pregunta a responder"
              placeholder="La pregunta debe ser clara"
              register={register}
              errors={errors}
            />
          </div>
          <InputForm
            id="Answer1"
            type="text"
            label="Ingresa 3 alternativas"
            placeholder="Alternativa de respuesta numero 1"
            register={register}
            errors={errors}
          />
          <InputForm
            id="Answer2"
            type="text"
            placeholder="Alternativa de respuesta numero 2"
            register={register}
            errors={errors}
          />
          <InputForm
            id="Answer3"
            type="text"
            placeholder="Alternativa de respuesta numero 3"
            register={register}
            errors={errors}
          />
          <div className="mt-4 flex justify-center gap-10">
            <Button color="gray" onClick={goBack}>
              Cancelar
            </Button>
            <Button type="submit" isLoading={isSubmitting}>
              Guardar
            </Button>
            <Button type="submit" isLoading={isSubmitting}>
              Crear otra pregunta
            </Button>
          </div>
        </form>
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default CreateQuestion
