import { Link, useParams } from 'react-router-dom'
import { mentores } from '@/data/mentores.json'

function MentorCourses() {
  const { mentorId } = useParams()
  const mentor = mentores.find((curso) => curso.id === mentorId)

  return (
    <>
      <h2 className="pb-4 text-2xl text-slate-600">{`Cursos dictados por ${mentor?.name}`}</h2>
      <ul className="flex flex-col gap-3">
        {Array.from({ length: 20 }, (v, i) => i).map((e, index) => (
          <li key={index}>
            <Link to="/dashboard/courses">
              <article className="grid grid-cols-5 items-center gap-2 border-b p-2">
                <img
                  alt="cusro"
                  src="https://edteam-media.s3.amazonaws.com/courses/original/262e68b3-eea2-43f2-9e9a-febc106a8295.png"
                />
                <span className="col-span-4">CSS Avanzado</span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MentorCourses
