import { Link } from 'react-router-dom'
import useUsersByType from '@/hooks/useUsersByType'
import Badge from '@/components/Badge'

function TeachersAvailableList() {
  const { teachers } = useUsersByType()

  return (
    <section>
      <h1 className="mb-8">Profesores Disponibles</h1>
      <div className="flex flex-wrap gap-8">
        {teachers.map((teacher) => (
          <Link to={`teachers/${teacher._id}/chat`} key={teacher._id}>
            <Badge
              title={`${teacher.firstName} ${teacher.lastName}`}
              image={teacher.photoURL}
              number={10}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default TeachersAvailableList
