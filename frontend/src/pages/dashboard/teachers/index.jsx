import { Link } from 'react-router-dom'
import useTeachers from '@/hooks/useTeachers'

function Teachers() {
  const teachers = useTeachers()

  return (
    <section className="flex flex-wrap gap-x-6 gap-y-4">
      {teachers.map((teacher) => (
        <Link to={`${encodeURIComponent(teacher._id)}`} key={teacher._id}>
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <img
              className="h-36 w-36 rounded-full object-cover"
              alt="profile"
              src={
                teacher.photoURL ||
                'https://www.w3schools.com/howto/img_avatar.png'
              }
            />
            <h3 className="font-bold">{`${teacher.firstName} ${teacher.lastName}`}</h3>
            <p className="text-gray-700"># Frontend</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Teachers
