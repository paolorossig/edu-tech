import Header from '@/components/Landing/Header'
import Hero from '@/components/Landing/Hero'
import Carousel from '@/components/Landing/Carousel'
import LateralCard from '@/components/Landing/LateralCard'
import { cursos } from '@/data/cursos.json'
import { categories } from '@/data/categorias.json'
import contactSVG from '@/assets/svg/contact.svg'
import Footer from '@/components/Footer'

function Home() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-20 p-4 xl:w-[1280px]">
          {/* Hero Section */}
          <Hero />
          {/* Best rated Section */}
          <section className="flex flex-col">
            <h2 className="my-6 text-center uppercase">
              Los mejores puntuados
            </h2>
            <Carousel cursos={cursos} />
          </section>
          {/* Course categories Section */}
          <section className="flex flex-col justify-center">
            <h2 className="my-6 text-center uppercase">Categorías</h2>
            <ul className="flex gap-8">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="rounded-xl bg-black px-6 py-2 text-white shadow-md hover:bg-primary"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </section>
          {/* Courses Section */}
          <section id="cursos" className="flex flex-col justify-center">
            <h2 className="my-6 text-center uppercase">Lo más reciente</h2>
            <div className="grid grid-cols-2 gap-8">
              {cursos.map((curso, index) => (
                <LateralCard element={curso} key={index} />
              ))}
            </div>
          </section>
          {/* Contact Section */}
          <section id="contacto" className="flex flex-col justify-center">
            <div className="grid grid-cols-2 items-center overflow-hidden rounded-3xl bg-white p-10 shadow-md">
              <img
                src={contactSVG}
                alt="contact"
                className="h-full px-14 py-5"
              />
              <div className="flex flex-col p-4">
                <div className="mb-14 flex flex-col items-center text-center">
                  <h2 className="text-3xl">
                    ¿Quieres recibir más información?
                  </h2>
                  <p>¡Déjanos tu email y nos pondremos en contacto contigo!</p>
                </div>
                <form className="mx-auto flex w-[70%] flex-col">
                  <label className="mb-2">Ingresa tu email:</label>
                  <input type="text" required className="mb-5" />
                  <button type="submit" className="btn_black">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
