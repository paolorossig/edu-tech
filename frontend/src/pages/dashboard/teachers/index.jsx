import { Link } from 'react-router-dom'
import useTeachers from '@/hooks/useTeachers'

function Teachers() {
  const teachers = useTeachers()

  return (
    <section className="flex flex-col gap-x-6 gap-y-4 md:flex-row md:flex-wrap">
      {teachers.map((teacher) => (
        <Link to={`${encodeURIComponent(teacher._id)}`} key={teacher._id}>
          <article className="flex items-center gap-8 rounded-xl bg-white p-4 shadow-md md:flex-col md:gap-4">
            <img
              className="h-20 w-20 rounded-full object-cover md:h-36 md:w-36"
              alt="profile"
              src={
                teacher.photoURL ||
                'https://www.w3schools.com/howto/img_avatar.png'
              }
            />
            <div className="flex flex-auto flex-col items-center">
              <h1 className="pb-2 text-center">{`${teacher.firstName} ${teacher.lastName}`}</h1>
              <p># Frontend</p>
              <p>Disponible</p>
            </div>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default Teachers
