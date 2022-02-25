import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import Header from '@/components/Landing/Header'
import LateralCard from '@/components/Landing/LateralCard'
import { cursos } from '@/data/cursos.json'
import { categories } from '@/data/categorias.json'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Hero from '@/components/Landing/Hero'

function Home() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center">
        <div className="flex flex-col items-center p-4 xl:w-[1280px]">
          <Hero />
          <section className="flex max-w-3xl flex-col">
            <h2 className="my-3 text-center uppercase">
              Los mejores puntuados
            </h2>
            <Carousel>
              {cursos.map((curso, index) => (
                <div key={index}>
                  <img src={curso.url} />
                  <Link to={`/course/detail/${curso.id}`}>
                    <p className="legend">{curso.name}</p>
                  </Link>
                </div>
              ))}
            </Carousel>
          </section>
          <section
            id="cursos"
            className="flex h-[500px] flex-col justify-center"
          >
            <h3 className="my-3 text-center">LO MAS RECIENTE</h3>
            <div className="grid grid-cols-2 gap-8">
              {cursos.map((curso, index) => (
                <LateralCard element={curso} key={index} />
              ))}
            </div>
          </section>
          <section className="flex h-[300px] flex-col justify-center text-center">
            <h3 className="my-3 text-center">CATEGORIAS</h3>
            <div>
              {categories.map((categoria, index) => (
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
          <section
            id="contacto"
            className="flex h-[400px] flex-col justify-center"
          >
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
        </div>
      </main>
      <footer className="sticky top-0 z-20 my-2 mx-4 flex h-10 items-center justify-end rounded-xl bg-white p-4 shadow-md">
        EduTech
      </footer>
    </>
  )
}

export default Home
