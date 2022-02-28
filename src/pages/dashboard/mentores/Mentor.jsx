import { useParams, Link } from 'react-router-dom'

import { contenido, cursos } from '@/data/cursos.json'

function Mentor() {
  const { mentorId } = useParams()

  return (
    <div className="flex flex-1 flex-col px-8">
      <section className="header-mentor mb-8 h-64">
        <img
          src="https://app.ed.team/static/images/utils/covers/profile-cover-(6).jpg"
          alt="fondo de mentor"
        />
      </section>

      <section className="content-mentor mx-4 grid h-full grid-cols-12 gap-4">
        <div className="col-span-3 col-start-1">
          <aside className="sticky top-24 -mt-36">
            <section className="flex flex-col items-center rounded-md bg-white p-4 shadow-md">
              <div className="flex flex-col items-center justify-center">
                <picture className="h-36 w-36 overflow-hidden rounded-full bg-black">
                  <img
                    src="https://edteam-media.s3.amazonaws.com/users/avatar/6ed29257-6e92-407d-8749-dc67535fc0db.png"
                    alt="profile"
                  />
                </picture>
              </div>

              <h1 className="font-bold">Alexis Mora</h1>
              <p className="pt-2 underline">{`#FrontEnd`}</p>
              <p>Disponible</p>
              <p>Perú</p>
              <p>Ver horarios</p>
            </section>
          </aside>
        </div>

        <div className="col-span-7 flex-1">
          <section className="rounded-md bg-white p-4">
            <h2>Cursos dictados por ...</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="">
                  <article className="grid grid-cols-5 items-center gap-2 p-2">
                    <img
                      alt="cusro"
                      src="https://edteam-media.s3.amazonaws.com/courses/original/262e68b3-eea2-43f2-9e9a-febc106a8295.png"
                    />
                    <span className="col-span-4">CSS Avanzado</span>
                  </article>
                </Link>
              </li>
            </ul>
          </section>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nostrum fugiat praesentium vero quos. Dicta eius enim distinctio
            minus maxime quas non! Autem possimus delectus quas. Nemo ipsum quo
            minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Tempora nostrum fugiat praesentium vero quos. Dicta eius enim
            distinctio minus maxime quas non! Autem possimus delectus quas. Nemo
            ipsum quo minima. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Tempora nostrum fugiat praesentium vero quos.
            Dicta eius enim distinctio minus maxime quas non! Autem possimus
            delectus quas. Nemo ipsum quo minima. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Tempora nostrum fugiat praesentium
            vero quos. Dicta eius enim distinctio minus maxime quas non! Autem
            possimus delectus quas. Nemo ipsum quo minima. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Tempora nostrum fugiat
            praesentium vero quos. Dicta eius enim distinctio minus maxime quas
            non! Autem possimus delectus quas. Nemo ipsum quo minima. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum
            fugiat praesentium vero quos. Dicta eius enim distinctio minus
            maxime quas non! Autem possimus delectus quas. Nemo ipsum quo
            minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Tempora nostrum fugiat praesentium vero quos. Dicta eius enim
            distinctio minus maxime quas non! Autem possimus delectus quas. Nemo
            ipsum quo minima. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Tempora nostrum fugiat praesentium vero quos.
            Dicta eius enim distinctio minus maxime quas non! Autem possimus
            delectus quas. Nemo ipsum quo minima. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Tempora nostrum fugiat praesentium
            vero quos. Dicta eius enim distinctio minus maxime quas non! Autem
            possimus delectus quas. Nemo ipsum quo minima. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Tempora nostrum fugiat
            praesentium vero quos. Dicta eius enim distinctio minus maxime quas
            non! Autem possimus delectus quas. Nemo ipsum quo minima. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum
            fugiat praesentium vero quos. Dicta eius enim distinctio minus
            maxime quas non! Autem possimus delectus quas. Nemo ipsum quo
            minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Tempora nostrum fugiat praesentium vero quos. Dicta eius enim
            distinctio minus maxime quas non! Autem possimus delectus quas. Nemo
            ipsum quo minima. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Tempora nostrum fugiat praesentium vero quos.
            Dicta eius enim distinctio minus maxime quas non! Autem possimus
            delectus quas. Nemo ipsum quo minima. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Tempora nostrum fugiat praesentium
            vero quos. Dicta eius enim distinctio minus maxime quas non! Autem
            possimus delectus quas. Nemo ipsum quo minima. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Tempora nostrum fugiat
            praesentium vero quos. Dicta eius enim distinctio minus maxime quas
            non! Autem possimus delectus quas. Nemo ipsum quo minima. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Tempora nostrum
            fugiat praesentium vero quos. Dicta eius enim distinctio minus
            maxime quas non! Autem possimus delectus quas. Nemo ipsum quo
            minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Tempora nostrum fugiat praesentium vero quos. Dicta eius enim
            distinctio minus maxime quas non! Autem possimus delectus quas. Nemo
            ipsum quo minima. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Tempora nostrum fugiat praesentium vero quos.
            Dicta eius enim distinctio minus maxime quas non! Autem possimus
            delectus quas. Nemo ipsum quo minima.
          </p>
        </div>

        <div className="col-span-2">
          <section className="flex flex-col gap-3">
            <span>Cursos Dictados</span>
            <span>Chat</span>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Mentor
