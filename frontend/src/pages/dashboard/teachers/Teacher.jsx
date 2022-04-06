import { useParams, NavLink, Outlet } from 'react-router-dom'
import { ChatAlt2Icon, BookOpenIcon } from '@heroicons/react/outline'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'
import useTeachers from '@/hooks/useTeachers'

function Teacher() {
  const teachers = useTeachers()
  const { teacherId } = useParams()
  const teacher = teachers.find((teacher) => teacher._id === teacherId)

  return (
    <ContentPageLayout>
      <section className="mb-8 h-64">
        <img
          className="h-full w-full object-cover"
          src="https://app.ed.team/static/images/utils/covers/profile-cover-(6).jpg"
          alt="fondo de mentor"
        />
      </section>

      <section className="mx-3 grid h-full grid-cols-12 gap-6">
        <div className="col-span-3">
          <aside className="sticky top-32 -mt-36">
            <section className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-md">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="h-36 w-36 rounded-full object-cover"
                  alt="profile"
                  src={
                    teacher.photoURL ||
                    'https://www.w3schools.com/howto/img_avatar.png'
                  }
                />
              </div>
              <h1 className="text-center">{`${teacher.firstName} ${teacher.lastName}`}</h1>
              <p className="pt-2 underline"># Frontend</p>
              <p>Disponible</p>
              <p>Perú</p>
              <p>Ver horarios</p>
            </section>
          </aside>
        </div>

        <div className="col-span-7">
          <section className="rounded-lg border bg-white px-8 py-4 shadow-sm">
            <Outlet />
          </section>
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <NavLink
            to="courses"
            className={({ isActive }) =>
              isActive
                ? 'flex cursor-pointer items-center text-blue-600'
                : 'flex cursor-pointer items-center'
            }
          >
            <BookOpenIcon className="mr-2 h-5 w-5" />
            Cursos
          </NavLink>
          <NavLink
            to="chat"
            className={({ isActive }) =>
              isActive
                ? 'flex cursor-pointer items-center text-blue-600'
                : 'flex cursor-pointer items-center'
            }
          >
            <ChatAlt2Icon className="mr-2 h-5 w-5" />
            Chat
          </NavLink>
        </div>
      </section>
    </ContentPageLayout>
  )
}

export default Teacher
