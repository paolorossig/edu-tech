import LateralCard from '../components/Landing/LateralCard'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'
function Home() {
  const cursos = [
    {
      id: 1,
      name: 'Javascript: async / await',
      tag: 'Web Development',
      url: 'https://devsdata.com/wp-content/uploads/2020/08/acync_await-1.png'
    },
    {
      id: 2,
      name: 'React: Hooks',
      tag: 'Web Development',
      url: 'https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png'
    },
    {
      id: 3,
      name: 'Docker: Images',
      tag: 'DevOps',
      url: 'https://laravelnews.imgix.net/images/docker.png?ixlib=php-3.3.1'
    }
  ]
  const categorias = [
    {
      id: 1,
      name: 'DESARROLLO WEB'
    },
    {
      id: 2,
      name: 'FRONTEND'
    },
    {
      id: 3,
      name: 'DEVOPS'
    },
    {
      id: 4,
      name: 'BACKEND'
    }
  ]
  return (
    <>
      <header className="sticky top-0 z-20 my-2 mx-4 flex h-20 items-center justify-end rounded-xl bg-white p-4 shadow-md">
        <h2 className="flex-auto">EduTECH</h2>
        <nav className="flex-auto">
          <ul className="flex flex-row">
            <li className="link mx-3">
              <Link to="/cursos">Cursos</Link>
            </li>
            <li className="link mx-3">
              <Link to="/profesores">Profesores</Link>
            </li>
            <li className="link mx-3">
              <Link to="/contactanos">Contactanos</Link>
            </li>
          </ul>
        </nav>
        {/* <button className="m-3 rounded-xl border-2 border-solid border-black p-2">
          SOY PROFESOR
        </button> */}
        {/* <button className="m-3s rounded-xl border-2 border-solid bg-black p-2 text-white">
          LOGIN
        </button> */}
        <Link
          to="/login"
          className="m-3 rounded-xl border-2 border-solid bg-black p-2 text-white"
        >
          Login
        </Link>
      </header>
      <main className="top-0 my-2 mx-4 flex items-center rounded-xl bg-white p-4 shadow-md">
        <article className="w-full">
          <section>
            <h3 className="my-3 text-center">LOS MEJORES PUNTUADOS</h3>

            <Carousel>
              {cursos.map((curso, index) => (
                <div key={index}>
                  <img src={curso.url} />
                  <Link
                    to={`/course/detail/${curso.id}`}
                    className=" h-10 rounded-xl border border-solid border-black px-2"
                  >
                    <p className="legend">{curso.name}</p>
                  </Link>
                </div>
              ))}
            </Carousel>
          </section>
          <section>
            <h3 className="my-3 text-center">LO MAS RECIENTE</h3>
            <div className="grid grid-cols-2 gap-8">
              {cursos.map((curso, index) => (
                <LateralCard element={curso} key={index} />
              ))}
            </div>
          </section>
          <section className="text-center">
            <h3 className="my-3 text-center">CATEGORIAS</h3>
            <div>
              {categorias.map((categoria, index) => (
                <Link
                  key={index}
                  to={`/category/${categoria.id}`}
                  className="m-3 rounded-xl border-2 border-solid bg-black p-2 text-white"
                >
                  {categoria.name}
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h3 className="my-3 text-center">CONTACTANOS</h3>
            <div className="border-black-100 mx-20 grid grid-cols-2 overflow-hidden rounded-3xl border bg-white shadow-md">
              <img
                src="https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png"
                alt="Contactanos"
                className="min-h-[176px] min-w-[320px] object-cover"
              />
              <div className="flex flex-col p-4">
                <h2 className="mt-3 text-center">RECIBE MAS INFORMACION</h2>
                <label className="mt-10 mb-2">
                  Ingresa tu Correo Electronico:{' '}
                </label>

                <input
                  type="text"
                  id="eMail"
                  name="eMail"
                  required
                  className="mx-4 mb-5 rounded-md border border-black"
                />
                <button className="m-3s mx-4 rounded-xl border-2 border-solid bg-black p-2 text-white">
                  ENVIAR
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer className="sticky top-0 z-20 my-2 mx-4 flex h-10 items-center justify-end rounded-xl bg-white p-4 shadow-md">
        EduTech
      </footer>
    </>
  )
}

export default Home
