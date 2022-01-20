import LateralCard from '../components/LateralCard'
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
            <h4 className="text-center ">LOS MEJORES PUNTUADOS</h4>
          </section>
          <section>
            <h4 className="text-center">LO MAS RECIENTE</h4>
            <div className="grid grid-cols-2">
              {cursos.map((curso, index) => (
                <LateralCard element={curso} key={index} />
              ))}
            </div>
          </section>
          <section className="text-center">
            <h4 className="text-center">CATEGORIAS</h4>
            <button className="my-5 border-solid border-2 bg-black text-white m-3s p-2 rounded-xl">
              DESARROLLO WEB
            </button>
            <button className="my-5 border-solid border-2 bg-black text-white m-3s p-2 rounded-xl">
              FRONTEND
            </button>
            <button className="my-5 border-solid border-2 bg-black text-white m-3s p-2 rounded-xl">
              BACKEND
            </button>
            <button className="my-5 border-solid border-2 bg-black text-white m-3s p-2 rounded-xl">
              DEVOPS
            </button>
          </section>
          <section>
            <h4 className="my-3 text-center">CONTACTANOS</h4>
            <div className="flex shadow-md top-0 sticky my-2 mx-4 p-4 items-center bg-white rounded-xl">
              Ingresa tu correo
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
