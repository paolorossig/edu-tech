import { useParams, NavLink, Outlet } from 'react-router-dom'
import { mentores } from '@/data/mentores.json'
import { ReactComponent as CoursesSVG } from '@/assets/svg/courses.svg'
import { ReactComponent as ChatSVG } from '@/assets/svg/chat.svg'

function Mentor() {
  const { mentorId } = useParams()
  const mentor = mentores.find((curso) => curso.id === mentorId)

  return (
    <div className="flex flex-1 flex-col px-8">
      <section className="header-mentor mb-8 h-64">
        <img
          className="h-full w-full object-cover"
          src="https://app.ed.team/static/images/utils/covers/profile-cover-(6).jpg"
          alt="fondo de mentor"
        />
      </section>

      <section className="content-mentor mx-3 grid h-full grid-cols-12 gap-6">
        <div className="col-span-3 col-start-1">
          <aside className="sticky top-32 -mt-36">
            <section className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md">
              <div className="flex flex-col items-center justify-center">
                <picture className="h-36 w-36 overflow-hidden rounded-full bg-black">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="profile"
                  />
                </picture>
              </div>
              <h1 className="font-bold">{`${mentor.name}`}</h1>
              <p className="pt-2 underline">{`#${mentor?.tag}`}</p>
              <p>Disponible</p>
              <p>Perú</p>
              <p>Ver horarios</p>
            </section>
          </aside>
        </div>

        <div className="col-span-7 flex-1">
          <section className="rounded-lg border bg-white px-8 py-4 shadow-sm">
            <Outlet />
          </section>
        </div>

        <div className="col-span-2">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="courses"
                className={({ isActive }) =>
                  isActive
                    ? ' flex cursor-pointer flex-row gap-1 text-base text-blue-600'
                    : ' flex cursor-pointer flex-row gap-1 text-base'
                }
              >
                <CoursesSVG />
                Cursos dictados
              </NavLink>
            </li>
            <li>
              <NavLink
                to="chat"
                className={({ isActive }) =>
                  isActive
                    ? ' flex cursor-pointer flex-row gap-1 text-base text-blue-600'
                    : ' flex cursor-pointer flex-row gap-1 text-base'
                }
              >
                <ChatSVG />
                Chat
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Mentor
