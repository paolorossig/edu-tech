import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useCreateQuestionsMutation } from '@/features/courses/CourseApi'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'
import InputForm from '@/components/InputForm'

function RegisterQuestion() {
  const navigate = useNavigate()
  const { lessonId } = useParams()
  const [createQuestions] = useCreateQuestionsMutation()
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState

  const goBack = () => navigate(-1)

  const onSubmit = async (formData) => {
    const data = { description: formData.textoPregunta, lessonId: lessonId }
    await createQuestions(data)
    return goBack()
  }

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>Crea una pregunta nueva</ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <InputForm
            id="textoPregunta"
            type="text"
            label="Texto de la pregunta"
            placeholder="Ingrese el texto de la pregunta"
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
          </div>
        </form>
      </ContentPageLayout.Paper>
    </ContentPageLayout>
  )
}

export default RegisterQuestion
