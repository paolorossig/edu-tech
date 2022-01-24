import LateralCard from '../components/LateralCard'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
function Home() {
  const cursos = [
    {
      name: 'Javascript: async / await',
      tag: 'Web Development',
      url: 'https://devsdata.com/wp-content/uploads/2020/08/acync_await-1.png'
    },
    {
      name: 'React: Hooks',
      tag: 'Web Development',
      url: 'https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png'
    },
    {
      name: 'Docker: Images',
      tag: 'DevOps',
      url: 'https://laravelnews.imgix.net/images/docker.png?ixlib=php-3.3.1'
    }
  ]
  const categorias = [
    {
      name: 'DESARROLLO WEB'
    },
    {
      name: 'FRONTEND'
    },
    {
      name: 'DEVOPS'
    },
    {
      name: 'BACKEND'
    }
  ]
  return (
    <>
      <header className="flex justify-end z-20 shadow-md sticky top-0 h-20 my-2 mx-4 p-4 items-center bg-white rounded-xl">
        <h2 className="flex-auto">EduTECH</h2>
        <nav className="flex-auto">
          <ul className="flex flex-row">
            <li className="mx-3">Cursos</li>
            <li className="mx-3">Profesores</li>
            <li className="mx-3">Contactanos</li>
          </ul>
        </nav>
        <button className="border-solid border-2 border-black m-3 p-2 rounded-xl">
          SOY PROFESOR
        </button>
        <button className="border-solid border-2 bg-black text-white m-3s p-2 rounded-xl">
          SOY ALUMNO
        </button>
      </header>
      <main className="flex shadow-md top-0 my-2 mx-4 p-4 items-center bg-white rounded-xl">
        <article className="w-full">
          <section>
            <h3 className="text-center my-3">LOS MEJORES PUNTUADOS</h3>

            <Carousel>
              {cursos.map((curso, index) => (
                <div key={index}>
                  <img src={curso.url} />
                  <p className="legend">{curso.name}1</p>
                </div>
              ))}
            </Carousel>
          </section>
          <section>
            <h3 className="text-center my-3">LO MAS RECIENTE</h3>
            <div className="grid grid-cols-2 gap-8">
              {cursos.map((curso, index) => (
                <LateralCard element={curso} key={index} />
              ))}
            </div>
          </section>
          <section className="text-center">
            <h3 className="text-center my-3">CATEGORIAS</h3>
            <div>
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  className="my-5 border-solid border-2 bg-black text-white m-3 p-2 rounded-xl"
                >
                  {categoria.name}
                </button>
              ))}
            </div>
          </section>
          <section>
            <h3 className="my-3 text-center">CONTACTANOS</h3>
            <div className="bg-white rounded-3xl overflow-hidden grid grid-cols-2 border border-black-100 shadow-md mx-20">
              <img
                src="https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png"
                alt="Contactanos"
                className="object-cover min-h-[176px] min-w-[320px]"
              />
              <div className="p-4 flex flex-col">
                <h2 className="text-center mt-3">RECIBE MAS INFORMACION</h2>
                <label className="mt-10 mb-2">
                  Ingresa tu Correo Electronico:{' '}
                </label>

                <input
                  type="text"
                  id="eMail"
                  name="eMail"
                  required
                  className="border border-black rounded-md mb-5 mx-4"
                />
                <button className="border-solid border-2 bg-black text-white m-3s p-2 rounded-xl mx-4">
                  ENVIAR
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer className="flex justify-end z-20 shadow-md sticky top-0 h-10 my-2 mx-4 p-4 items-center bg-white rounded-xl">
        EduTech
      </footer>
    </>
  )
}

export default Home
