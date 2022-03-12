import MainLayout from '@/components/Layouts/MainLayout'
import Hero from '@/components/Landing/Hero'
import Carousel from '@/components/Landing/Carousel'
import LateralCard from '@/components/Landing/LateralCard'
import { cursos } from '@/data/cursos.json'
import { categories } from '@/data/categorias.json'
import contactSVG from '@/assets/svg/contact.svg'

function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />
      {/* Best rated Section */}
      <section className="flex w-full flex-col">
        <h2 className="my-6 text-center uppercase">Los mejores puntuados</h2>
        <Carousel cursos={cursos} />
      </section>
      {/* Course categories Section */}
      <section className="flex flex-col justify-center">
        <h2 className="my-6 text-center uppercase">Categorías</h2>
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="hover:bg-primary rounded-xl bg-black px-6 py-2 text-center text-sm text-white shadow-md"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </section>
      {/* Courses Section */}
      <section id="cursos" className="flex flex-col justify-center">
        <h2 className="my-6 text-center uppercase">Lo más reciente</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cursos.map((curso, index) => (
            <LateralCard element={curso} key={index} />
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contacto" className="flex justify-center">
        <div className="grid grid-cols-1 items-center overflow-hidden rounded-3xl bg-white shadow-md md:grid-cols-2 md:p-10">
          <img src={contactSVG} alt="contact" className="h-full px-14 py-5" />
          <div className="flex flex-col p-4">
            <div className="flex flex-col items-center text-center md:mb-14">
              <h2 className="text-3xl">¿Quieres recibir más información?</h2>
              <p>¡Déjanos tu email y nos pondremos en contacto contigo!</p>
            </div>
            <form className="mx-auto flex w-[70%] flex-col py-4">
              <label className="mb-2">Ingresa tu email:</label>
              <input type="text" required className="mb-5" />
              <button type="submit" className="btn_black">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default Home
