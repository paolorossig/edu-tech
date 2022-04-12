import useCategories from '@/hooks/useCategories'
import { useAllCoursesQuery } from '@/features/courses/CourseApi'
import LandingLayout from '@/components/Layouts/LandingLayout'
import Hero from '@/components/Landing/Hero'
import Carousel from '@/components/Landing/Carousel'
import LateralCard from '@/components/Landing/LateralCard'
import ContactForm from '@/components/Landing/ContactForm'
import Loading from '@/components/Loading'

function Landing() {
  const categories = useCategories()
  const { data } = useAllCoursesQuery()

  if (!data?.courses.length) return <Loading />

  return (
    <LandingLayout>
      {/* Hero Section */}
      <Hero />
      {/* Best rated Section */}
      <section className="flex w-full flex-col">
        <h2 className="my-6 text-center uppercase">Los mejores puntuados</h2>
        <Carousel courses={data.courses} />
      </section>
      {/* Course categories Section */}
      <section className="flex flex-col justify-center">
        <h2 className="my-6 text-center uppercase">Categorías</h2>
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {categories.options?.map((category) => (
            <li
              key={category.value}
              className="hover:bg-primary-400 rounded-xl bg-black px-6 py-2 text-center text-sm text-white shadow-md"
            >
              {category.label}
            </li>
          ))}
        </ul>
      </section>
      {/* Courses Section */}
      <section id="cursos" className="flex flex-col justify-center">
        <h2 className="my-6 text-center uppercase">Lo más reciente</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.courses.map((course) => (
            <LateralCard
              title={course.name}
              subtitle={course.category.name}
              imageURL={course.imageURL}
              key={course._id}
            />
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
