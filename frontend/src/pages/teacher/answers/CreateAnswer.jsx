import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useCreateAnswersMutation } from '@/features/courses/CourseApi'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import Button from '@/components/Button'
import InputForm from '@/components/InputForm'

function RegisterAnswer() {
  const navigate = useNavigate()
  const { questionId } = useParams()
  const [createAnswers] = useCreateAnswersMutation()
  const { register, handleSubmit, formState } = useForm()
  const { errors, isSubmitting } = formState

  const goBack = () => navigate(-1)

  const onSubmit = async (formData) => {
    const data = {
      ...formData,
      correct: formData.correct === 'true',
      question: questionId
    }
    await createAnswers(data)
    return goBack()
  }

  return (
    <ContentPageLayout>
      <ContentPageLayout.Title>
        Crea una respuesta nueva
      </ContentPageLayout.Title>
      <ContentPageLayout.Paper>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <InputForm
            id="text"
            type="text"
            label="Texto de la pregunta"
            placeholder="Ingrese el texto de la pregunta"
            register={register}
            errors={errors}
          />
          <div className="flex items-center justify-center">
            <input
              {...register('correct', {
                required: 'Seleccionar un estado es requerido'
              })}
              type="radio"
              value={true}
            />
            <p className="ml-1">Correcta</p>
          </div>
          <div className="flex items-center justify-center">
            <input
              {...register('correct', {
                required: 'Seleccionar el valor de la respuesta'
              })}
              type="radio"
              value={false}
            />
            <p className="ml-1">Incorrecta</p>
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

export default RegisterAnswer
