import LandingLayout from '@/components/Layouts/LandingLayout'
import Hero from '@/components/Landing/Hero'
import Carousel from '@/components/Landing/Carousel'
import LateralCard from '@/components/Landing/LateralCard'
import ContactForm from '@/components/Landing/ContactForm'
import { cursos } from '@/data/cursos.json'
import { categories } from '@/data/categorias.json'

function Landing() {
  return (
    <LandingLayout>
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
        <ContactForm />
      </section>
    </LandingLayout>
  )
}

export default Landing
