import { useParams, NavLink, Outlet } from 'react-router-dom'
import { ChatAlt2Icon, BookOpenIcon } from '@heroicons/react/outline'
import useUsersByType from '@/hooks/useUsersByType'
import Loading from '@/components/Loading'
import ContentPageLayout from '@/components/Layouts/ContentPageLayout'

function TeacherNav({ className }) {
  return (
    <div className={`flex-col gap-4 md:col-span-2 md:flex ${className}`}>
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
  )
}

function Teacher() {
  const { teachers } = useUsersByType()
  const { teacherId } = useParams()
  const teacher = teachers.find((teacher) => teacher._id === teacherId)

  if (!teacher) return <Loading />

  return (
    <ContentPageLayout>
      <header className="mb-8 hidden h-64 md:block">
        <img
          className="h-full w-full object-cover"
          src="https://wc.wallpaperuse.com/wallp/85-851869_s.jpg"
          alt="fondo de mentor"
        />
      </header>

      <section className="grid h-full grid-rows-6 gap-6 md:mx-3 md:grid-cols-12 md:grid-rows-1">
        <div className="md:col-span-3">
          <aside className="sticky top-32 -mt-4 md:-mt-36">
            <article className="flex items-center gap-8 rounded-xl bg-white p-4 shadow-md md:flex-col md:gap-4">
              <img
                className="h-20 w-20 rounded-full object-cover md:h-36 md:w-36"
                alt="profile"
                src={
                  teacher.photoURL ||
                  'https://www.w3schools.com/howto/img_avatar.png'
                }
              />
              <div className="hidden md:flex md:flex-col md:items-center">
                <h1 className="pb-2 text-center">{`${teacher.firstName} ${teacher.lastName}`}</h1>
                <p># Frontend</p>
                <p>Disponible</p>
              </div>
              <TeacherNav className="flex md:hidden" />
            </article>
          </aside>
        </div>

        <div className="row-span-5 flex md:col-span-7">
          <ContentPageLayout.Paper>
            <Outlet />
          </ContentPageLayout.Paper>
        </div>

        <TeacherNav className="hidden" />
      </section>
    </ContentPageLayout>
  )
}

export default Teacher
